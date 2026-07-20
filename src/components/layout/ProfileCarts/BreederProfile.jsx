'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Breeders } from "../../../../public/data";
import './BreederProfile.css';

export default function BreederProfile() {
    const params = useParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('posts');
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    
    // Modal states for social lookup
    const [socialModal, setSocialModal] = useState({ isOpen: false, type: '', data: [] });

    // Dynamic Route Lookup
    const targetId = params?.id ? parseInt(params.id, 10) : 1;
    const currentProfile = Breeders.find(b => b.id === targetId) || Breeders[0];

    // Destructure properties safely
    const {
        id: breederId = 1,
        name = "Muhammed Shibil",
        userName = "@technovastudio",
        profileImage = "",
        coverImage = "",
        location = "Malappuram, Kerala",
        bio = "Passionate ornamental fish breeder.",
        description = "",
        verified = true,
        followers = [],
        following = [], 
        contact = {},
        posts = [],
        shorts = []
    } = currentProfile || {};

    const toggleFollow = () => setIsFollowing(!isFollowing);

    // Dynamic compact pipeline numbering pipeline formatter
    const formatMetricNumber = (num) => {
        if (!num || isNaN(num)) return '0';
        if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
        if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
        return num.toString();
    };

    const getActiveData = () => {
        if (activeTab === 'reels') {
            return shorts.map(short => ({
                id: short.id,
                mediaUrl: short.videoURL, 
                likes: short.likes,
                comments: short.comments,
                type: 'video'
            }));
        }
        if (activeTab === 'saved') return [];

        return posts.map(post => ({
            id: post.id,
            mediaUrl: post.image,
            likes: post.likes,
            comments: post.comments?.length || 0,
            type: 'image'
        }));
    };

    const openSocialModal = (type, listData) => {
        setSocialModal({
            isOpen: true,
            type,
            data: listData || []
        });
    };

    const closeSocialModal = () => {
        setSocialModal({ isOpen: false, type: '', data: [] });
    };

    // Safe Video Autoplay handlers on hover (fixes AbortError exceptions)
    const handleMouseEnter = (e) => {
        const videoElement = e.currentTarget.querySelector('.grid-video-preview');
        if (videoElement) {
            videoElement.muted = true; 
            
            // Catch and suppress browser abort exceptions if user moves mouse away instantly
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                    if (err.name !== 'AbortError') {
                        console.log("Autoplay issue:", err);
                    }
                });
            }
        }
    };

    const handleMouseLeave = (e) => {
        const videoElement = e.currentTarget.querySelector('.grid-video-preview');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0; // Resets back to initial frame
        }
    };

    // Navigation Layer
    const handleMediaClick = (type, itemId) => {
        if (type === 'video') {
            router.push(`/shorts/${itemId}`);
        } else {
            router.push(`/post-feed/${itemId}`);
        }
    };

    return (
        <div className="instagram-premium-wrapper">
            {/* NON-WHITE BACKGROUND BANNER WITH ACTION LAYER */}
            <div className="profile-top-banner">
                <button className="banner-back-arrow" onClick={() => router.back()} aria-label="Go back">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                
                {coverImage ? (
                    <img src={coverImage} alt="Premium Banner Background" />
                ) : (
                    <div className="banner-solid-fallback"></div>
                )}
                <div className="banner-gradient-shield"></div>
            </div>

            <main className="profile-center-container">
                {/* METADATA OVERVIEW */}
                <header className="user-profile-header">
                    <div className="header-left-avatar-zone">
                        <div className="avatar-border-gradient">
                            <div className="avatar-white-inner">
                                <img src={profileImage || "/fallback-avatar.png"} alt={`${name}'s Profile`} />
                            </div>
                        </div>
                    </div>

                    <div className="header-right-info-zone">
                        <div className="info-username-row">
                            <div className="profile-names-container">
                                <h2 className="profile-handle">
                                    {name}
                                    {verified && (
                                        <i className="fa-solid fa-circle-check model-verified-badge" title="Verified Creator"></i>
                                    )}
                                </h2>
                                <span className='username'>{userName}</span>
                            </div>

                            <div className="profile-action-buttons">
                                <button
                                    className={`action-btn balance-width ${isFollowing ? 'following-state' : 'follow-state'}`}
                                    onClick={toggleFollow}
                                >
                                    {isFollowing ? 'Following ' : 'Follow'}
                                    {isFollowing && <i className="fa-solid fa-chevron-down minimal-arrow"></i>}
                                </button>

                                <div className="message-dropdown-container balance-width">
                                    <button className="action-btn message-state full-width-target" onClick={() => setIsContactOpen(!isContactOpen)}>
                                        Message
                                    </button>

                                    {isContactOpen && (
                                        <div className="minimal-contact-card animate-pop-in">
                                            <div className="card-inner-title">Direct Bookings</div>
                                            {contact.email && <a href={`mailto:${contact.email}`} className="contact-link"><i className="fa-regular fa-envelope"></i> Email Agency</a>}
                                            {contact.phone && <a href={`tel:${contact.phone}`} className="contact-link"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a>}
                                            {contact.instagram && <a href={contact.instagram} target="_blank" rel="noreferrer" className="contact-link"><i className="fa-brands fa-instagram"></i> Instagram DM</a>}
                                            {contact.facebook && <a href={contact.facebook} target="_blank" rel="noreferrer" className="contact-link"><i className="fa-brands fa-facebook"></i> Facebook</a>}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="info-metrics-row">
                            <div className="metric-box">
                                <span className="metric-number">{formatMetricNumber(posts.length)}</span>
                                <span className="metric-label">posts</span>
                            </div>
                            
                            <div className="metric-box status-clickable" onClick={() => openSocialModal('Followers', followers)}>
                                <span className="metric-number">{formatMetricNumber(followers.length)}</span>
                                <span className="metric-label">followers</span>
                            </div>
                            <div className="metric-box status-clickable" onClick={() => openSocialModal('Following', following)}>
                                <span className="metric-number">{formatMetricNumber(following.length)}</span>
                                <span className="metric-label">following</span>
                            </div>
                        </div>

                        <div className="info-bio-row">
                            <h1 className="profile-real-name">{name}</h1>
                            <div className="bio-structured-lines">
                                <p className="bio-bullet-line">{bio}</p>
                                {description && description.split('\n').map((line, index) => (
                                    <p key={index} className="bio-description-text">{line}</p>
                                ))}
                            </div>

                            {location && (
                                <div className="bio-location-badge">
                                    <i className="fa-solid fa-location-dot location-icon"></i>
                                    <span className="location-text">{location}</span>
                                </div>
                            )}

                            {followers.length > 0 && (
                                <div className="followed-by-context" onClick={() => openSocialModal('Followers', followers)}>
                                    <div className="avatar-overlapping-stack">
                                        {followers.slice(0, 3).map((follower) => (
                                            <img
                                                key={follower.id}
                                                src={follower.userAvatar}
                                                alt={follower.name}
                                                className="stacked-inline-avatar"
                                                title={follower.name}
                                            />
                                        ))}
                                    </div>
                                    <span className="social-context-text">
                                        Followed by <strong>{followers[0].userName}</strong>
                                        {followers.length > 1 && ` + ${followers.length - 1} others`}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* TAB SELECTION LAYER */}
                <div className="navigation-tabs-outer-wrapper">
                    <div className="navigation-tabs-flex-glass">
                        <div className={`liquid-slider-bead active-tab-${activeTab}`} />

                        <button className={`tab-button-glass ${activeTab === 'posts' ? 'glass-active' : ''}`} onClick={() => setActiveTab('posts')}>
                            <i className="fa-solid fa-table-cells"></i>
                            <span>Posts</span>
                        </button>
                        <button className={`tab-button-glass ${activeTab === 'reels' ? 'glass-active' : ''}`} onClick={() => setActiveTab('reels')}>
                            <i className="fa-solid fa-clapperboard"></i>
                            <span>Reels</span>
                        </button>
                        <button className={`tab-button-glass ${activeTab === 'saved' ? 'glass-active' : ''}`} onClick={() => setActiveTab('saved')}>
                            <i className="fa-solid fa-bookmark"></i>
                            <span>Saved</span>
                        </button>
                    </div>
                </div>

                {/* VISUAL LAYOUT PICTURE STREAM CONTAINER */}
                <div className="instagram-photo-matrix">
                    {getActiveData().length > 0 ? (
                        getActiveData().map((item) => (
                            <div 
                                className="matrix-tile-item" 
                                key={item.id}
                                onMouseEnter={item.type === 'video' ? handleMouseEnter : undefined}
                                onMouseLeave={item.type === 'video' ? handleMouseLeave : undefined}
                                onClick={() => handleMediaClick(item.type, item.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                {item.type === 'video' ? (
                                    <>
                                        <i className="fa-solid fa-clapperboard grid-media-indicator"></i>
                                        <video 
                                            src={item.mediaUrl} 
                                            muted 
                                            loop 
                                            playsInline
                                            preload="auto"
                                            className="grid-video-preview" 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-solid fa-clone grid-media-indicator"></i>  
                                        <img src={item.mediaUrl} alt="Grid Asset Gallery" />
                                    </>
                                )}

                                <div className="tile-hover-curtain">
                                    <div className="hover-metrics-values">
                                        <span><i className="fa-solid fa-heart"></i> {formatMetricNumber(item.likes)}</span>
                                        <span><i className="fa-solid fa-comment"></i> {formatMetricNumber(item.comments)}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-matrix-fallback">
                            <i className="fa-solid fa-camera-retro"></i>
                            <p>No content captured yet</p>
                        </div>
                    )}
                </div>
            </main>

            {/* INTERACTIVE MODAL COMPONENT */}
            {socialModal.isOpen && (
                <div className="social-modal-overlay" onClick={closeSocialModal}>
                    <div className="social-modal-container animate-modal-slide" onClick={(e) => e.stopPropagation()}>
                        <header className="social-modal-header">
                            <h3>{socialModal.type}</h3>
                            <button className="modal-close-btn" onClick={closeSocialModal} aria-label="Close interface">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </header>
                        
                        <div className="social-modal-content">
                            {socialModal.data.length > 0 ? (
                                socialModal.data.map((user) => (
                                    <div className="social-user-card" key={user.id || user.userName}>
                                        <img src={user.userAvatar || user.profileImage || "/fallback-avatar.png"} alt={user.name} className="user-card-avatar" />
                                        <div className="user-card-details">
                                            <span className="user-card-name">{user.name}</span>
                                            <span className="user-card-username">{user.userName || `@${user.name.toLowerCase().replace(/\s+/g, '')}`}</span>
                                        </div>
                                        <button className="user-card-action-btn">View</button>
                                    </div>
                                ))
                            ) : (
                                <div className="modal-empty-state">
                                    <i className="fa-regular fa-user"></i>
                                    <p>No accounts listed yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}