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
    { name: "Create", path: "/create", icon: "fa-solid fa-plus", hasSubmenu: true },
    { name: "Shorts", path: "/shorts", icon: "fa-solid fa-compass", isAccent: true },
    { name: "Posts", path: "/post-feed", icon: "fa-solid fa-layer-group" },
  ];

  // Initialize role as 'Guest' to prevent Next.js SSR mismatch errors
  const [role, setRole] = useState("Guest");
  // Manage visibility of "Create" sub-buttons
  const [isCreateOpen, setIsCreateOpen] = useState(false);

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
        <div className="logo" onClick={() => router.push("/")}>
          <img src="/Logo.png" alt="Brand Logo" />
        </div>

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

              if (item.hasSubmenu) {
                return (
                  <li key={item.name} className="submenu-container">
                    <div
                      className={itemClass}
                      onClick={() => setIsCreateOpen(!isCreateOpen)}
                    >
                      <i className={`${item.icon} nav-icon`}></i>
                      <span className="nav-text">{item.name}</span>
                      <i className={`fa-solid fa-chevron-down submenu-arrow ${isCreateOpen ? "open" : ""}`}></i>
                    </div>

                    {/* Sub-navigation items with micro-interactions */}
                    <ul className={`submenu-list ${isCreateOpen ? "visible" : ""}`}>
                      <li
                        className="submenu-item"
                        onClick={() => router.push("/create/short")}
                      >
                        <i className="fa-solid fa-clapperboard sub-icon"></i>
                        <span>Create Short</span>
                      </li>
                      <li
                        className="submenu-item"
                        onClick={() => router.push("/create/post")}
                      >
                        <i className="fa-solid fa-pen-to-square sub-icon"></i>
                        <span>Create Post</span>
                      </li>
                      <li
                        className="submenu-item"
                        onClick={() => router.push("/create/story")}
                      >
                        <i className="fa-solid fa-circle-play sub-icon"></i>
                        <span>Create Story</span>
                      </li>
                    </ul>
                  </li>
                );
              }

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