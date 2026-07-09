"use client";
import { useRouter, usePathname } from "next/navigation";
import "./SidebarLeft.css";
import { useState, useEffect } from "react";

export default function SidebarLeft() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: "fa-solid fa-house" },
    { name: "Explore", path: "/explore", icon: "fa-solid fa-magnifying-glass" },
    { name: "Shorts", path: "/view-short", icon: "fa-solid fa-compass", isAccent: true },
    { name: "Categories", path: "/categories", icon: "fa-solid fa-layer-group" },
    { name: "Groups", path: "/groups", icon: "fa-solid fa-user-group" },
    { name: "Messages", path: "/messages", icon: "fa-regular fa-comment-dots" },
  ];

  // Initialize role as 'Guest' to prevent Next.js SSR mismatch errors
  const [role, setRole] = useState("Guest");

  // Safely read from localStorage only after mounting on the client side
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  // Correctly checks if the pathname starts with EITHER route
  const profileRoutes = ["/profile", "/account"];
  const isProfileActive = profileRoutes.some((route) => pathname.startsWith(route));

  return (
    <aside className="sidebar-left">
      <div className="brand-logo-section">
        <h1 className="app-brand-title">
          Aqua<span className="brand-dot">_</span>Bits
        </h1>

        <nav className="sidebar-navigation">
          <ul className="navigation-links-list">
            {navItems.map((item) => {
              const isCurrentActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              const itemClass = [
                "nav-link-item",
                item.isAccent ? "accent-compass-pill" : "",
                isCurrentActive ? "active" : ""
              ].filter(Boolean).join(" ");

              return (
                <li
                  key={item.name}
                  className={itemClass}
                  onClick={() => router.push(item.path)}
                >
                  <i className={`${item.icon} nav-icon`}></i>
                  <span className="nav-text">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* --- Dynamic Profile Footer Section --- */}
      {role === 'Guest' ? (
        // 1. GUEST STATE
        <div
          className={`sidebar-user-footer ${isProfileActive ? "active-profile" : ""}`}
          onClick={() => router.push("/account")}
        >
          <div className="avatar-wrapper">
            <div className="guest-avatar-icon">
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
          <div className="meta-profile-details">
            <h5>Create an account</h5>
            <p className="login-now-btn">
              Login now
            </p>
          </div>
        </div>
      ) : (
        // 2. LOGGED-IN STATE (User / Admin)
        <div
          className={`sidebar-user-footer ${isProfileActive ? "active-profile" : ""}`}
          onClick={() => router.push("/profile")}
        >
          <div className="avatar-wrapper">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Active Account Avatar"
              className="navbar-user-avatar"
            />
            <span className="online-indicator"></span>
          </div>
          <div className="meta-profile-details">
            <h5>Elena Rostova</h5>
            <p>{role === 'Admin' ? '@admin_elena' : '@elenaro'}</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical footer-more-btn"></i>
        </div>
      )}
    </aside>
  );
}