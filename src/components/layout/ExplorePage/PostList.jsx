import React, { useMemo } from 'react';
import styles from './PostList.module.css';
import { ExploreNavBar } from './ExploreNavBar';
import { POSTS_DATA } from '../../../../public/data';

export default function PostList({ activeTag, setActiveTag }) {
    // 🔍 DEBUG LOGS: Open your browser inspect console (F12) to check these!
    console.log("DEBUG: raw POSTS_DATA import:", POSTS_DATA);
    console.log("DEBUG: current activeTag:", activeTag);

    // Filter the posts based on the activeTag
    const filteredPosts = useMemo(() => {
        // Safe check: If POSTS_DATA is missing or not an array, return empty
        if (!Array.isArray(POSTS_DATA)) return [];

        // If no activeTag is set, or if it is set to "All", show everything
        if (!activeTag || activeTag.trim() === '' || activeTag.toLowerCase() === 'all') {
            return POSTS_DATA;
        }

        const targetTag = activeTag.toLowerCase();

        return POSTS_DATA.filter((post) => {
            // Scenario A: post has a 'tags' array (e.g., ["design", "tech"])
            if (Array.isArray(post.tags)) {
                return post.tags.some(tag => typeof tag === 'string' && tag.toLowerCase() === targetTag);
            }

            // Scenario B: post has a single 'tag' string (e.g., "design")
            if (typeof post.tag === 'string') {
                return post.tag.toLowerCase() === targetTag;
            }

            // Scenario C: post has a 'category' string (e.g., "tech")
            if (typeof post.category === 'string') {
                return post.category.toLowerCase() === targetTag;
            }

            return false;
        });
    }, [activeTag]);

    console.log("DEBUG: filteredPosts result:", filteredPosts);

    return (
        <div className={styles.container}>
            <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />
            
            <div className={styles.grid}>
                {filteredPosts.length === 0 ? (
                    // This fallback displays if no posts match the selected filter
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem' }}>
                        <p>No posts found for "{activeTag || 'All'}".</p>
                        <p style={{ fontSize: '0.85rem', color: '#666' }}>
                            Check your DevTools console (F12) to see if data loaded correctly.
                        </p>
                    </div>
                ) : (
                    filteredPosts.map((post) => (
                        <div key={post.id} className={`${styles.card} ${post.gridClass || ''}`}>
                            <div
                                className={styles.imageBackground}
                                style={{ backgroundImage: `url(${post.image})` }}
                            />

                            {/* Card Content Overlay */}
                            <div className={styles.overlay}>
                                <div className={styles.footer}>
                                    {/* Left Side: Avatar, Name, Time */}
                                    <div className={styles.userInfo}>
                                        <img 
                                            src={post.avatar || '/default-avatar.png'} 
                                            alt={post?.user?.name || 'User'} 
                                            className={styles.avatar} 
                                        />
                                        <div className={styles.metaText}>
                                            <span className={styles.userName}>{post?.user?.name || 'Anonymous'}</span>
                                            <span className={styles.timeAgo}>{post.time}</span>
                                        </div>
                                    </div>

                                    {/* Right Side: Views and Comments */}
                                    <div className={styles.stats}>
                                        <div className={styles.statItem}>
                                            <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            <span>{post.views ?? 0}</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            <span>{post.comments ?? 0}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}