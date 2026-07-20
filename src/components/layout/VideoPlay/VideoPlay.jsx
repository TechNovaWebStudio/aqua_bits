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
    
    // Maintain a steady state list to prevent re-shuffling on standard renders
    const [videoData, setVideoData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedVideos, setLikedVideos] = useState({});
    const [isRotated, setIsRotated] = useState(false);
    const [globalMuted, setGlobalMuted] = useState(true);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState({});

    const containerRef = useRef(null);
    const videoRefs = useRef([]);
    const isScrollingRef = useRef(false);

    // 1. Safe Shuffling on Client Mount to match targeted route query index accurately
    useEffect(() => {
        let baseData = Array.isArray(SHORTS_DATA) ? [...SHORTS_DATA] : [];
        
        if (baseData.length > 0) {
            // Find the matching targeted short if it exists in the query parameters
            const targetedShort = baseData.find(v => String(v.id) === String(activeId));
            const remainingShorts = baseData.filter(v => String(v.id) !== String(activeId));
            
            // Fisher-Yates Shuffle implementation for remaining assets
            for (let i = remainingShorts.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [remainingShorts[i], remainingShorts[j]] = [remainingShorts[j], remainingShorts[i]];
            }
            
            // If we have an activeId target, force it to sit at index 0 for refresh integrity
            const finalOrderedData = targetedShort ? [targetedShort, ...remainingShorts] : remainingShorts;
            setVideoData(finalOrderedData);
            setCurrentIndex(0);
        }
    }, [activeId]);

    // Update reference element registration caps dynamically
    videoRefs.current = videoRefs.current.slice(0, videoData.length);

    // 2. Initial Positioning Scroll Snap Fix 
    useEffect(() => {
        if (containerRef.current && videoData.length > 0) {
            const targetCard = containerRef.current.children[currentIndex];
            if (targetCard) {
                containerRef.current.scrollTop = targetCard.offsetTop;
            }
        }
    }, [videoData]);

    // 3. High performance viewport scroll tracking with infinite update filters
    useEffect(() => {
        const container = containerRef.current;
        if (!container || videoData.length === 0) return;

        const observerOptions = {
            root: container,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observerCallback = (entries) => {
            // Drop tracking execution completely if programmatic navigation actions are running
            if (isScrollingRef.current) return;

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
    }, [videoData, currentIndex]);

    // 4. Update url slug to mirror index position changes
    useEffect(() => {
        if (videoData.length > 0 && videoData[currentIndex]) {
            const currentVideoId = videoData[currentIndex].id;
            if (activeId && String(currentVideoId) !== String(activeId)) {
                router.replace(`/shorts/${currentVideoId}`, { scroll: false });
            }
        }
    }, [currentIndex, activeId, videoData, router]);

    // 5. Clean media streams management
    useEffect(() => {
        if (videoRefs.current.length === 0) return;

        videoRefs.current.forEach((video, idx) => {
            if (video) {
                if (idx === currentIndex) {
                    video.muted = globalMuted;
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(err => {
                            console.log("Auto-playback structural context break checked:", err);
                        });
                    }
                } else {
                    video.pause();
                }
            }
        });
    }, [currentIndex, globalMuted, videoData]);

    const handleVideoLoaded = (index) => {
        setLoadedVideos(prev => ({ ...prev, [index]: true }));
    };

    const scrollToIndex = (index) => {
        if (containerRef.current && containerRef.current.children[index]) {
            isScrollingRef.current = true;
            setCurrentIndex(index);
            containerRef.current.children[index].scrollIntoView({ behavior: 'smooth' });
            
            // Open window locks safely after user swipe/click animation ticks clear out
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 600);
        }
    };

    const handleNextVideo = () => {
        if (currentIndex < videoData.length - 1) scrollToIndex(currentIndex + 1);
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

    const handleProfileClick = (videoItem) => {
        // Fallbacks back seamlessly to standard userId structures if custom properties don't exist
        const breederId = videoItem.breeder_id || videoItem.userId || videoItem.id;
        if (breederId) {
            router.push(`/profile/${breederId}`);
        }
    };

    const currentVideo = videoData[currentIndex] || {};

    return (
        <div className={styles.bodyWrapper}>
            <main className={styles.mainContainer}>
                <div className={styles.contentLayoutContainer}>
                    
                    <div className={styles.feedWrapper} ref={containerRef}>
                        {videoData.map((video, idx) => {
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
                                        <div 
                                            className={styles.userInfo} 
                                            onClick={() => handleProfileClick(video)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div className={styles.avatar}>
                                                <img className={styles.avatarImg} src={video.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"} alt="Avatar" />
                                            </div>
                                            <div className={styles.userTextMeta}>
                                                <span className={styles.username}>{video.username || 'Anonymous'}</span>
                                                <p className={styles.timestamp}>{video.userTitle || 'Creator'}</p>
                                            </div>
                                            <button className={styles.followBtn} onClick={(e) => e.stopPropagation()}>Follow</button>
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