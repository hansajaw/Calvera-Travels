import { useEffect } from "react";

function setMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setOg(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function setJsonLd(id, obj) {
  // ensure 1 script per page section (by id)
  let script = document.getElementById(id);
  if (!obj) {
    if (script) script.remove();
    return;
  }
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(obj);
}

const SITE_NAME = "Calvera Travels";
const SITE_URL  = "https://calveratravels.com";
const DEFAULT_IMAGE = `${process.env.PUBLIC_URL || ""}/images/og-image-default.jpg`;

export default function SEO({
  title = SITE_NAME,
  description = "Personalized Sri Lanka tours crafted by local experts.",
  url = SITE_URL,
  image = DEFAULT_IMAGE,
  type = "website",
  canonical,           // optional override
  noindex = false,     // set true for thank-you/admin pages
  jsonLd = null,       // optional JSON-LD object
}) {
  useEffect(() => {
    const fullTitle = title && title !== SITE_NAME ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    // robots
    if (noindex) {
      setMeta("robots", "noindex,nofollow");
    } else {
      const robots = document.querySelector('meta[name="robots"]');
      if (robots) robots.remove();
    }

    // canonical
    setLink("canonical", canonical || url);

    // basic meta
    setMeta("description", description);
    setMeta("theme-color", "#2B3E4B");

    // Open Graph
    setOg("og:type", type);
    setOg("og:title", fullTitle);
    setOg("og:description", description);
    setOg("og:image", image);
    setOg("og:site_name", SITE_NAME);
    setOg("og:url", canonical || url);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // JSON-LD
    setJsonLd("seo-jsonld", jsonLd || null);

    // cleanup on unmount (optional – we keep tags for SPA navigation)
    return () => {
      // no-op; keeping tags is fine as subsequent pages will overwrite values
    };
  }, [title, description, url, image, type, canonical, noindex, jsonLd]);

  return null;
}
