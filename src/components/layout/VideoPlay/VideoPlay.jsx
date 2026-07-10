'use client';

import React, { useState, useRef } from 'react';
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

    // Array of refs to manage each individual video element
    const videoRefs = useRef([]);
    const touchStartY = useRef(0);

    const handleNextVideo = () => {
        if (currentIndex < VIDEO_DATA.length - 1) {
            manageVideoPlayback(currentIndex + 1);
            setCurrentIndex(prev => prev + 1);
            setIsRotated(false);
        }
    };

    const handlePrevVideo = () => {
        if (currentIndex > 0) {
            manageVideoPlayback(currentIndex - 1);
            setCurrentIndex(prev => prev - 1);
            setIsRotated(false);
        }
    };

    // Pauses old video and plays the new target video cleanly
    const manageVideoPlayback = (nextIndex) => {
        if (videoRefs.current[currentIndex]) {
            videoRefs.current[currentIndex].pause();
        }
        setTimeout(() => {
            const nextVideo = videoRefs.current[nextIndex];
            if (nextVideo) {
                nextVideo.load();
                nextVideo.play().catch(err => console.log("Autoplay caught:", err));
            }
        }, 50);
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

    const toggleLike = (id) => {
        setLikedVideos(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        setGlobalMuted(!globalMuted);
    };

    const handleVideoClick = (index) => {
        const targetVid = videoRefs.current[index];
        if (targetVid) {
            if (targetVid.paused) {
                targetVid.play();
            } else {
                targetVid.pause();
            }
        }
    };

    return (
        <div className={styles.bodyWrapper}>
            <main className={styles.mainContainer}>

                {/* Outer frame holding everything */}
                <div
                    className={styles.feedWrapper}
                    onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
                    onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientY)}
                    onMouseDown={(e) => handleDragStart(e.clientY)}
                    onMouseUp={(e) => handleDragEnd(e.clientY)}
                >
                    {/* The Track Container moving dynamically by percentages */}
                    <div 
                        className={styles.videoTrack} 
                        style={{ transform: `translateY(${-currentIndex * 100}%)` }}
                    >
                        {VIDEO_DATA.map((video, idx) => {
                            const isLiked = !!likedVideos[video.id];
                            return (
                                <div key={video.id} className={styles.videoCard}>
                                    <div className={styles.topControls}>
                                        <button className={styles.muteBtn} onClick={toggleMute}>
                                            <i className={`fa-solid ${globalMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                                        </button>
                                    </div>

                                    <video
                                        className={`${styles.videoPlayer} ${isRotated ? styles.videoPlayerRotated : ''}`}
                                        loop
                                        autoPlay={idx === 0} // Only true autoplay on first mount
                                        playsInline
                                        muted={globalMuted}
                                        ref={el => videoRefs.current[idx] = el}
                                        onClick={() => handleVideoClick(idx)}
                                    >
                                        <source src={video.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    <div className={styles.videoOverlayInfo}>
                                        <div className={styles.userInfo}>
                                            <div className={styles.avatar}>
                                                <img className={styles.avatarImg} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Avatar" />
                                            </div>
                                            <div>
                                                <span className={styles.username}>{video.username}</span>
                                                <p className={styles.timestamp}>2 hours ago</p>
                                            </div>
                                            <button className={styles.followBtn}>Follow</button>
                                        </div>
                                        <div className={styles.discription}>
                                            <p>{video.description}</p>
                                        </div>
                                    </div>

                                    {/* Action items inside each card context */}
                                    <div className={styles.actionSidebar}>
                                        <div className={`${styles.actionItem} ${isLiked ? styles.actionItemLiked : ''}`} onClick={() => toggleLike(video.id)}>
                                            <div className={styles.actionBtnCircle}><i className="fa-solid fa-heart"></i></div>
                                            <span className={styles.actionCount}>{isLiked ? 'Liked' : video.likes}</span>
                                        </div>
                                        <div className={styles.actionItem}>
                                            <div className={styles.actionBtnCircle}><i className="fa-solid fa-comment-dots"></i></div>
                                            <span className={styles.actionCount}>{video.comments}</span>
                                        </div>
                                        <div className={styles.actionItem}>
                                            <div className={styles.actionBtnCircle}><i className="fa-solid fa-share"></i></div>
                                            <span className={styles.actionCount}>{video.shares}</span>
                                        </div>
                                        <div className={styles.actionItem}>
                                            <div className={styles.actionBtnCircle}><i className="fa-solid fa-bookmark"></i></div>
                                        </div>
                                        <div className={styles.actionItem}>
                                            <div className={styles.actionBtnCircle} style={{ background: 'none' }}><i className="fa-solid fa-ellipsis"></i></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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