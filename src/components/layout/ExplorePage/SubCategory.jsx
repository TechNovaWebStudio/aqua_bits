'use client';

import React from 'react';
import styles from './SubCategory.module.css';

export default function SubCategory({ items, onBack, parentCategory }) {
    return (
        <div className={styles.subContainer}>
            {/* Minimalist Navigation Header */}
            <header className={styles.headerRow}>
                <button className={styles.backButton} onClick={onBack} aria-label="Go back to categories">
                    <i className="fa-solid fa-chevron-left"></i>
                    <span>Back</span>
                </button>
                <div className={styles.titleWrapper}>
                    <span className={styles.eyebrow}>Exploring</span>
                    <h2 className={styles.subTitle}>{parentCategory}</h2>
                </div>
            </header>

            {/* Redesigned Minimal Grid */}
            <section className={styles.categoriesGrid}>
                {items.map((item) => (
                    <article key={item.id} className={styles.categoryCard}>
                        {/* Image Container with Zoom Effect */}
                        <div className={styles.imageWrapper}>
                            <img src={item.image} alt={item.title} className={styles.cardBgImage} />
                            <div className={styles.badgeSction}>
                                <div className={styles.tagBadge}>
                                    <span className={styles.itemCount}>{item.totalShorts} Shorts</span>
                                </div>
                                <div className={styles.tagBadge}>
                                    <span className={styles.itemCount}>{item.totalPosts} Posts</span>
                                </div>
                                <div className={styles.tagBadge}>
                                    <span className={styles.itemCount}>{item.totalBreeders} Breeders</span>
                                </div>
                            </div>
                        </div>

                        {/* Elegant Light Details Footer */}
                        <div className={styles.categoryCardDetails}>
                            <div className={styles.categoryInfoText}>
                                <h3>{item.name}</h3>
                                <span className={styles.exploreText}>View Collection</span>
                            </div>
                            <div className={styles.categoryActionIconCircle}>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}