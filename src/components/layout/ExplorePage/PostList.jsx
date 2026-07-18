import React from 'react';
import styles from './PostList.module.css';
import { ExploreNavBar } from './ExploreNavBar';
// CHANGER HERE: Import from next/navigation instead of next/router
import { useRouter } from 'next/navigation'; 
import { POSTS_DATA } from '../../../../public/data';

/**
 * Formats metrics to mimic a classic Pinterest layout feed:
 * 5 -> "05", 42 -> "42", 1200 -> "1.2k", 100000 -> "100k", 1500000 -> "1.5m"
 */
function formatStatCount(num) {
    if (!num || isNaN(num) || num < 0) return '00';
    
    if (num >= 1000000) {
        const formatted = (num / 1000000).toFixed(1);
        return formatted.endsWith('.0') ? `${Math.floor(num / 1000000)}m` : `${formatted}m`;
    }
    
    if (num >= 1000) {
        const formatted = (num / 1000).toFixed(1);
        return formatted.endsWith('.0') ? `${Math.floor(num / 1000)}k` : `${formatted}k`;
    }
    
    if (num < 10) {
        return `0${num}`;
    }
    
    return num.toString();
}

export default function PostList({ activeTag, setActiveTag }) {
    const router = useRouter(); // This now functions perfectly in App Router
    const hasPosts = Array.isArray(POSTS_DATA) && POSTS_DATA.length > 0;

    return (
        <div className={styles.container}>
            <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />
            
            {!hasPosts ? (
                <div className={styles.emptyState}>
                    <p>No posts available.</p>
                </div>
            ) : (
                <div className={styles.masonryGrid}>
                    {POSTS_DATA.map((post, index) => {
                        const displayImage = Array.isArray(post?.images) && post.images.length > 0 
                            ? post.images[0] 
                            : '/default-placeholder.png';

                        const commentCountValue = Array.isArray(post?.comments) 
                            ? post.comments.length 
                            : (post?.commentsCount || 0);

                        const likesValue = post?.likes ?? 0;

                        return (
                            <div 
                                key={post?.id || index} 
                                className={styles.card} 
                                onClick={() => post?.id && router.push(`/post-feed/${post.id}`)}
                            >
                                <img 
                                    src={displayImage} 
                                    alt={post?.username || 'Post content'} 
                                    className={styles.cardImage} 
                                />

                                <div className={styles.overlay}>
                                    <div className={styles.footer}>
                                        <div className={styles.userInfo}>
                                            <img 
                                                src={post?.avatar || '/default-avatar.png'} 
                                                alt={post?.username || 'User'} 
                                                className={styles.avatar} 
                                            />
                                            <div className={styles.metaText}>
                                                <span className={styles.userName} title={post?.username || 'Anonymous'}>
                                                    {post?.username || 'Anonymous'}
                                                </span>
                                                <span className={styles.timeAgo} title={post?.userTitle || 'Creator'}>
                                                    {post?.userTitle || 'Creator'}
                                                </span>
                                            </div>
                                        </div>

                                        <div className={styles.stats}>
                                            <div className={styles.statItem}>
                                                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span>{formatStatCount(likesValue)}</span>
                                            </div>
                                            <div className={styles.statItem}>
                                                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                <span>{formatStatCount(commentCountValue)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}