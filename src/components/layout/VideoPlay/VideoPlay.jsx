'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './VideoPlay.module.css';
import CommentPop from '@/components/common/CommentPop/CommentPop';
import Loader from '@/components/common/Loader/Loader'; 
import { SHORTS_DATA } from '../../../../public/data';
import { useRouter, useParams } from 'next/navigation';

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
    
    const activeId = propId || params?.id;
    const [VIDEO_DATA] = useState(() => (Array.isArray(SHORTS_DATA) ? SHORTS_DATA : []));
    
    // Default hydration state safely sets to 0 on Server side
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedVideos, setLikedVideos] = useState({});
    const [isRotated, setIsRotated] = useState(false);
    const [globalMuted, setGlobalMuted] = useState(true);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState({});

    const containerRef = useRef(null);
    const videoRefs = useRef([]);

    // Reset reference registry lengths accurately
    videoRefs.current = videoRefs.current.slice(0, VIDEO_DATA.length);

    // Dynamic state synchronizer safely waiting for browser paint hydration
    useEffect(() => {
        if (activeId && VIDEO_DATA.length > 0) {
            const targetIndex = VIDEO_DATA.findIndex(video => String(video.id) === String(activeId));
            if (targetIndex !== -1) {
                setCurrentIndex(targetIndex);
            }
        }
    }, [activeId, VIDEO_DATA]);

    // 1. Precise Initial Scroll Positioning Fix
    useEffect(() => {
        if (containerRef.current && VIDEO_DATA.length > 0) {
            const targetCard = containerRef.current.children[currentIndex];
            if (targetCard) {
                containerRef.current.scrollTop = targetCard.offsetTop;
            }
        }
    }, [VIDEO_DATA, currentIndex]);

    // 2. High performance viewport scroll indexing tracking
    useEffect(() => {
        const container = containerRef.current;
        if (!container || VIDEO_DATA.length === 0) return;

        const observerOptions = {
            root: container,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'), 10);
                    if (!isNaN(index) && index !== currentIndex) {
                        setCurrentIndex(index);
                        setIsRotated(false);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        Array.from(container.children).forEach((child) => observer.observe(child));

        return () => observer.disconnect();
    }, [VIDEO_DATA, currentIndex]);

    // 3. Prevent URL mutation race conditions during dynamic indexing transitions
    useEffect(() => {
        if (VIDEO_DATA.length > 0 && VIDEO_DATA[currentIndex]) {
            const currentVideoId = VIDEO_DATA[currentIndex].id;
            if (activeId && String(currentVideoId) !== String(activeId)) {
                router.replace(`/shorts/${currentVideoId}`, { scroll: false });
            }
        }
    }, [currentIndex, activeId, VIDEO_DATA, router]);

    // 4. Clean playback action handling for active elements
    useEffect(() => {
        if (videoRefs.current.length === 0) return;

        videoRefs.current.forEach((video, idx) => {
            if (video) {
                if (idx === currentIndex) {
                    video.muted = globalMuted;
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(err => {
                            console.log("Auto-playback system flag caught context switch:", err);
                        });
                    }
                } else {
                    video.pause();
                }
            }
        });
    }, [currentIndex, globalMuted]);

    const handleVideoLoaded = (index) => {
        setLoadedVideos(prev => ({ ...prev, [index]: true }));
    };

    const scrollToIndex = (index) => {
        if (containerRef.current && containerRef.current.children[index]) {
            containerRef.current.children[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNextVideo = () => {
        if (currentIndex < VIDEO_DATA.length - 1) scrollToIndex(currentIndex + 1);
    };

    const handlePrevVideo = () => {
        if (currentIndex > 0) scrollToIndex(currentIndex - 1);
    };

    const toggleLike = (id) => { 
        setLikedVideos(prev => ({ ...prev, [id]: !prev[id] })); 
    };
    
    const toggleMute = (e) => {
        e.stopPropagation();
        const nextMuted = !globalMuted;
        setGlobalMuted(nextMuted);
        
        const activeVideo = videoRefs.current[currentIndex];
        if (activeVideo) activeVideo.muted = nextMuted;
    };
    
    const handleVideoClick = (index) => {
        const targetVid = videoRefs.current[index];
        if (targetVid) targetVid.paused ? targetVid.play() : targetVid.pause();
    };
    
    const handleBackClick = (e) => {
        e.stopPropagation();
        router.back();
    };

    const handleShowMore = (videoId) => { 
        router.push(`/shorts/${videoId}`); 
    };

    const currentVideo = VIDEO_DATA[currentIndex] || {};

    return (
        <div className={styles.bodyWrapper}>
            <main className={styles.mainContainer}>
                <div className={styles.contentLayoutContainer}>
                    
                    <div className={styles.feedWrapper} ref={containerRef}>
                        {VIDEO_DATA.map((video, idx) => {
                            const isLiked = !!likedVideos[video.id];
                            const isActive = idx === currentIndex;
                            return (
                                <div 
                                    key={video.id || idx} 
                                    className={styles.videoCard}
                                    data-index={idx}
                                >
                                    {!loadedVideos[idx] && <Loader />}

                                    <div className={styles.topControls}>
                                        <button className={styles.backBtn} onClick={handleBackClick} aria-label="Go back">
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </button>
                                        <button className={styles.muteBtn} onClick={toggleMute} aria-label="Toggle volume">
                                            <i className={`fa-solid ${globalMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                                        </button>
                                    </div>

                                    <video
                                        className={`${styles.videoPlayer} ${isRotated ? styles.videoPlayerRotated : ''} ${!loadedVideos[idx] ? styles.hidden : ''}`}
                                        loop 
                                        playsInline 
                                        muted={globalMuted}
                                        autoPlay={isActive} 
                                        preload={isActive ? "auto" : "none"} 
                                        ref={el => { if (el) videoRefs.current[idx] = el; }}
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
                                            <div className={styles.userTextMeta}>
                                                <span className={styles.username}>{video.username || 'Anonymous'}</span>
                                                <p className={styles.timestamp}>{video.userTitle || 'Creator'}</p>
                                            </div>
                                            <button className={styles.followBtn}>Follow</button>
                                        </div>
                                        <div className={styles.descriptionContainer}>
                                            <p className={styles.description}>
                                                <span className={styles.textClip}>{video.description}</span>
                                                <button className={styles.showMoreBtn} onClick={() => handleShowMore(video.id)}>... More</button>
                                            </p>
                                        </div>
                                    </div>

                                    <div className={styles.actionSidebar}>
                                        <div className={`${styles.actionItem} ${isLiked ? styles.actionItemLiked : ''}`} onClick={() => toggleLike(video.id)}>
                                            <div className={styles.actionBtnCircle}><i className="fa-solid fa-heart"></i></div>
                                            <span className={styles.actionCount}>{formatCount(isLiked ? (Number(video.likes) + 1) : video.likes)}</span>
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