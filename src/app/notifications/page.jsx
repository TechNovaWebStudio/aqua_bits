"use client";

import { useState } from "react";
import "./notifications.css";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [pushEnabled, setPushEnabled] = useState(true);

  const [notifications, setNotifications] = useState([
    {
      id: "n1",
      type: "like",
      user: { name: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      text: "liked your photo from your summer trip.",
      time: "2m ago",
      isUnread: true,
      metaContent: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "n2",
      type: "mention",
      user: { name: "Merico V.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
      text: "mentioned you in a comment: \"@you this looks absolutely incredible, let's build it!\"",
      time: "45m ago",
      isUnread: true,
    },
    {
      id: "n3",
      type: "follow",
      user: { name: "James Dean", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      text: "started following you.",
      time: "3h ago",
      isUnread: false,
      isFollowing: false,
    },
    {
      id: "n4",
      type: "comment",
      user: { name: "Emma Watson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
      text: "commented on your post: \"Stunning perspective!\"",
      time: "1d ago",
      isUnread: false,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isUnread: false })));
  };

  const toggleFollow = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isFollowing: !n.isFollowing } : n
    ));
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === "unread") return n.isUnread;
    if (activeTab === "mentions") return n.type === "mention";
    return true; 
  });

  return (
    <div className="notif-page-wrapper">
      <div className="notif-container">
        
        {/* Header Row */}
        <header className="notif-header">
          <div>
            <h1>Notifications</h1>
            <p className="notif-sub">Manage your incoming activities and mentions</p>
          </div>
          {notifications.some(n => n.isUnread) && (
            <button className="mark-read-btn" onClick={markAllAsRead}>
              Mark all as read
            </button>
          )}
        </header>

        {/* Global Settings Control Utility */}
        <div className="notif-settings-card">
          <div className="settings-info">
            <span className="settings-title">Push Notifications</span>
            <span className="settings-desc">Receive real-time alerts on this machine</span>
          </div>
          <button 
            className={`toggle-switch-track ${pushEnabled ? "switch-on" : ""}`}
            onClick={() => setPushEnabled(!pushEnabled)}
            aria-label="Toggle push alerts"
          >
            <span className="toggle-switch-thumb" />
          </button>
        </div>

        {/* Navigation Tabs Control Strip */}
        <div className="notif-tabs-strip">
          {["all", "unread", "mentions"].map((tab) => (
            <button
              key={tab}
              className={`tab-item-trigger ${activeTab === tab ? "tab-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === "unread" && notifications.some(n => n.isUnread) && (
                <span className="badge-count">
                  {notifications.filter(n => n.isUnread).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Main Notifications Feed List */}
        <main className="notif-feed-list">
          {filteredNotifications.length === 0 ? (
            <div className="notif-empty-state">
              <div className="empty-icon-shield">🔔</div>
              <h3>All caught up!</h3>
              <p>No notifications found matching your filter selection.</p>
            </div>
          ) : (
            filteredNotifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`notif-item-card ${notif.isUnread ? "unread-highlight" : ""}`}
              >
                {/* Green Unread Pulse Dot */}
                {notif.isUnread && <span className="unread-pulse-dot" />}

                <img 
                  src={notif.user.avatar} 
                  alt={notif.user.name} 
                  className="notif-sender-avatar" 
                />

                <div className="notif-content-mid">
                  <p className="notif-bubble-text">
                    <span className="user-bold">{notif.user.name}</span> {notif.text}
                  </p>
                  <span className="notif-timestamp-label">{notif.time}</span>
                </div>

                {/* Right Context Actions */}
                <div className="notif-right-action">
                  {notif.type === "follow" && (
                    <button 
                      className={`action-follow-toggle ${notif.isFollowing ? "following-mode" : ""}`}
                      onClick={() => toggleFollow(notif.id)}
                    >
                      {notif.isFollowing ? "Following" : "Follow Back"}
                    </button>
                  )}
                  {notif.metaContent && (
                    <img 
                      src={notif.metaContent} 
                      alt="Linked attachment" 
                      className="notif-attached-media" 
                    />
                  )}
                </div>

              </div>
            ))
          )}
        </main>

      </div>
    </div>
  );
}