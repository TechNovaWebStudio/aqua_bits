import "./SidebarRight.css";

export default function SidebarRight() {
  const suggestions = [
    { name: "Hannah Alper", username: "hannah_alp", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { name: "Marcus Aurel", username: "marcus_aur", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { name: "Natasha Romanov", username: "nat_inline", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
  ];

  return (
    <aside className="sidebar-right">
      <div>
        <h3 className="widget-section-header">Suggested for you</h3>
        <div className="suggestions-card-stack">
          {suggestions.map((user) => (
            <div key={user.username} className="suggestion-row-item">
              <div className="suggestion-user-profile">
                <img src={user.img} alt={user.name} />
                <div className="meta-profile-details">
                  <h5>{user.name}</h5>
                  <p>@{user.username}</p>
                </div>
              </div>
              <button className="action-follow-button">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}