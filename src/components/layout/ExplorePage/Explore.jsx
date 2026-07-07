'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import styles from './Explore.module.css';

const INITIAL_CATEGORIES = [
  {
    id: 1,
    category: 'Engine & Tuning',
    title: 'Performance Parts',
    count: '142 Items',
    imgSrc: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    category: 'Fitment Style',
    title: 'Wheels & Stance',
    count: '89 Items',
    imgSrc: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    category: 'Acoustics & Airflow',
    title: 'Exhaust Systems',
    count: '64 Items',
    imgSrc: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 4,
    category: 'Cockpit Modding',
    title: 'Interior & Shifters',
    count: '110 Items',
    imgSrc: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 5,
    category: 'Bodywork Styling',
    title: 'Carbon Aero Kits',
    count: '53 Items',
    imgSrc: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 6,
    category: 'Community Spotlights',
    title: 'Featured Builds',
    count: '210 Items',
    imgSrc: 'https://images.unsplash.com/photo-1611245555447-e80ee5c66495?auto=format&fit=crop&q=80&w=500',
  },
];

const TAGS = ['Categories', 'Breeders', 'Sellers', 'Posts', 'Shorts'];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All Categories');

  const handleRouteToCategory = (categoryName) => {
    alert(`Loading sub-feed inventory query matrices configured for: "${categoryName}"`);
  };

  const filteredCategories = INITIAL_CATEGORIES.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className={styles.scrollContainer}>
        <div className={styles.discoverContainer}>
          
          {/* Header Block */}
          <header className={styles.discoverHeader}>
            <div className={styles.discoverTitleRow}>
              <div className={styles.titleMeta}>
                <h1>Explore Categories</h1>
                <p className={styles.subtitle}>Discover premium aftermarket styles, curated setups, and structural components.</p>
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

          {/* Regular Uniform Categories Grid */}
          <section className={styles.categoriesGrid}>
            {filteredCategories.map((item) => (
              <div
                key={item.id}
                className={styles.categoryCard}
                onClick={() => handleRouteToCategory(item.title)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.imgSrc} alt={item.title} className={styles.cardBgImage} />
                <div className={styles.cardOverlayGradient}></div>
                
                <div className={styles.categoryCardDetails}>
                  <div className={styles.categoryInfoText}>
                    {/* <span className={styles.metaBadge}>{item.category}</span> */}
                    <h3>{item.title}</h3>
                    <p className={styles.itemCount}>{item.count}</p>
                  </div>
                  <div className={styles.categoryActionIconCircle}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {filteredCategories.length === 0 && (
            <div className={styles.noResults}>
              <i className="fa-solid fa-cloud-moon" style={{ fontSize: '32px', marginBottom: '12px', color: '#a1a1aa' }}></i>
              <p>No matching categories found</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}