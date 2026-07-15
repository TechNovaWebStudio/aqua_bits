'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './PostFeed.module.css';
import CommentPop from '@/components/common/CommentPop/CommentPop';
import { POSTS_DATA } from '../../../../public/data';

export default function PostFeed() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedPosts, setLikedPosts] = useState({});
    const [bookmarkedPosts, setBookmarkedPosts] = useState({});
    const [activeImageIndexes, setActiveImageIndexes] = useState({});
    const [customComments, setCustomComments] = useState({});
    const [feedPosts, setFeedPosts] = useState(POSTS_DATA);

    // UI state toggles - initialized to false so mobile starts closed
    const [isCommentPopOpen, setIsCommentPopOpen] = useState(false);
    const [isLaptopSize, setIsLaptopSize] = useState(false);

    const touchStartY = useRef(0);
    const activePost = feedPosts[currentIndex];

    // Read screen width size client-side
    useEffect(() => {
        const handleResize = () => {
            setIsLaptopSize(window.innerWidth >= 1024);
        };
        handleResize(); // Init on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNextPost = () => {
        if (currentIndex < feedPosts.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsCommentPopOpen(false);
        }
    };

    const handlePrevPost = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsCommentPopOpen(false);
        }
    };

    const handleDragStart = (yPosition) => {
        touchStartY.current = yPosition;
    };

    const handleDragEnd = (yPosition) => {
        const deltaY = touchStartY.current - yPosition;
        const swipeThreshold = 50;

        if (deltaY > swipeThreshold) {
            handleNextPost();
        } else if (deltaY < -swipeThreshold) {
            handlePrevPost();
        }
    };

    const toggleLike = (id) => {
        setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleBookmark = (id) => {
        setBookmarkedPosts(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleImageScroll = (postId, e) => {
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
        if (adjusted >= 1000) {
            return (adjusted / 1000).toFixed(1) + 'K';
        }
        return adjusted;
    };

    const handleCommentBtnClick = () => {
        // Only open the popup manually on mobile sizes
        if (!isLaptopSize) {
            setIsCommentPopOpen(true);
        }
    };

    return (
        <div className={styles.bodyWrapper}>
            <main className={styles.mainContainer}>

                <div className={styles.contentLayoutContainer}>

                    {/* Visual Media Card Panel */}
                    <div
                        className={styles.feedWrapper}
                        onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
                        onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientY)}
                        onMouseDown={(e) => handleDragStart(e.clientY)}
                        onMouseUp={(e) => handleDragEnd(e.clientY)}
                    >
                        <div
                            className={styles.postTrack}
                            style={{ transform: `translateY(${-currentIndex * 100}%)` }}
                        >
                            {feedPosts.map((post) => {
                                const isLiked = !!likedPosts[post.id];
                                const isBookmarked = !!bookmarkedPosts[post.id];
                                const currentImgIdx = activeImageIndexes[post.id] || 0;

                                return (
                                    <div key={post.id} className={styles.postCard}>
                                        <div className={styles.galleryViewport}>
                                            <div
                                                className={styles.imageScrollTrack}
                                                onScroll={(e) => handleImageScroll(post.id, e)}
                                            >
                                                {post.images.map((imgUrl, imgIdx) => (
                                                    <div key={imgIdx} className={styles.imageSlide}>
                                                        <img
                                                            src={imgUrl}
                                                            alt={`Frame ${imgIdx + 1}`}
                                                            className={`${styles.galleryImage} ${currentImgIdx === imgIdx ? styles.imageActive : ''}`}
                                                            draggable="false"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            {post.images.length > 1 && (
                                                <div className={styles.galleryIndicator}>
                                                    <span>{currentImgIdx + 1}</span>
                                                    <span className={styles.indicatorDivider}>/</span>
                                                    <span>{post.images.length}</span>
                                                </div>
                                            )}

                                            <div className={styles.bottomShadowScrim} />

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
                                                    <p className={styles.clampedDescription}>{post.description}</p>
                                                </div>

                                                {post.images.length > 1 && (
                                                    <div className={styles.galleryDots}>
                                                        {post.images.map((_, imgIdx) => (
                                                            <div
                                                                key={imgIdx}
                                                                className={`${styles.dot} ${currentImgIdx === imgIdx ? styles.dotActive : ''}`}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Action overlays on media */}
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
                                                    className={`${styles.actionItem} ${styles.commentTriggerBtn}`}
                                                    onClick={handleCommentBtnClick}
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

                    {/* LAPTOP ONLY: Fixed full-time comments board */}
                    {isLaptopSize && activePost && (
                        <CommentPop
                            COMMENTS={activePost.comments} // Fixed: changed 'post.comments' to 'activePost.comments'
                            isOpen={true}
                            onClose={() => { }}
                            post={activePost}
                            commentText={customComments[activePost.id] || ''}
                            onCommentChange={(value) => setCustomComments(prev => ({ ...prev, [activePost.id]: value }))}
                            onCommentSubmit={handleCommentSubmit}
                        />
                    )}
                </div>

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

            {/* PHONE/TABLET ONLY: Dynamic floating component */}
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