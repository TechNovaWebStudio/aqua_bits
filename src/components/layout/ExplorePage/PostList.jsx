import React from 'react';
import styles from './PostList.module.css';
import { ExploreNavBar } from './ExploreNavBar';

// Mock data based on your image layout
const POSTS_DATA = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=600', // Desert rock formations
        user: { name: 'Alex River', avatar: 'https://i.pravatar.cc/150?img=32' },
        time: '2 hours ago',
        views: '1.2k',
        comments: 42,
        gridClass: styles.largeRock,
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600', // Lone walker sand dune
        user: { name: 'Sam Smith', avatar: 'https://i.pravatar.cc/150?img=12' },
        time: '2 hours ago',
        views: '850',
        comments: 19,
        gridClass: styles.loneWalker,
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=600', // Caravan dunes
        user: { name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/150?img=47' },
        time: '2 hours ago',
        views: '3.4k',
        comments: 112,
        gridClass: styles.caravan,
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600', // Sunset picnic
        user: { name: 'Taylor Swift', avatar: 'https://i.pravatar.cc/150?img=49' },
        time: '2 hours ago',
        views: '5.1k',
        comments: 230,
        gridClass: styles.sunsetPicnic,
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1618083707368-b3823daa2726?q=80&w=600', // Canyon walk
        user: { name: 'Morgan Freeman', avatar: 'https://i.pravatar.cc/150?img=60' },
        time: '2 hours ago',
        views: '2.7k',
        comments: 89,
        gridClass: styles.canyon,
    }
];

export default function PostList({activeTag,setActiveTag}) {
    return (
        <div className={styles.container}>
            <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag}/>
            <div className={styles.grid}>
                {POSTS_DATA.map((post) => (
                    <div key={post.id} className={`${styles.card} ${post.gridClass}`}>
                        <div
                            className={styles.imageBackground}
                            style={{ backgroundImage: `url(${post.image})` }}
                        />

                        {/* Card Content Overlay */}
                        <div className={styles.overlay}>
                            <div className={styles.footer}>
                                {/* Left Side: Avatar, Name, Time */}
                                <div className={styles.userInfo}>
                                    <img src={post.user.avatar} alt={post.user.name} className={styles.avatar} />
                                    <div className={styles.metaText}>
                                        <span className={styles.userName}>{post.user.name}</span>
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
                                        <span>{post.views}</span>
                                    </div>
                                    <div className={styles.statItem}>
                                        <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}