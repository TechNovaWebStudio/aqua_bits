'use client';

import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './MyProfile.css';

export default function MyProfile() {
    const [activeTab, setActiveTab] = useState('posts');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const role = localStorage.getItem('role')


    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
        setIsContactOpen(false);
    };

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
        setIsSettingsOpen(false);
    };

    const renderGridItems = () => {
        switch (activeTab) {
            case 'shorts':
                return (
                    <>
                        <div className="grid-tile-item asset-shorts animate-fade-in">
                            <i className="fa-solid fa-play media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-eye"></i> 142K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 12.4K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 412</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=400" alt="Shorts 1" />
                        </div>
                        <div className="grid-tile-item asset-shorts animate-fade-in">
                            <i className="fa-solid fa-play media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-eye"></i> 142K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 12.4K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 412</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=400" alt="Shorts 2" />
                        </div>
                        <div className="grid-tile-item asset-shorts animate-fade-in">
                            <i className="fa-solid fa-play media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-eye"></i> 142K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 12.4K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 412</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=400" alt="Shorts 3" />
                        </div>
                        <div className="grid-tile-item asset-shorts animate-fade-in">
                            <i className="fa-solid fa-play media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-eye"></i> 98K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 8.9K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 195</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=400" alt="Shorts 4" />
                        </div>
                    </>
                );
            case 'saved':
                return (
                    <div className="grid-tile-item animate-fade-in">
                        <div className="grid-hover-overlay">
                            <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 11K</span>
                            <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 84</span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400" alt="Saved 1" />
                    </div>
                );
            case 'posts':
            default:
                return (
                    <>
                        <div className="grid-tile-item" onClick={() => alert('Opening post chosen...')}>
                            <i className="fa-solid fa-image media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 9.4K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 86</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=400" alt="Post 1" />
                        </div>
                        <div className="grid-tile-item" onClick={() => alert('Opening post chosen...')}>
                            <i className="fa-solid fa-image media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 9.4K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 86</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=400" alt="Post 2" />
                        </div>
                        <div className="grid-tile-item" onClick={() => alert('Opening post chosen...')}>
                            <i className="fa-solid fa-image media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 9.4K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 86</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=400" alt="Post 3" />
                        </div>
                        <div className="grid-tile-item" onClick={() => alert('Opening post chosen...')}>
                            <i className="fa-solid fa-image media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 9.4K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 86</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=400" alt="Post 4" />
                        </div>
                        <div className="grid-tile-item">
                            <i className="fa-solid fa-image media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 14.2K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 310</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1611245555447-e80ee5c66495?auto=format&fit=crop&q=80&w=400" alt="Post 5" />
                        </div>
                        <div className="grid-tile-item">
                            <i className="fa-solid fa-image media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 22.8K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 402</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400" alt="Post 6" />
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="breeder-profile-wrapper">
            <main className="main-content">
                {/* PROFILE BANNER ELEMENT */}
                <section className="profile-banner">
                    <img src="https://t4.ftcdn.net/jpg/02/60/01/79/360_F_260017906_I3iTlhPqmkjdw6c9gTJkLcjN1BDjqgYy.jpg" alt="Profile Banner" />
                    <div className="banner-overlay-tag">
                        <i className="fa-solid fa-pen-to-square"></i> Edit Banner
                    </div>
                </section>

                {/* PROFILE CARD */}
                <div className="profile-card-wrapper">
                    <header className="profile-header-container">
                        <div className="profile-avatar-left">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkuY6VixTcPld0X9pD8zdiO-bK1YTFtPcPtGZ4oIkK1pHk6WrGo1Ff9PU&s=10" alt="Profile Avatar" />
                        </div>

                        <div className="profile-details-right">
                            <div className='usename-section'>
                                <div>
                                    <h2>Aqua_World</h2>
                                    <p className='username'>em1_1999s</p>
                                </div>
                                <div className="settings-wrapper-anchor">
                                    <button className="btn-icon-only settings-trigger" onClick={toggleSettings}>
                                        <i className="fa-solid fa-gear"></i>
                                    </button>

                                    {/* COMPACT SETTINGS POPUP */}
                                    {isSettingsOpen && role == 'breeder' (
                                        <div className="compact-settings-popup animate-popup-scale">
                                            <button
                                                className="popup-option text-danger"
                                                onClick={() => {
                                                    localStorage.clear();
                                                    window.location.href = "/";
                                                }}
                                            >
                                                <i className="fa-solid fa-right-from-bracket"></i> Log Out
                                            </button>
                                            <button className="popup-option" onClick={() => { alert('Managing Accounts...'); setIsSettingsOpen(false); }}>
                                                <i className="fa-solid fa-users-gear"></i> Manage Accounts
                                            </button>
                                            <button className="popup-option" onClick={() => setIsSettingsOpen(false)}>
                                                <i className="fa-solid fa-user-shield"></i> Privacy Center
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="username-row">
                                {role == 'breeder' ?
                                    <>
                                        <button className="btn-action btn-follow-alt">Edit Profile</button>
                                        <button className="btn-action ">Dashbord</button>
                                    </>
                                    : <>
                                        <button className="btn-action btn-follow-alt">Follow</button>

                                        <div className="contact-wrapper-anchor">
                                            <button className="btn-action" onClick={toggleContact}>Contact</button>

                                            {/* COMPACT CONTACT POPUP */}
                                            {isContactOpen && (
                                                <div className="compact-settings-popup contact-popup animate-popup-scale">
                                                    <a href="tel:+1234567890" className="popup-option">
                                                        <i className="fa-solid fa-phone color-phone"></i> +1 (234) 567-890
                                                    </a>
                                                    <a href="mailto:em1_media@domain.com" className="popup-option">
                                                        <i className="fa-solid fa-envelope color-email"></i> Email Channel
                                                    </a>
                                                    <a href="https://www.instagram.com/404.scripts/" target="_blank" rel="noopener noreferrer" className="popup-option">
                                                        <i className="fa-brands fa-instagram color-instagram"></i> Instagram
                                                    </a>
                                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="popup-option">
                                                        <i className="fa-brands fa-facebook color-facebook"></i> Facebook
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                }
                            </div>

                            <section className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-value">500K</div>
                                    <div className="stat-label">Post</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value" id="followerCount">23.5M</div>
                                    <div className="stat-label">Followers</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">50</div>
                                    <div className="stat-label">Following</div>
                                </div>
                            </section>

                            {/* BIO BOX */}
                            <div className="bio-row-detailed">
                                <span className="bio-category">Breeder</span>
                                <div className="bio-six-lines">
                                    <p>EM1 VTEC dynamic performance track build.</p>
                                    <p>Tokyo Tech Hub Sector-3 / Global Shipping.</p>
                                    <p>DM directly or via mail at em1_media@domain.com</p>
                                    <div className="bio-tags-row">
                                        <span className="bio-inline-tag">#JDM</span>
                                        <span className="bio-inline-tag">#VTEC</span>
                                        <span className="bio-inline-tag">#TrackBuild</span>
                                        <span className="bio-inline-tag">#Classic</span>
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
                            <i className="fa-regular fa-bookmark"></i> <span>Saved</span>
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