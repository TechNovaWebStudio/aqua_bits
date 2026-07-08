"use client";
import { useRouter, usePathname } from "next/navigation";
import "./SidebarLeft.css";

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

  // Check if profile route itself is currently active
  const isProfileActive = pathname.startsWith("/profile");

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

      {/* Profile Footer Section with Active Validation Flag */}
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
          <p>@elenaro</p>
        </div>
        <i className="fa-solid fa-ellipsis-vertical footer-more-btn"></i>
      </div>
    </aside>
  );
}