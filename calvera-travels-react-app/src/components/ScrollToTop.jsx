// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the route (pathname) changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // change to "auto" if you DON'T want the smooth animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
