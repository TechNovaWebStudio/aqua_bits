'use client';

import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './BreederProfile.css';

export default function BreederProfile({ breederData }) {
    const [activeTab, setActiveTab] = useState('posts');
    const [isContactOpen, setIsContactOpen] = useState(false);
    const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;
    console.log(breederData);

    // Destructure values with fallback values to ensure rendering safety
    const {
        name = "",
        userName = "",
        profileImage = "",
        coverImage = "",
        location = "",
        categories = [],
        experience = "",
        description = "",
        bio = "",
        counts = { followers: 0, following: 0, posts: 0 },
        posts = [],
        shorts = [], 
        saved = [],
        contact = {}
    } = breederData || {};

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
    };

    const renderGridItems = () => {
        switch (activeTab) {
            case 'shorts':
                if (shorts && shorts.length > 0) {
                    return shorts.map((short) => (
                        <div key={short.id} className="grid-tile-item asset-shorts animate-fade-in">
                            <i className="fa-solid fa-play media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-eye"></i> {short.views || 0}</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> {short.likes || 0}</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> {short.comments?.length || short.comments || 0}</span>
                            </div>
                            {/* Uses videoURL fallback if explicit preview image path does not exist */}
                            <img src={short.image || short.videoURL || "/images/default-video-placeholder.jpg"} alt={short.caption || "Shorts Video"} />
                        </div>
                    ));
                }
                return <p className="no-data-msg">No shorts available.</p>;

            case 'saved':
                if (saved && saved.length > 0) {
                    return saved.map((item) => (
                        <div key={item.id} className="grid-tile-item animate-fade-in">
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> {item.likes || 0}</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> {item.comments?.length || 0}</span>
                            </div>
                            <img src={item.image} alt={item.caption || "Saved Post"} />
                        </div>
                    ));
                }
                return <p className="no-data-msg">No saved items available.</p>;

            case 'posts':
            default:
                if (posts && posts.length > 0) {
                    return posts.map((post) => (
                        <div key={post.id} className="grid-tile-item" onClick={() => alert(`Opening: ${post.caption}`)}>
                            <i className="fa-solid fa-image media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-eye"></i> {post.views || 0}</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> {post.likes || 0}</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> {post.comments?.length || 0}</span>
                            </div>
                            <img src={post.image} alt={post.caption || "Post Image"} />
                        </div>
                    ));
                }
                return <p className="no-data-msg">No posts available.</p>;
        }
    };

    return (
        <div className="breeder-profile-wrapper">
            <main className="main-content">
                {/* PROFILE BANNER ELEMENT */}
                <section className="profile-banner">
                    <img src={coverImage || "/images/default-cover.jpg"} alt={`${name}'s Profile Banner`} />
                    {role === 'breeder' && (
                        <div className="banner-overlay-tag">
                            <i className="fa-solid fa-pen-to-square"></i> Edit Banner
                        </div>
                    )}
                </section>

                {/* PROFILE CARD */}
                <div className="profile-card-wrapper">
                    <header className="profile-header-container">
                        <div className="profile-avatar-left">
                            <img src={profileImage || "/images/default-avatar.jpg"} alt={`${name}'s Profile Avatar`} />
                        </div>

                        <div className="profile-details-right">
                            <div className='usename-section'>
                                <div>
                                    <h2>{name}</h2>
                                    <p className='username'>{userName}</p>
                                </div>
                            </div>

                            <div className="username-row">
                                <button className="btn-action btn-follow-alt">Follow</button>

                                <div className="contact-wrapper-anchor">
                                    <button className="btn-action" onClick={toggleContact}>Contact</button>

                                    {/* COMPACT CONTACT POPUP */}
                                    {isContactOpen && contact && (
                                        <div className="compact-settings-popup contact-popup animate-popup-scale">
                                            {contact.phone && (
                                                <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="popup-option">
                                                    <i className="fa-solid fa-phone color-phone"></i> {contact.phone}
                                                </a>
                                            )}
                                            
                                            {contact.email && (
                                                <a href={`mailto:${contact.email}`} className="popup-option">
                                                    <i className="fa-solid fa-envelope color-email"></i> Email Channel
                                                </a>
                                            )}
                                            
                                            {contact.instagram && (
                                                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="popup-option">
                                                    <i className="fa-brands fa-instagram color-instagram"></i> Instagram
                                                </a>
                                            )}
                                            
                                            {contact.facebook && (
                                                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="popup-option">
                                                    <i className="fa-brands fa-facebook color-facebook"></i> Facebook
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <section className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-value">{counts.posts}</div>
                                    <div className="stat-label">Posts</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value" id="followerCount">{counts.followers}</div>
                                    <div className="stat-label">Followers</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">{counts.following}</div>
                                    <div className="stat-label">Following</div>
                                </div>
                            </section>

                            {/* BIO BOX */}
                            <div className="bio-row-detailed">
                                {experience && <span className="bio-category">Experience: {experience}</span>}
                                <div className="bio-six-lines">
                                    <p>{description || bio}</p>
                                    <div className="bio-tags-row">
                                        {categories.map((categoryItem, index) => (
                                            <span key={index} className="bio-inline-tag">
                                                #{categoryItem.replace(/\s+/g, '')}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

                {/* POST FILTER SECTION */}
                <div className="profile-tabs-nav-container">
                    <div className="profile-tabs-nav">
                        <button className={`tab-item-btn ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => setActiveTab('posts')}>
                            <i className="fa-solid fa-table-cells"></i> <span>Posts</span>
                        </button>
                        <button className={`tab-item-btn ${activeTab === 'shorts' ? 'active' : ''}`} onClick={() => setActiveTab('shorts')}>
                            <i className="fa-solid fa-clapperboard"></i> <span>Shorts</span>
                        </button>
                        <button className={`tab-item-btn ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => setActiveTab('saved')}>
                            <i className="fa-solid fa-bookmark"></i> <span>Saved</span>
                        </button>
                    </div>
                </div>

                {/* DYNAMIC MEDIA DISPLAY GRID */}
                <div className="media-grid-view">
                    {renderGridItems()}
                </div>
            </main>
        </div>
    );
}