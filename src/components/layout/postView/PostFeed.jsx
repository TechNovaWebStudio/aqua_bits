'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './PostFeed.module.css';
import CommentPop from '@/components/common/CommentPop/CommentPop';
import { POSTS_DATA } from '../../../../public/data';

export default function PostFeed({ targetId, onBack }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedPosts, setLikedPosts] = useState({});
    const [bookmarkedPosts, setBookmarkedPosts] = useState({});
    const [activeImageIndexes, setActiveImageIndexes] = useState({});
    const [customComments, setCustomComments] = useState({});
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    
    const trackRef = useRef(null);

    const [feedPosts, setFeedPosts] = useState(() => {
        if (!targetId) return POSTS_DATA;
        const matchedPost = POSTS_DATA.find(post => String(post.id) === String(targetId));
        if (matchedPost) {
            const remainingPosts = POSTS_DATA.filter(post => String(post.id) !== String(targetId));
            return [matchedPost, ...remainingPosts];
        }
        return POSTS_DATA;
    });

    const [isCommentPopOpen, setIsCommentPopOpen] = useState(false);
    const [isLaptopSize, setIsLaptopSize] = useState(false);

    const activePost = feedPosts[currentIndex];

    useEffect(() => {
        setIsDescExpanded(false);
    }, [currentIndex]);

    const handleTrackScroll = (e) => {
        const { scrollTop, clientHeight } = e.currentTarget;
        const nextIndex = Math.round(scrollTop / clientHeight);
        if (nextIndex !== currentIndex && nextIndex >= 0 && nextIndex < feedPosts.length) {
            setCurrentIndex(nextIndex);
            setIsCommentPopOpen(false);
        }
    };

    const scrollToPostIndex = (index) => {
        if (trackRef.current) {
            const containerHeight = trackRef.current.clientHeight;
            trackRef.current.scrollTo({
                top: index * containerHeight,
                behavior: 'smooth'
            });
        }
    };

    const handleNextPost = () => {
        if (currentIndex < feedPosts.length - 1) {
            scrollToPostIndex(currentIndex + 1);
        }
    };

    const handlePrevPost = () => {
        if (currentIndex > 0) {
            scrollToPostIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLaptopSize(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleLike = (id) => {
        setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleBookmark = (id) => {
        setBookmarkedPosts(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleImageHorizontalScroll = (postId, e) => {
        const { scrollLeft, clientWidth } = e.currentTarget;
        const index = Math.round(scrollLeft / clientWidth);
        setActiveImageIndexes(prev => ({ ...prev, [postId]: index }));
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const postId = activePost.id;
        const text = customComments[postId] || '';
        if (!text.trim()) return;

        setFeedPosts(prevPosts =>
            prevPosts.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        commentsCount: post.commentsCount + 1,
                        comments: [
                            ...post.comments,
                            { id: Date.now(), user: "you_active", text: text.trim() }
                        ]
                    };
                }
                return post;
            })
        );
        setCustomComments(prev => ({ ...prev, [postId]: '' }));
    };

    const formatCount = (count, activeState) => {
        const parsed = parseFloat(count);
        const adjusted = activeState ? parsed + 1 : parsed;
        if (adjusted >= 1000) return (adjusted / 1000).toFixed(1) + 'K';
        return adjusted;
    };

    return (
        <div className={styles.bodyWrapper}>
            <main className={styles.mainContainer}>
                <div className={styles.contentLayoutContainer}>
                    
                    <div className={styles.feedWrapper}>
                        <div
                            ref={trackRef}
                            className={styles.postTrack}
                            onScroll={handleTrackScroll}
                        >
                            {feedPosts.map((post) => {
                                const isLiked = !!likedPosts[post.id];
                                const isBookmarked = !!bookmarkedPosts[post.id];
                                const currentImgIdx = activeImageIndexes[post.id] || 0;

                                return (
                                    <div key={post.id} className={styles.postCard}>
                                        <div className={styles.galleryViewport}>
                                            
                                            {/* Header Navigation Bar */}
                                            <div className={styles.topNavigationHeader}>
                                                <button className={styles.navHeaderBtn} onClick={onBack}>
                                                    <i className="fa-solid fa-chevron-left"></i>
                                                </button>
                                                
                                                {/* Premium Floating Media Count Pill Layout */}
                                                {post.images.length > 1 && (
                                                    <div className={styles.premiumCountBadge}>
                                                        <span>{currentImgIdx + 1} / {post.images.length}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Horizontal Slide Scroll track */}
                                            <div
                                                className={styles.imageScrollTrack}
                                                onScroll={(e) => handleImageHorizontalScroll(post.id, e)}
                                            >
                                                {post.images.map((imgUrl, imgIdx) => (
                                                    <div key={imgIdx} className={styles.imageSlide}>
                                                        <img
                                                            src={imgUrl}
                                                            alt={`Frame ${imgIdx + 1}`}
                                                            className={styles.galleryImage}
                                                            draggable="false"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className={styles.bottomShadowScrim} />

                                            {/* Dot Trackers Layer: Explicitly structured inside bottom zone */}
                                            {post.images.length > 1 && (
                                                <div className={styles.dotsIndicatorContainer}>
                                                    {post.images.map((_, imgIdx) => (
                                                        <span
                                                            key={imgIdx}
                                                            className={`${styles.indicatorDot} ${currentImgIdx === imgIdx ? styles.dotIsActive : ''}`}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Text Metadata Panel */}
                                            <div className={styles.imageOverlayMetadata}>
                                                <div className={styles.profileRow}>
                                                    <div className={styles.profileMeta}>
                                                        <div className={styles.avatarWrapper}>
                                                            <img src={post.avatar} className={styles.avatarImg} alt={post.username} />
                                                            <span className={styles.onlineBadge}></span>
                                                        </div>
                                                        <div className={styles.avatarInfo}>
                                                            <h4 className={styles.username}>@{post.username}</h4>
                                                            <span className={styles.userTitle}>{post.userTitle}</span>
                                                        </div>
                                                    </div>
                                                    <button className={styles.followBtn}>Follow</button>
                                                </div>

                                                <div className={styles.descriptionBox}>
                                                    <p className={`${styles.clampedDescription} ${isDescExpanded ? styles.expanded : ''}`}>
                                                        {post.description}
                                                    </p>
                                                    {post.description && post.description.length > 45 && !isDescExpanded && (
                                                        <button 
                                                            className={styles.moreToggleBtn} 
                                                            onClick={() => setIsDescExpanded(true)}
                                                        >
                                                            more
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Side Utility Buttons */}
                                            <div className={styles.floatingActions}>
                                                <button
                                                    className={`${styles.actionItem} ${isLiked ? styles.liked : ''}`}
                                                    onClick={() => toggleLike(post.id)}
                                                >
                                                    <div className={styles.actionCircle}>
                                                        <i className="fa-solid fa-heart"></i>
                                                    </div>
                                                    <span>{formatCount(post.likes, isLiked)}</span>
                                                </button>

                                                <button
                                                    className={`${styles.actionItem}`}
                                                    onClick={() => !isLaptopSize && setIsCommentPopOpen(true)}
                                                >
                                                    <div className={styles.actionCircle}>
                                                        <i className="fa-solid fa-comment-dots"></i>
                                                    </div>
                                                    <span>{post.commentsCount}</span>
                                                </button>

                                                <button className={styles.actionItem}>
                                                    <div className={styles.actionCircle}>
                                                        <i className="fa-solid fa-share-nodes"></i>
                                                    </div>
                                                    <span>{post.shares}</span>
                                                </button>

                                                <button
                                                    className={`${styles.actionItem} ${isBookmarked ? styles.bookmarked : ''}`}
                                                    onClick={() => toggleBookmark(post.id)}
                                                >
                                                    <div className={styles.actionCircle}>
                                                        <i className="fa-solid fa-bookmark"></i>
                                                    </div>
                                                    <span>{post.shares}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Desktop Right Side Comments */}
                    {isLaptopSize && activePost && (
                        <CommentPop
                            COMMENTS={activePost.comments}
                            isOpen={true}
                            onClose={() => { }}
                            post={activePost}
                            commentText={customComments[activePost.id] || ''}
                            onCommentChange={(value) => setCustomComments(prev => ({ ...prev, [activePost.id]: value }))}
                            onCommentSubmit={handleCommentSubmit}
                        />
                    )}
                </div>

                {/* Vertical Scroll Handlers */}
                <div className={styles.feedScrollControls}>
                    <button className={styles.controlArrow} onClick={handlePrevPost} disabled={currentIndex === 0}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                    <div className={styles.pagerNode}>
                        <span className={styles.currPage}>{currentIndex + 1}</span>
                        <span className={styles.pageDivider}>/</span>
                        <span className={styles.totalPage}>{feedPosts.length}</span>
                    </div>
                    <button className={styles.controlArrow} onClick={handleNextPost} disabled={currentIndex === feedPosts.length - 1}>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
            </main>

            {/* Mobile Comment Sheets Component */}
            {!isLaptopSize && activePost && (
                <CommentPop
                    COMMENTS={activePost.comments}
                    isOpen={isCommentPopOpen}
                    onClose={() => setIsCommentPopOpen(false)}
                    post={activePost}
                    commentText={customComments[activePost.id] || ''}
                    onCommentChange={(value) => setCustomComments(prev => ({ ...prev, [activePost.id]: value }))}
                    onCommentSubmit={handleCommentSubmit}
                />
            )}
        </div>
    );
}