'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import styles from './CategoriesList.module.css';
import { ExploreNavBar } from './ExploreNavBar';
import SubCategory from './SubCategory';

const INITIAL_CATEGORIES = [
  {
    id: 1,
    category: "Birds",
    title: "Pet Birds",
    count: "8 Breeds",
    imgSrc: "https://img.magnific.com/free-photo/group-colorful-birds-are-flying-formation-with-one-being-flown-by-another_188544-8130.jpg?semt=ais_hybrid&w=740&q=80",
    subCategories: [
      {
        id: 1,
        name: "Parrot",
        image: "https://plus.unsplash.com/premium_photo-1723622429467-0ba746897e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        totalPosts: 320,
        totalShorts: 145,
        totalBreeders: 28,
      },
      {
        id: 2,
        name: "Cockatiel",
        image: "https://media.istockphoto.com/id/1427238122/photo/couple-of-yellow-cockatoo-nymphs-parrot-breed.jpg?s=1024x1024&w=is&k=20&c=fCjGlyBhTgEmaR1Kaibqp0RGo2Zqzg2gXz8K9AD35dc=",
        totalPosts: 180,
        totalShorts: 76,
        totalBreeders: 18,
      },
      {
        id: 3,
        name: "Lovebird",
        image: "https://media.istockphoto.com/id/2273518140/photo/pair-of-colorful-lovebirds-cuddling-on-dark-background-close-up.jpg?s=612x612&w=0&k=20&c=xo3kKvthUWTlZJHpdUBOQvfQwoRQCCSNWLXGnwuaocM=",
        totalPosts: 210,
        totalShorts: 89,
        totalBreeders: 22,
      },
      {
        id: 4,
        name: "Macaw",
        image: "https://plus.unsplash.com/premium_photo-1764519699768-11ddb5309cc1?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        totalPosts: 160,
        totalShorts: 58,
        totalBreeders: 14,
      },
    ],
  },
  {
    id: 2,
    category: "Fish",
    title: "Aquarium Fish",
    count: "8 Species",
    imgSrc: "https://aquariumscience.org/wp-content/uploads/2021/09/240-Malawi-Cichlid-Aquarium.jpg",
    subCategories: [
      { id: 1, name: "Goldfish", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04q1RQjL-0aEq7kNYub1l1Wbedza-ASHnmwVVFZf7dHd-xPYLiUcgeHgD&s=10", totalPosts: 420, totalShorts: 180, totalBreeders: 35 },
      { id: 2, name: "Betta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNl48QUBFhZYPhdxEckRGXBVw6l2rHc4wsIG8pwrDrpM_W2RCcNhNrz_8W&s=10", totalPosts: 360, totalShorts: 170, totalBreeders: 29 },
      { id: 3, name: "Guppy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-p3xIksGxXFgsQ7Uvo1MDwSKEkHU3eX0uvbWMx9FpPXdY4LG3i4F2826w&s=10", totalPosts: 290, totalShorts: 120, totalBreeders: 24 },
      { id: 4, name: "Arowana", image: "https://wallpaperaccess.com/full/2306485.jpg", totalPosts: 140, totalShorts: 50, totalBreeders: 10 },
    ],
  },
  {
    id: 3,
    category: "Dogs",
    title: "Dog Breeds",
    count: "8 Breeds",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeJzcxaz1cPnBMVkRxlrBa4k4OGMKwFSwo626XhSs0RVMzH4rvB_AJJg&s=10",
    subCategories: [
      { id: 1, name: "Labrador", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a", totalPosts: 680, totalShorts: 320, totalBreeders: 58 },
      { id: 2, name: "German Shepherd", image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a", totalPosts: 520, totalShorts: 240, totalBreeders: 44 },
      { id: 3, name: "Golden Retriever", image: "https://images.unsplash.com/photo-1552053831-71594a27632d", totalPosts: 490, totalShorts: 210, totalBreeders: 39 },
      { id: 4, name: "Beagle", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530", totalPosts: 280, totalShorts: 110, totalBreeders: 22 },
    ],
  },
  {
    id: 4,
    category: "Cats",
    title: "Cat Breeds",
    count: "8 Breeds",
    imgSrc: "https://thumbs.dreamstime.com/b/group-diverse-goats-studio-setting-366367740.jpg",
    subCategories: [
      { id: 1, name: "Persian", image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4", totalPosts: 530, totalShorts: 230, totalBreeders: 34 },
      { id: 2, name: "Maine Coon", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131", totalPosts: 390, totalShorts: 180, totalBreeders: 26 },
      { id: 3, name: "Siamese", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce", totalPosts: 340, totalShorts: 160, totalBreeders: 21 },
      { id: 4, name: "British Shorthair", image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d", totalPosts: 260, totalShorts: 120, totalBreeders: 17 },
    ],
  },
  {
    id: 5,
    category: "Goats",
    title: "Goat Breeds",
    count: "8 Breeds",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaY5cYnOj7gL2yGI8HR16lBAOJWU0-6a6Uh4Bu7YhDvMct4wcB8I6G3X2V&s=10",
    subCategories: [
      { id: 1, name: "Boer", image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73", totalPosts: 160, totalShorts: 55, totalBreeders: 13 },
      { id: 2, name: "Saanen", image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d", totalPosts: 120, totalShorts: 42, totalBreeders: 10 },
      { id: 3, name: "Nubian", image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30", totalPosts: 110, totalShorts: 39, totalBreeders: 9 },
      { id: 4, name: "Jamunapari", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a", totalPosts: 95, totalShorts: 30, totalBreeders: 7 },
    ],
  },
  {
    id: 6,
    category: "Snakes",
    title: "Pet Snakes",
    count: "8 Species",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TtIvXcnPheEsjolDMyF47U872Y0Gk5_65Jpy3UgHiOOqpybTYg3zDm4&s=10",
    subCategories: [
      { id: 1, name: "Ball Python", image: "https://images.unsplash.com/photo-1585095595205-e68428a9e205?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", totalPosts: 210, totalShorts: 80, totalBreeders: 16 },
      { id: 2, name: "Corn Snake", image: "https://images.unsplash.com/photo-1611245241464-97cf73d233a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", totalPosts: 170, totalShorts: 64, totalBreeders: 12 },
      { id: 3, name: "King Snake", image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83", totalPosts: 120, totalShorts: 46, totalBreeders: 9 },
      { id: 4, name: "Boa Constrictor", image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5", totalPosts: 95, totalShorts: 31, totalBreeders: 6 },
    ],
  }
];

const TAGS = ['Categories', 'Breeders', 'Sellers', 'Posts', 'Shorts'];

export default function CategoryList({ activeTag, setActiveTag }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [section, setSection] = useState('category'); // Fixed typo: 'catogery' -> 'category'
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleRouteToCategory = (categoryItem) => {
        // Calculate total stats safely before passing it down
        const totalBreeders = categoryItem.subCategories?.reduce((acc, curr) => acc + (curr.totalBreeders || 0), 0) || 0;
        const totalPosts = categoryItem.subCategories?.reduce((acc, curr) => acc + (curr.totalPosts || 0), 0) || 0;
        const totalShorts = categoryItem.subCategories?.reduce((acc, curr) => acc + (curr.totalShorts || 0), 0) || 0;

        setSelectedCategory({
            title: categoryItem.title,
            subCategories: categoryItem.subCategories || [],
            totalBreeders,
            totalPosts,
            totalShorts
        });
        setSection('subCategory'); // Fixed typo: 'subCatogery' -> 'subCategory'
    };

    const filteredCategories = INITIAL_CATEGORIES.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const onBack = () => {
        setSection('category');
        setSelectedCategory(null);
    };

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </Head>

            <div className={styles.scrollContainer}>
                <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />

                {section === 'category' ? (
                    <div className={styles.discoverContainer}>
                        {/* Regular Uniform Categories Grid */}
                        <section className={styles.categoriesGrid}>
                            {filteredCategories.map((item) => (
                                <div
                                    key={item.id}
                                    className={styles.categoryCard}
                                    onClick={() => handleRouteToCategory(item)}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.imgSrc} alt={item.title} className={styles.cardBgImage} />
                                    <div className={styles.cardOverlayGradient}></div>

                                    <div className={styles.categoryCardDetails}>
                                        <div className={styles.categoryInfoText}>
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
                ) : (
                    <SubCategory 
                        title={selectedCategory?.title}
                        items={selectedCategory?.subCategories} 
                        totalBreeders={selectedCategory?.totalBreeders}
                        totalPosts={selectedCategory?.totalPosts}
                        totalShorts={selectedCategory?.totalShorts}
                        onBack={onBack}
                    />
                )}
            </div>
        </>
    );
}