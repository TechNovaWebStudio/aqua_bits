'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './VideoPlay.module.css';
import CommentPop from '@/components/common/CommentPop/CommentPop';
import Loader from '@/components/common/Loader/Loader'; 
import { SHORTS_DATA } from '../../../../public/data';
import { useRouter, useParams } from 'next/navigation'; // Added useParams for reliable routing

const formatCount = (num) => {
    if (!num) return '0';
    const cleanNum = typeof num === 'string' ? parseFloat(num.replace(/,/g, '')) : num;
    if (isNaN(cleanNum)) return num;
    if (cleanNum >= 1000000) return (cleanNum / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (cleanNum >= 1000) return (cleanNum / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return cleanNum.toString();
};

export default function VideoPlay({ id: propId }) {
    const router = useRouter();
    const params = useParams();
    
    // 1. Resolve active ID safely from either props or direct URL params (Next.js 15 safe)
    const activeId = propId || params?.id;

    const [VIDEO_DATA] = useState(Array.isArray(SHORTS_DATA) ? SHORTS_DATA : []);
    
    // 2. STAGE 1 FIX: Calculate the active index synchronously on initial state creation.
    // This stops the component from defaulting to 0 and loading the wrong video first.
    const getInitialIndex = () => {
        if (activeId && VIDEO_DATA.length > 0) {
            const targetIndex = VIDEO_DATA.findIndex(video => String(video.id) === String(activeId));
            if (targetIndex !== -1) return targetIndex;
        }
        return 0;
    };

    const [currentIndex, setCurrentIndex] = useState(getInitialIndex);
    const [likedVideos, setLikedVideos] = useState({});
    const [isRotated, setIsRotated] = useState(false);
    const [globalMuted, setGlobalMuted] = useState(true);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState({});

    const videoRefs = useRef([]);
    const touchStartY = useRef(0);

    // Sync state if activeId changes in the future (e.g. forward/back buttons)
    useEffect(() => {
        if (activeId && VIDEO_DATA.length > 0) {
            const targetIndex = VIDEO_DATA.findIndex(video => String(video.id) === String(activeId));
            if (targetIndex !== -1 && targetIndex !== currentIndex) {
                setCurrentIndex(targetIndex);
            }
        }
    }, [activeId, VIDEO_DATA]);

    // 3. Dynamic Router Sync: Update the browser URL seamlessly as the user swipes through videos
    useEffect(() => {
        if (VIDEO_DATA.length > 0 && VIDEO_DATA[currentIndex]) {
            const currentVideoId = VIDEO_DATA[currentIndex].id;
            if (activeId && String(currentVideoId) !== String(activeId)) {
                router.replace(`/shorts/${currentVideoId}`, { scroll: false });
            }
        }
    }, [currentIndex, activeId, VIDEO_DATA, router]);

    // 4. Unified Playback Loop: Replaces manual management & prevents duplicate playback triggers
    useEffect(() => {
        if (VIDEO_DATA.length === 0) return;

        videoRefs.current.forEach((video, idx) => {
            if (video) {
                if (idx === currentIndex) {
                    video.muted = globalMuted;
                    
                    // Reset loaders ONLY for the active video on swap
                    setLoadedVideos(prev => ({ ...prev, [idx]: false })); 
                    video.load();
                    
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(err => {
                            console.log("Playback interaction trigger required:", err);
                        });
                    }
                } else {
                    // Stop & reset all hidden videos safely
                    video.pause();
                }
            }
        });
    }, [currentIndex, VIDEO_DATA]);

    const handleVideoLoaded = (index) => {
        setLoadedVideos(prev => ({ ...prev, [index]: true }));
    };

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

    const handleDragStart = (yPosition) => { touchStartY.current = yPosition; };
    const handleDragEnd = (yPosition) => {
        const deltaY = touchStartY.current - yPosition;
        if (deltaY > 50) handleNextVideo();
        else if (deltaY < -50) handlePrevVideo();
    };

    const toggleLike = (id) => { setLikedVideos(prev => ({ ...prev, [id]: !prev[id] })); };
    
    const toggleMute = (e) => {
        e.stopPropagation();
        const nextMuted = !globalMuted;
        setGlobalMuted(nextMuted);
        
        // Instantly toggle audio on the playing video node without causing a full reload/reset
        const activeVideo = videoRefs.current[currentIndex];
        if (activeVideo) {
            activeVideo.muted = nextMuted;
        }
    };
    
    const handleVideoClick = (index) => {
        const targetVid = videoRefs.current[index];
        if (targetVid) targetVid.paused ? targetVid.play() : targetVid.pause();
    };
    
    const handleShowMore = (videoId) => { router.push(`/shorts/${videoId}`); };

    const currentVideo = VIDEO_DATA[currentIndex] || {};

    return (
        <div className={styles.bodyWrapper}>
            <main className={styles.mainContainer}>
                <div className={styles.contentLayoutContainer}>
                    <div className={styles.feedWrapper}
                        onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
                        onTouchEnd={(e) => handleDragEnd(e.touches[0].clientY)}
                        onMouseDown={(e) => handleDragStart(e.clientY)}
                        onMouseUp={(e) => handleDragEnd(e.clientY)}
                    >
                        <div className={styles.videoTrack} style={{ transform: `translateY(${-currentIndex * 100}%)` }}>
                            {VIDEO_DATA.map((video, idx) => {
                                const isLiked = !!likedVideos[video.id];
                                const isActive = idx === currentIndex;
                                return (
                                    <div key={video.id || idx} className={styles.videoCard}>
                                        
                                        {/* Render Loader Component */}
                                        {!loadedVideos[idx] && <Loader />}

                                        <div className={styles.topControls}>
                                            <button className={styles.muteBtn} onClick={toggleMute} suppressHydrationWarning>
                                                <i className={`fa-solid ${globalMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                                            </button>
                                        </div>

                                        <video
                                            className={`${styles.videoPlayer} ${isRotated ? styles.videoPlayerRotated : ''} ${!loadedVideos[idx] ? styles.hidden : ''}`}
                                            loop 
                                            playsInline 
                                            muted={globalMuted}
                                            autoPlay={isActive} // 5. Native Autoplay Trigger
                                            preload={isActive ? "auto" : "none"} // 6. Saves bandwidth by only preloading active index
                                            ref={el => videoRefs.current[idx] = el}
                                            onLoadedData={() => handleVideoLoaded(idx)}
                                            onClick={() => handleVideoClick(idx)}
                                        >
                                            <source src={video.videoUrl} type="video/mp4" />
                                        </video>

                                        <div className={styles.videoOverlayInfo}>
                                            <div className={styles.userInfo}>
                                                <div className={styles.avatar}>
                                                    <img className={styles.avatarImg} src={video.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"} alt="Avatar" />
                                                </div>
                                                <div>
                                                    <span className={styles.username}>{video.username || 'Anonymous'}</span>
                                                    <p className={styles.timestamp}>{video.userTitle || 'Creator'}</p>
                                                </div>
                                                <button className={styles.followBtn} suppressHydrationWarning>Follow</button>
                                            </div>
                                            <div className={styles.descriptionContainer}>
                                                <p className={styles.description}>
                                                    <span className={styles.textClip}>{video.description}</span>
                                                    <button className={styles.showMoreBtn} onClick={() => handleShowMore(video.id)} suppressHydrationWarning>... Show More</button>
                                                </p>
                                            </div>
                                        </div>

                                        <div className={styles.actionSidebar}>
                                            <div className={`${styles.actionItem} ${isLiked ? styles.actionItemLiked : ''}`} onClick={() => toggleLike(video.id)}>
                                                <div className={styles.actionBtnCircle}><i className="fa-solid fa-heart"></i></div>
                                                <span className={styles.actionCount}>{formatCount(isLiked ? (video.likes + 1) : video.likes)}</span>
                                            </div>
                                            <div className={`${styles.actionItem} ${isCommentsOpen ? styles.actionItemActive : ''}`} onClick={() => setIsCommentsOpen(!isCommentsOpen)}>
                                                <div className={styles.actionBtnCircle}><i className="fa-solid fa-comment-dots"></i></div>
                                                <span className={styles.actionCount}>{formatCount(video.commentsCount || (video.comments?.length || 0))}</span>
                                            </div>
                                            <div className={styles.actionItem}><div className={styles.actionBtnCircle}><i className="fa-solid fa-share"></i></div><span className={styles.actionCount}>{formatCount(video.shares)}</span></div>
                                            <div className={styles.actionItem}><div className={styles.actionBtnCircle}><i className="fa-solid fa-bookmark"></i></div></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <CommentPop COMMENTS={Array.isArray(currentVideo.comments) ? currentVideo.comments : []} isOpen={isCommentsOpen} onClose={() => setIsCommentsOpen(false)} />
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
                </div>
            </main>
        </div>
    );
}