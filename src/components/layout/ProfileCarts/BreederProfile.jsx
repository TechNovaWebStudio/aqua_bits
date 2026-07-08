'use client';

import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './BreederProfile.css'; // Importing the external stylesheet

export default function BreederProfile() {
    const [activeTab, setActiveTab] = useState('posts');

    const renderGridItems = () => {
        switch (activeTab) {
            case 'saved':
                return (
                    <div className="grid-tile-item animate-fade-in">
                        <div className="grid-hover-overlay">
                            <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 11K</span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400" alt="Saved 1" />
                    </div>
                );
            case 'tagged':
                return (
                    <div className="grid-tile-item animate-fade-in">
                        <div className="grid-hover-overlay">
                            <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 894</span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=400" alt="Tagged 1" />
                    </div>
                );
            case 'posts':
            default:
                return (
                    <>
                        <div className="grid-tile-item" onClick={() => alert('Opening chosen item sequence.')}>
                            <i className="fa-solid fa-film media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 9.4K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 86</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=400" alt="Post 1" />
                        </div>
                        <div className="grid-tile-item">
                            <i className="fa-solid fa-film media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 14.2K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 310</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1611245555447-e80ee5c66495?auto=format&fit=crop&q=80&w=400" alt="Post 2" />
                        </div>
                        <div className="grid-tile-item">
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 4,112</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 92</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=400" alt="Post 3" />
                        </div>
                        <div className="grid-tile-item">
                            <i className="fa-solid fa-film media-badge-icon"></i>
                            <div className="grid-hover-overlay">
                                <span className="hover-stat-metric"><i className="fa-solid fa-heart"></i> 22.8K</span>
                                <span className="hover-stat-metric"><i className="fa-solid fa-comment"></i> 402</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400" alt="Post 4" />
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="breeder-profile-wrapper">
            <main className="main-content">
                {/* BANNER COMPONENT */}
                <section className="profile-banner">
                    <img src="https://t4.ftcdn.net/jpg/02/60/01/79/360_F_260017906_I3iTlhPqmkjdw6c9gTJkLcjN1BDjqgYy.jpg" alt="Profile Banner" />
                    <div className="banner-overlay-tag">
                        <i className="fa-solid fa-pen-to-square"></i> Edit Banner
                    </div>
                </section>

                {/* MAIN PROFILE CARD */}
                <div className="profile-card-wrapper">
                    <header className="profile-header-container">
                        <div className="profile-avatar-left">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkuY6VixTcPld0X9pD8zdiO-bK1YTFtPcPtGZ4oIkK1pHk6WrGo1Ff9PU&s=10" alt="Profile Avatar" />
                        </div>

                        <div className="profile-details-right">
                            <div className="username-row">
                                <h2>em1_1999s</h2>
                                <button className="btn-action btn-follow-alt">Follow</button>
                                <button className="btn-action">Message</button>
                                <button className="btn-icon-only"><i className="fa-solid fa-user-gear"></i></button>
                            </div>

                            <div className="stats-row">
                                <span><strong>14</strong> posts</span>
                                <span><strong>154K</strong> followers</span>
                                <span><strong>482</strong> following</span>
                            </div>

                            <div className="bio-row">
                                <span className="bio-fullname">EM1 Coupe 🤍</span>
                                <span className="bio-category">Automotive, Aircraft & Boat</span>
                                <p>
                                    • E M 1 VTEC build tracker 🏎️💨<br />
                                    • Clean JDM lines & high revs.<br />
                                    • Business inquiries: dm or em1_media@domain.com
                                </p>
                            </div>
                        </div>
                    </header>
                </div>

                

                {/* INTERACTIVE NAVIGATION TAB FILTERS */}
                <div className="profile-tabs-nav">
                    <div className={`tab-item ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => setActiveTab('posts')}>
                        <i className="fa-solid fa-table-cells"></i> <span>Posts</span>
                    </div>
                    <div className={`tab-item ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => setActiveTab('saved')}>
                        <i className="fa-regular fa-bookmark"></i> <span>Saved</span>
                    </div>
                    <div className={`tab-item ${activeTab === 'tagged' ? 'active' : ''}`} onClick={() => setActiveTab('tagged')}>
                        <i className="fa-solid fa-user-tag"></i> <span>Tagged</span>
                    </div>
                </div>

                {/* DYNAMIC TILED MEDIA DISPLAY GRID */}
                <div className="media-grid-view">
                    {renderGridItems()}
                </div>
            </main>
        </div>
    );
}