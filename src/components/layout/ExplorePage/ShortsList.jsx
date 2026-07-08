import React, { useRef } from 'react';
import { FaEye, FaComment } from 'react-icons/fa';
import styles from './ShortsList.module.css';
import { ExploreNavBar } from './ExploreNavBar';

const shortsData = [
    {
        id: 1,
        videoUrl: './dumo.mp4',
        posterUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80',
        user: {
            name: 'Alex Wander',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        },
        views: '4.2k',
        comments: '128',
    },
    {
        id: 2,
        videoUrl: './dumo2.mp4',
        posterUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80',
        user: {
            name: 'Sarah Safari',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
        },
        views: '9.1k',
        comments: '342',
    },
    {
        id: 3,
        videoUrl: './dumo3.mp4',
        posterUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        user: {
            name: 'Takashi K.',
            avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
        },
        views: '7.5k',
        comments: '210',
    },
    {
        id: 4,
        videoUrl: './dumo4.mp4',
        posterUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80',
        user: {
            name: 'Alex Wander',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        },
        views: '4.2k',
        comments: '128',
    },
    {
        id: 5,
        videoUrl: './dumo3.mp4',
        posterUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80',
        user: {
            name: 'Sarah Safari',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
        },
        views: '9.1k',
        comments: '342',
    },
    {
        id: 6,
        videoUrl: './dumo2.mp4',
        posterUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        user: {
            name: 'Takashi K.',
            avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
        },
        views: '7.5k',
        comments: '210',
    },
];

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

    return (
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
                    poster={short.posterUrl}
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
                        <img src={short.user.avatar} alt={short.user.name} className={styles.avatar} />
                        <div className={styles.userMetaText}>
                            <span className={styles.userName}>{short.user.name}</span>
                            <span className={styles.timeLabel}>2h ago</span>
                        </div>
                    </div>

                    {/* Right Side Stacked Icons Metrics */}
                    <div className={styles.bottomRightMetrics}>
                        <div className={styles.metricBubble}>
                            <FaEye className={styles.metricIcon} />
                            <span className={styles.metricCount}>{short.views}</span>
                        </div>
                        <div className={styles.metricBubble}>
                            <FaComment className={styles.metricIcon} />
                            <span className={styles.metricCount}>{short.comments}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default function ShortsList({ activeTag, setActiveTag }) {
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