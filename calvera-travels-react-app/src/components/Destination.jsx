import React, { useMemo, useState } from "react";
import SEO from "./SEO";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import "./Destination.css";
import { DESTINATIONS } from "../data/destinationData";

const HERO_IMAGES = [
  "/images/destination/Desti-hero/desti1.jpg",
  "/images/destination/Desti-hero/desti2.jpg",
  "/images/destination/Desti-hero/desti3.jpg",
  "/images/destination/Desti-hero/desti4.jpg",
];

function slugify(name = "") {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function Destination() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode] = useState("grid");
  const [favorites, setFavorites] = useState([]);

  const regions = useMemo(() => {
    const unique = new Set(
      DESTINATIONS.map((d) => (d.region || "").toLowerCase()).filter(Boolean)
    );
    return ["all", ...Array.from(unique).sort()];
  }, []);

  const filtered = useMemo(() => {
    let pool =
      activeFilter === "all"
        ? DESTINATIONS
        : DESTINATIONS.filter(
            (d) => (d.region || "").toLowerCase() === activeFilter
          );

    if (search.trim()) {
      const q = search.toLowerCase();
      pool = pool.filter((d) =>
        (d.name + " " + (d.tagline || "") + " " + (d.region || ""))
          .toLowerCase()
          .includes(q)
      );
    }

    return [...pool].sort((a, b) => {
      if (sortBy === "region")
        return (a.region || "").localeCompare(b.region || "");
      return (a.name || "").localeCompare(b.name || "");
    });
  }, [activeFilter, search, sortBy]);

  const toggleFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="destination-page">
      <SEO
        title="Explore Sri Lanka's Destinations - Calvera Travels"
        description="Browse beautiful destinations across Sri Lanka with Calvera Travels."
      />

      {/* ======= Shared Hero Section ======= */}
      <Hero
        images={HERO_IMAGES}
        title="Explore Destinations"
        highlightText="Sri Lanka Awaits"
        subtitle="Discover breathtaking places and hidden gems."
        badge="Top Destinations"
        primaryButton={{
          text: "View Regions",
          link: "#destinations",
          icon: "fa-map-marked-alt",
        }}
        secondaryButton={{
          text: "Plan Your Trip",
          link: "/Planyourtrip",
          icon: "fa-suitcase",
        }}
        showFeatures
        showScrollIndicator
      />

      {/* ======= Main Section ======= */}
<section id="destinations" className="destinations-section">
  <div className="container">
    {/* ===== FILTER & SEARCH TOOLBAR ===== */}
    <div className="toolbar">
      {/* ---- Filter Buttons ---- */}
      <div className="filter-bar">
        {regions.map((filter) => {
          const label =
            filter === "all"
              ? "All Regions"
              : filter.charAt(0).toUpperCase() + filter.slice(1);
          return (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ---- Search & Sort Controls ---- */}
      <div className="search-sort">
        {/* Search Box */}
        <div className="search-box">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>

          <input
            type="search"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            aria-label="Search destinations"
          />

          {search && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
          aria-label="Sort destinations"
        >
          <option value="name">Sort by Name</option>
          <option value="region">Sort by Region</option>
        </select>
      </div>
    </div>



          {/* Cards */}
          <div className={`destinations-${viewMode}`}>
            {filtered.map((destination) => {
              const slug = destination.slug || slugify(destination.name);
              const imgSrc =
                destination.image ||
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=70";
              const isFav = favorites.includes(destination.id);

              return (
                <Link
                  key={destination.id || slug}
                  to={`/Destination/${slug}`}
                  className="destination-card"
                >
                  <div className="card-image">
                    <img src={imgSrc} alt={destination.name} loading="lazy" />
                    <button
                      className={`fav-btn ${isFav ? "active" : ""}`}
                      onClick={(e) => toggleFavorite(e, destination.id)}
                    >
                      <i className="fas fa-heart" />
                    </button>
                  </div>

                  <div className="card-content">
                    <h3>{destination.name}</h3>
                    <p className="card-tagline">
                      {destination.tagline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
