'use client';

import React, { useState } from 'react';
import styles from './ExploreNavBar.module.css';

// Mock data for tags (Adjust or pass via props as needed)
const TAGS = [ 'Catogerys' ,'Shorts', 'Posts', 'Breeders', 'Users',  ];

export function ExploreNavBar({activeTag,setActiveTag}) {
    // 1. Defined missing state variables to prevent runtime crashes
    const [searchQuery, setSearchQuery] = useState('');
    // const [activeTag, setActiveTag] = useState('Categories');

    return (
        <header className={styles.discoverHeader}>
            <div className={styles.discoverTitleRow}>
                <div className={styles.titleMeta}>
                    <h1>Explore Categories</h1>
                    <p className={styles.subtitle}>
                        Discover premium aftermarket styles, curated setups, and structural components.
                    </p>
                </div>

                <div className={styles.searchBarWrapper}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search styles, parts, builds..."
                        autoComplete="off"
                    />
                </div>
            </div>

            {/* Trending Tags Scrolling Row */}
            <div className={styles.trendingTagsScroller}>
                {TAGS.map((tag) => (
                    <button
                        key={tag}
                        className={`${styles.tagPill} ${activeTag === tag ? styles.activeTag : ''}`}
                        onClick={() => setActiveTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </header>
    );
}