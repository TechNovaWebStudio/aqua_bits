"use client";
import { useState } from "react";
import "./MobileNavbar.css";

export default function MobileNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Map keys to layout order to calculate sliding positions
  const navItems = [
    { id: "home", icon: "fa-solid fa-house" },
    { id: "search", icon: "fa-solid fa-magnifying-glass" },
    { id: "compass", icon: "fa-solid fa-compass", isAccent: true },
    { id: "heart", icon: "fa-regular fa-heart" },
    { id: "profile", isProfile: true }
  ];

  return (
    <nav 
      className="native-mobile-navbar" 
      style={{ "--active-index": activeIndex }}
    >
      {/* The fluid moving background glass */}
      <div className="sliding-pill"></div>

      {navItems.map((item, index) => {
        const isActive = activeIndex === index;
        
        if (item.isProfile) {
          return (
            <div
              key="profile"
              className={`navbar-icon-unit ${isActive ? "profile-active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Avatar"
                className="navbar-user-avatar"
              />
            </div>
          );
        }

        return (
          <div
            key={item.id}
            className={`navbar-icon-unit ${item.isAccent ? "center-compass-accent" : ""} ${isActive ? "icon-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <i className={item.icon}></i>
          </div>
        );
      })}
    </nav>
  );
}