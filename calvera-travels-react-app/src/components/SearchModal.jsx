// src/components/SearchModal.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./SearchModal.css";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]); // [{id, snippetHtml}]
  const [count, setCount] = useState(0);
  const [activeIdx, setActiveIdx] = useState(-1);
  const hitsMapRef = useRef(new Map()); // id -> HTMLElement[]
  const lastQueryRef = useRef("");

  // Close on ESC + keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (!isOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && activeIdx >= 0) {
        e.preventDefault();
        jumpTo(results[activeIdx].id);
      }
    };
    window.addEventListener("keydown", onKey, { passive: false });
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, results, activeIdx, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setResults([]);
      setCount(0);
      setActiveIdx(-1);
      clearHighlights();
    }
  }, [isOpen]);

  const container = useMemo(
    () => document.querySelector("#app-content"),
    [isOpen]
  );

  function clearHighlights() {
    const marks = document.querySelectorAll("mark.search-highlight");
    marks.forEach((mark) => {
      const parent = mark.parentNode;
      if (!parent) return;
      parent.replaceChild(document.createTextNode(mark.textContent || ""), mark);
      parent.normalize();
    });
    hitsMapRef.current.clear();
  }

  function getTextNodes(root) {
    if (!root) return [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        const tag = p.tagName;
        if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(tag)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = [];
    let cur = walker.nextNode();
    while (cur) {
      nodes.push(cur);
      cur = walker.nextNode();
    }
    return nodes;
  }

  function highlightInto(parentEl, textNode, re, idStr) {
    // Split & wrap matches for a single text-node
    const text = textNode.nodeValue || "";
    const parts = text.split(re);
    if (parts.length === 1) return false;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i % 2 === 1) {
        const mark = document.createElement("mark");
        mark.className = "search-highlight";
        mark.dataset.hitId = idStr;
        mark.textContent = part;
        frag.appendChild(mark);
      } else if (part) {
        frag.appendChild(document.createTextNode(part));
      }
    }
    parentEl.replaceChild(frag, textNode);
    return true;
  }

  function makeSnippet(el, term) {
    const text = el.innerText || "";
    const idx = text.toLowerCase().indexOf(term.toLowerCase());
    if (idx === -1) return (text || "").slice(0, 120);

    const start = Math.max(0, idx - 40);
    const end = Math.min(text.length, idx + term.length + 40);
    const before = text.slice(start, idx);
    const match = text.slice(idx, idx + term.length);
    const after = text.slice(idx + term.length, end);

    return `${start > 0 ? "…" : ""}${escapeHtml(before)}<mark class="result-mark">${escapeHtml(
      match
    )}</mark>${escapeHtml(after)}${end < text.length ? "…" : ""}`;
  }

  function escapeHtml(s) {
    return s
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function handleSearch(e) {
    e?.preventDefault?.();
    clearHighlights();

    const term = query.trim();
    if (!term || !container) {
      setResults([]);
      setCount(0);
      setActiveIdx(-1);
      return;
    }
    lastQueryRef.current = term;

    const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");

    const textNodes = getTextNodes(container);
    const maxNodes = 20000; // safety
    let totalMarks = 0;
    const hits = [];
    let idCounter = 1;

    for (let i = 0; i < textNodes.length && i < maxNodes; i++) {
      const t = textNodes[i];
      if (!re.test(t.nodeValue || "")) continue;

      // ✅ capture parent BEFORE replacing
      const parentEl = t.parentElement;
      if (!parentEl) continue;

      const idStr = String(idCounter);
      const created = highlightInto(parentEl, t, re, idStr);
      if (!created) continue;

      // Now collect all marks with this id under the same parent
      const addedMarks = parentEl.querySelectorAll(`mark.search-highlight[data-hit-id="${idStr}"]`);
      if (addedMarks.length) {
        hitsMapRef.current.set(idStr, Array.from(addedMarks));
        hits.push({
          id: idStr,
          snippetHtml: makeSnippet(parentEl, term),
        });
        totalMarks += addedMarks.length;
        idCounter += 1;
      }
    }

    setResults(hits);
    setCount(totalMarks);
    setActiveIdx(hits.length ? 0 : -1);
  }

  function jumpTo(id) {
    const marks = hitsMapRef.current.get(id);
    if (!marks || !marks.length) return;
    const target = marks[0];

    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    marks.forEach((m) => {
      m.classList.add("pulse");
      setTimeout(() => m.classList.remove("pulse"), 900);
    });
  }

  return !isOpen ? null : (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close search">
          ✕
        </button>

        <h2>Search this page</h2>

        <form className="search-row" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            placeholder="Type and press Enter…"
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button type="submit">Search</button>
        </form>

        <div className="meta">
          {lastQueryRef.current
            ? `“${lastQueryRef.current}” — ${count} match${count === 1 ? "" : "es"}`
            : "Type a term and press Enter"}
        </div>

        <div className="results-list" role="listbox" aria-label="Search results">
          {results.map((r, i) => (
            <button
              key={r.id}
              role="option"
              aria-selected={i === activeIdx}
              className={`result-item ${i === activeIdx ? "active" : ""}`}
              onMouseEnter={() => setActiveIdx(i)}
              onClick={() => jumpTo(r.id)}
              dangerouslySetInnerHTML={{ __html: r.snippetHtml }}
            />
          ))}
          {!results.length && lastQueryRef.current && (
            <div className="no-results">No matches found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
