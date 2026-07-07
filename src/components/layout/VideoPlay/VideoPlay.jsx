'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './VideoPlay.module.css';

const VIDEO_DATA = [
    {
        id: 1,
        src: "./dumo.mp4",
        username: "em1_1999s",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, omnis ea.",
        likes: "8.4K",
        comments: 85,
        shares: "2,725"
    },
    {
        id: 2,
        src: "./dumo2.mp4",
        username: "alex_travels",
        description: "Exploring the beautiful mountains today! #nature #adventure",
        likes: "12.1K",
        comments: 340,
        shares: "1,102"
    },
    {
        id: 3,
        src: "./dumo3.mp4",
        username: "coder_life",
        description: "When the code finally works on the first try. 😂 #programming",
        likes: "5.2K",
        comments: 42,
        shares: "520"
    }
];

export default function VideoPlay() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedVideos, setLikedVideos] = useState({});
    const [isRotated, setIsRotated] = useState(false);

    // 1. Global mute state (browsers block unmuted autoplay by default, so we start true)
    const [globalMuted, setGlobalMuted] = useState(true);

    const videoRef = useRef(null);
    const touchStartY = useRef(0); // Tracks where a drag/swipe starts

    const currentVideo = VIDEO_DATA[currentIndex];
    const isLiked = !!likedVideos[currentVideo.id];

    // Navigation functions
    const handleNextVideo = () => {
        if (currentIndex < VIDEO_DATA.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsRotated(false);
        }
    };

    const handlePrevVideo = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsRotated(false);
        }
    };

    // 2. Swipe/Drag Gesture Handling
    const handleDragStart = (yPosition) => {
        touchStartY.current = yPosition;
    };

    const handleDragEnd = (yPosition) => {
        const deltaY = touchStartY.current - yPosition;
        const swipeThreshold = 50; // Minimum pixels dragged to trigger a flip

        if (deltaY > swipeThreshold) {
            handleNextVideo(); // Swiped UP -> Go to next
        } else if (deltaY < -swipeThreshold) {
            handlePrevVideo(); // Swiped DOWN -> Go to previous
        }
    };

    // Synchronize media element when index changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(err => {
                console.log("Autoplay check:", err);
            });
        }
    }, [currentIndex]);

    const toggleLike = () => {
        setLikedVideos(prev => ({ ...prev, [currentVideo.id]: !prev[currentVideo.id] }));
    };

    const toggleRotation = (e) => {
        e.stopPropagation();
        setIsRotated(!isRotated);
    };

    // Toggle mute state across the entire feed session
    const toggleMute = (e) => {
        e.stopPropagation();
        setGlobalMuted(!globalMuted);
    };

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <div className={styles.bodyWrapper}>
            <main className={styles.mainContainer}>

                <div
                    className={styles.feedWrapper}
                    // 3. Attach touch events for phone screens & mouse events for desktop testing
                    onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
                    onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientY)}
                    onMouseDown={(e) => handleDragStart(e.clientY)}
                    onMouseUp={(e) => handleDragEnd(e.clientY)}
                >
                    <div className={styles.videoCard}>

                        {/* Control panel header inside video card */}
                        <div className={styles.topControls}>
                            {/* <button className={styles.rotateToolBtn} onClick={toggleRotation}>
                                <i className="fa-solid fa-rotate"></i> Rotate
                            </button> */}

                            {/* 4. Mute / Unmute Button */}
                            <button className={styles.muteBtn} onClick={toggleMute}>
                                <i className={`fa-solid ${globalMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                                {/* {globalMuted ? ' Muted' : ' Audio On'} */}
                            </button>
                        </div>

                        <video
                            className={`${styles.videoPlayer} ${isRotated ? styles.videoPlayerRotated : ''}`}
                            id="feedVideo"
                            loop
                            autoPlay
                            playsInline
                            // 5. Bound to react state control
                            muted={globalMuted}
                            ref={videoRef}
                            onClick={handleVideoClick}
                        >
                            <source src={currentVideo.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className={styles.videoOverlayInfo}>
                            <div className={styles.userInfo}>
                                <div className={styles.avatar}>
                                    <img className={styles.avatarImg} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Avatar" />
                                </div>
                                <div>
                                    <span className={styles.username}>{currentVideo.username}</span>
                                    <p className={styles.timestamp}>2hours ago</p>
                                </div>
                                {/* <span style={{ color: '#b3b3b3', fontSize: '12px' }}>•</span> */}
                                <button className={styles.followBtn}>Follow</button>
                            </div>
                            <div className={styles.discription}>
                                <p>{currentVideo.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actionSidebar}>
                        <div className={`${styles.actionItem} ${isLiked ? styles.actionItemLiked : ''}`} onClick={toggleLike}>
                            <div className={styles.actionBtnCircle}><i className="fa-solid fa-heart"></i></div>
                            <span className={styles.actionCount}>{isLiked ? 'Liked' : currentVideo.likes}</span>
                        </div>
                        <div className={styles.actionItem}>
                            <div className={styles.actionBtnCircle}><i className="fa-solid fa-comment-dots"></i></div>
                            <span className={styles.actionCount}>{currentVideo.comments}</span>
                        </div>
                        <div className={styles.actionItem}>
                            <div className={styles.actionBtnCircle}><i className="fa-solid fa-share"></i></div>
                            <span className={styles.actionCount}>{currentVideo.shares}</span>
                        </div>
                        <div className={styles.actionItem}>
                            <div className={styles.actionBtnCircle}><i className="fa-solid fa-bookmark"></i></div>
                        </div>
                        <div className={styles.actionItem}>
                            <div className={styles.actionBtnCircle} style={{ background: 'none' }}><i className="fa-solid fa-ellipsis"></i></div>
                        </div>
                        <div className={styles.actionItem}>
                            <div className={styles.audioDiscThumb}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.feedNavArrows}>
                    <div className={styles.arrowBtn} onClick={handlePrevVideo}><i className="fa-solid fa-chevron-up"></i></div>
                    <div className={styles.arrowBtn} onClick={handleNextVideo}><i className="fa-solid fa-chevron-down"></i></div>
                </div>

                <div className={styles.floatingChatPill}>
                    <div className={styles.chatPillLeft}>
                        <i className="fa-solid fa-location-arrow" style={{ transform: 'rotate(45deg)' }}></i>
                        <span>Messages</span>
                        <span className={styles.msgBadge}>4</span>
                    </div>
                    <div className={styles.chatUsersStacked}>
                        <div className={styles.stackedAvatar} style={{ backgroundColor: '#a18cd1' }}></div>
                        <div className={styles.stackedAvatar} style={{ backgroundColor: '#fbc2eb' }}></div>
                        <div className={styles.stackedAvatar} style={{ backgroundColor: '#fad0c4' }}></div>
                    </div>
                </div>

            </main>
        </div>
    );
}