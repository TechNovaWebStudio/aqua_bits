"use client";
import { useState } from "react";
import "./MobileNavbar.css";

export default function MobileNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { id: "home", icon: "fa-solid fa-house" },
    { id: "search", icon: "fa-solid fa-magnifying-glass" },
    { id: "compass", icon: "fa-solid fa-compass", isAccent: true },
    { id: "heart", icon: "fa-regular fa-heart" },
    { id: "profile", isProfile: true }
  ];

  return (
    <nav className="ios-liquid-navbar">
      {/* The fluid moving liquid glass capsule */}
      <div 
        className="liquid-pill" 
        style={{ "--active-index": activeIndex }}
      >
        <div className="pill-glass-shine"></div>
      </div>

      {navItems.map((item, index) => {
        const isActive = activeIndex === index;
        
        if (item.isProfile) {
          return (
            <button
              key="profile"
              className={`navbar-icon-unit ${isActive ? "profile-active item-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label="Profile"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Avatar"
                className="navbar-user-avatar"
              />
            </button>
          );
        }

        return (
          <button
            key={item.id}
            className={`navbar-icon-unit ${item.isAccent ? "center-compass-accent" : ""} ${isActive ? "item-active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={item.id}
          >
            <i className={`${item.icon} nav-icon`}></i>
          </button>
        );
      })}
    </nav>
  );
}