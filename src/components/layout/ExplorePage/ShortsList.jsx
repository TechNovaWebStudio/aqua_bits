'use client';

import React, { useRef, useState } from 'react';
import { FaEye, FaComment } from 'react-icons/fa';
// 1. Import Link from Next.js
import Link from 'next/link'; 
import styles from './ShortsList.module.css';
import { ExploreNavBar } from './ExploreNavBar';
import { SHORTS_DATA } from '../../../../public/data';

const ShortCard = ({ short }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const commentCount = Array.isArray(short.comments) ? short.comments.length : (short.comments || 0);
    const viewCount = Array.isArray(short.views) ? short.views.length : (short.views || 0);

    return (
        /* 2. Wrap the entire card in a Link tag pointing to `/shorts/[id]` */
        <Link href={`/shorts/${short.id}`} className={styles.cardLink}>
            <div
                className={styles.card}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Background Video element */}
                <div className={styles.videoContainer}>
                    <video
                        ref={videoRef}
                        className={styles.videoBackground}
                        src={short.videoUrl}
                        muted
                        loop
                        playsInline
                    />
                    <div className={styles.darkOverlay} />
                </div>

                {/* Interactive Bottom Profile/Engagement Details Layer */}
                <div className={styles.contentOverlay}>
                    <div className={styles.bottomSection}>

                        {/* User Details Row */}
                        <div className={styles.userProfileRow}>
                            <img src={short.avatar} alt={short.username} className={styles.avatar} />
                            <div className={styles.userMetaText}>
                                <span className={styles.userName}>{short.username}</span>
                                <span className={styles.timeLabel}>2h ago</span>
                            </div>
                        </div>

                        {/* Right Side Stacked Icons Metrics */}
                        <div className={styles.bottomRightMetrics}>
                            <div className={styles.metricBubble}>
                                <FaEye className={styles.metricIcon} />
                                <span className={styles.metricCount}>{viewCount}</span>
                            </div>
                            <div className={styles.metricBubble}>
                                <FaComment className={styles.metricIcon} />
                                <span className={styles.metricCount}>{commentCount}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function ShortsList({ activeTag, setActiveTag }) {
    const [shortsData, setShortsData] = useState(SHORTS_DATA);

    return (
        <div className={styles.pageWrapper}>
            <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />
            <div className={styles.shortsGrid}>
                {shortsData.map((short) => (
                    <ShortCard key={short.id} short={short} />
                ))}
            </div>
        </div>
    );
}