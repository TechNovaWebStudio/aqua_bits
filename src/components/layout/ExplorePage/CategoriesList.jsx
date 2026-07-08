'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import styles from './CategoriesList.module.css';
import { ExploreNavBar } from './ExploreNavBar';

const INITIAL_CATEGORIES = [
    {
        id: 1,
        category: 'Engine & Tuning',
        title: 'Performance Parts',
        count: '142 Items',
        imgSrc: 'https://img.magnific.com/free-photo/group-colorful-birds-are-flying-formation-with-one-being-flown-by-another_188544-8130.jpg?semt=ais_hybrid&w=740&q=80',
    },
    {
        id: 2,
        category: 'Fitment Style',
        title: 'Wheels & Stance',
        count: '89 Items',
        imgSrc: 'https://aquariumscience.org/wp-content/uploads/2021/09/240-Malawi-Cichlid-Aquarium.jpg',
    },
    {
        id: 3,
        category: 'Acoustics & Airflow',
        title: 'Exhaust Systems',
        count: '64 Items',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeJzcxaz1cPnBMVkRxlrBa4k4OGMKwFSwo626XhSs0RVMzH4rvB_AJJg&s=10',
    },
    {
        id: 4,
        category: 'Cockpit Modding',
        title: 'Interior & Shifters',
        count: '110 Items',
        imgSrc: 'https://thumbs.dreamstime.com/b/group-diverse-goats-studio-setting-366367740.jpg',
    },
    {
        id: 5,
        category: 'Bodywork Styling',
        title: 'Carbon Aero Kits',
        count: '53 Items',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaY5cYnOj7gL2yGI8HR16lBAOJWU0-6a6Uh4Bu7YhDvMct4wcB8I6G3X2V&s=10',
    },
    {
        id: 6,
        category: 'Community Spotlights',
        title: 'Featured Builds',
        count: '210 Items',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TtIvXcnPheEsjolDMyF47U872Y0Gk5_65Jpy3UgHiOOqpybTYg3zDm4&s=10',
    },
];

const TAGS = ['Categories', 'Breeders', 'Sellers', 'Posts', 'Shorts'];

export default function CategotyList({ activeTag, setActiveTag }) {
    const [searchQuery, setSearchQuery] = useState('');
    // const [activeTag, setActiveTag] = useState('All Categories');

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
                <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />

                <div className={styles.discoverContainer}>
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