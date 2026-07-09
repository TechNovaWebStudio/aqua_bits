"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./MobileNavbar.css";

export default function MobileNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Initialize role as 'Guest' to prevent Next.js SSR mismatch errors
  const [role, setRole] = useState("Guest");

  // Safely read from localStorage only after mounting on the client side
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  // Determine the profile target route based on the current user role
  const profilePath = role === "Guest" ? "/account" : "/profile";

  const navItems = [
    { id: "home", path: "/", icon: "fa-solid fa-house" },
    { id: "search", path: "/explore", icon: "fa-solid fa-magnifying-glass" },
    { id: "compass", path: "/view-short", icon: "fa-solid fa-compass", isAccent: true },
    { id: "heart", path: "/categories", icon: "fa-solid fa-layer-group" },
    { id: "profile", path: profilePath, isProfile: true }
  ];

  // For the active indicator pill, check if the current pathname matches 
  // OR if we are on a nested route (e.g., matching /profile or /account smoothly)
  const activeIndex = navItems.findIndex((item) => 
    item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)
  );

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <nav className="ios-liquid-navbar">
      {/* The fluid moving liquid glass capsule */}
      {activeIndex !== -1 && (
        <div 
          className="liquid-pill" 
          style={{ "--active-index": activeIndex }}
        >
          <div className="pill-glass-shine"></div>
        </div>
      )}

      {navItems.map((item, index) => {
        const isActive = activeIndex === index;
        
        if (item.isProfile) {
          return (
            <button
              key="profile"
              className={`navbar-icon-unit ${isActive ? "profile-active item-active" : ""}`}
              onClick={() => handleNavigation(item.path)}
              aria-label="Profile"
            >
              {role === "Guest" ? (
                // 1. GUEST STATE ICON
                <div className="guest-avatar-icon-mobile">
                  <i className="fa-solid fa-user"></i>
                </div>
              ) : (
                // 2. LOGGED-IN STATE (User / Admin) AVATAR
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Avatar"
                  className="navbar-user-avatar"
                />
              )}
            </button>
          );
        }

        return (
          <button
            key={item.id}
            className={`navbar-icon-unit ${item.isAccent ? "center-compass-accent" : ""} ${isActive ? "item-active" : ""}`}
            onClick={() => handleNavigation(item.path)}
            aria-label={item.id}
          >
            <i className={`${item.icon} nav-icon`}></i>
          </button>
        );
      })}
    </nav>
  );
}