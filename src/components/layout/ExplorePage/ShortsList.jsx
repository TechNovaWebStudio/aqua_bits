'use client';

import React, { useRef, useState } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import Link from 'next/link'; 
import styles from './ShortsList.module.css';
import { ExploreNavBar } from './ExploreNavBar';
import { SHORTS_DATA } from '../../../../public/data';

const ShortCard = ({ short }) => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const commentCount = Array.isArray(short.comments) ? short.comments.length : (short.comments || 0);
    const likeCount = Array.isArray(short.views) ? short.views.length : (short.views || 0); 

    return (
        <Link href={`/shorts/${short.id}`} className={styles.cardLink}>
            <div
                className={`${styles.card} ${isHovered ? styles.cardActive : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Visual Engine Layer */}
                <div className={styles.mediaContainer}>
                    <video
                        ref={videoRef}
                        className={styles.videoStream}
                        src={short.videoUrl}
                        muted
                        loop
                        playsInline
                    />
                    <div className={styles.cinematicOverlay} />
                </div>

                {/* Bottom Balanced Model Control Panel */}
                <div className={styles.glassPanel}>
                    <div className={styles.profileSection}>
                        <div className={styles.avatarWrapper}>
                            <img src={short.avatar} alt={short.username} className={styles.avatarImage} />
                            <div className={styles.onlineStatus} />
                        </div>
                        <div className={styles.profileMeta}>
                            <h4 className={styles.profileName}>@{short.username}</h4>
                            <p className={styles.captionText}>{short.title || 'Exclusive Feed'}</p>
                        </div>
                    </div>

                    {/* Symmetrically Paired Actions Panel */}
                    <div className={styles.actionsGroup}>
                        <div className={styles.actionItem}>
                            <FaHeart className={styles.actionIcon} />
                            <span className={styles.actionCount}>{likeCount}</span>
                        </div>
                        <div className={styles.actionItem}>
                            <FaComment className={styles.actionIcon} />
                            <span className={styles.actionCount}>{commentCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function ShortsList({ activeTag, setActiveTag }) {
    const [shortsData] = useState(SHORTS_DATA);

    return (
        <div className={styles.viewportContainer}>
            <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />
            <main className={styles.magazineGrid}>
                {shortsData.map((short) => (
                    <ShortCard key={short.id} short={short} />
                ))}
            </main>
        </div>
    );
}