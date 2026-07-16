'use client';
import { useState, useEffect, useRef } from "react";
import "./MobileHeader.css";
import { useRouter } from "next/navigation";

export default function MobileHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="ios-liquid-header">
      <div className="logo" onClick={() => router.push("/")}>
        <img src="/Logo.png" alt="Brand Logo" />
      </div>
      <div className="native-header-icons">
        <button className="header-icon-btn" aria-label="Favorites">
          <i className="fa-regular fa-heart"></i>
        </button>

        {/* Plus / Create Action Container */}
        <div className="create-menu-container" ref={menuRef}>
          <button
            className={`header-icon-btn plus-btn ${isOpen ? "active" : ""}`}
            aria-label="Create New"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>

          {/* Attractive Glassmorphic Popup Menu */}
          {isOpen && (
            <div className="popup-menu">
              <button
                className="menu-item"
                onClick={() => router.push("/create-shorts")}
              >
                <i className="fa-solid fa-bolt"></i>
                <span>Shorts</span>
              </button>

              <button
                className="menu-item"
                onClick={() => router.push("/create-post")}
              >
                <i className="fa-regular fa-square-plus"></i>
                <span>Post</span>
              </button>

              <button
                className="menu-item"
                onClick={() => {
                  setIsOpen(false);
                  // router.push("/create-reel"); // Uncomment if you have a Reel page
                }}
              >
                <i className="fa-solid fa-clapperboard"></i>
                <span>Reel</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}