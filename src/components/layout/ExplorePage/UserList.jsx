import React from 'react';
import { ExploreNavBar } from './ExploreNavBar';
import './UserList.css';
import { Users } from '../../../../public/data';



const getInitials = (name) => {
  if (!name) return '??';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

export function UserList({ activeTag, setActiveTag }) {
  const handleViewProfile = (userId) => {
    console.log(`Viewing profile for user ID: ${userId}`);
    // Add your profile navigation logic here
  };

  return (
    <div className="user-list-container">
      <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />
      
      <header className="user-list-header">
        <h1>Team Directory</h1>
        <p className="subtitle">Browse team members and view profiles</p>
      </header>
      
      <div className="users-grid">
        {Users.map((user) => (
          <div key={user.id} className="user-card">
            
            {/* Avatar Section */}
            <div className="card-avatar-wrapper">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="user-avatar" 
                  onError={(e) => { 
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className="user-initials-fallback" 
                style={{ display: user.avatar ? 'none' : 'flex' }}
              >
                {getInitials(user.name)}
              </div>
            </div>

            {/* Core Identity */}
            <div className="user-identity">
              <div className="name-group">
                <h3>{user.name}</h3>
                <span className="username-tag">@{user.username}</span>
              </div>
              <span className="user-role-badge">{user.role}</span>
            </div>

            {/* View Profile Action */}
            <button 
              className="view-profile-btn"
              onClick={() => handleViewProfile(user.id)}
            >
              View Profile
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}