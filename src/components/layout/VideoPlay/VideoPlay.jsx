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
    },
      {
        id: 4,
        src: "./dumo4.mp4",
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
    const [globalMuted, setGlobalMuted] = useState(true);

    const videoRef = useRef(null);
    const touchStartY = useRef(0);

    const currentVideo = VIDEO_DATA[currentIndex];
    const isLiked = !!likedVideos[currentVideo.id];

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

    const handleDragStart = (yPosition) => {
        touchStartY.current = yPosition;
    };

    const handleDragEnd = (yPosition) => {
        const deltaY = touchStartY.current - yPosition;
        const swipeThreshold = 50;

        if (deltaY > swipeThreshold) {
            handleNextVideo();
        } else if (deltaY < -swipeThreshold) {
            handlePrevVideo();
        }
    };

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
                    onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
                    onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientY)}
                    onMouseDown={(e) => handleDragStart(e.clientY)}
                    onMouseUp={(e) => handleDragEnd(e.clientY)}
                >
                    {/* The transform property smoothly shifts the card layout based on the index */}
                    <div 
                        className={styles.videoCard} 
                        style={{ transform: `translateY(${-currentIndex * 0}px)` }}
                    >

                        <div className={styles.topControls}>
                            <button className={styles.muteBtn} onClick={toggleMute}>
                                <i className={`fa-solid ${globalMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                            </button>
                        </div>

                        <video
                            className={`${styles.videoPlayer} ${isRotated ? styles.videoPlayerRotated : ''}`}
                            id="feedVideo"
                            loop
                            autoPlay
                            playsInline
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