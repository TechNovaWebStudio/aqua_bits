"use client";
import { useRouter, usePathname } from "next/navigation";
import "./SidebarLeft.css";

export default function SidebarLeft() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: "fa-solid fa-house" },
    { name: "Explore", path: "/explore", icon: "fa-solid fa-magnifying-glass" },
    { name: "Discover", path: "/discover", icon: "fa-solid fa-compass", isAccent: true },
    { name: "Groups", path: "/groups", icon: "fa-solid fa-user-group" },
    { name: "Notifications", path: "/notifications", icon: "fa-regular fa-heart" },
    { name: "Messages", path: "/messages", icon: "fa-regular fa-comment-dots" },
  ];

  return (
    <aside className="sidebar-left">
      <div className="brand-logo-section">
        <h1 className="app-brand-title">
          Aqua<span className="brand-dot">_</span>Bits
        </h1>
        <nav className="sidebar-navigation">
          <ul className="navigation-links-list">
            {navItems.map((item) => {
              // Check if the current URL matches the item's path
              const isCurrentActive = 
                item.path === "/" 
                  ? pathname === "/" 
                  : pathname.startsWith(item.path);

              // Construct dynamic class names safely
              const itemClass = [
                "nav-link-item",
                // item.isAccent ? "accent-compass-pill" : "",
                isCurrentActive ? "active" : ""
              ].filter(Boolean).join(" ");

              return (
                <li
                  key={item.name}
                  className={itemClass}
                  onClick={() => router.push(item.path)}
                  style={{ cursor: "pointer" }} // Ensures the user knows it's clickable
                >
                  <i className={`${item.icon} nav-icon`}></i>
                  <span className="nav-text">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="sidebar-user-footer">
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