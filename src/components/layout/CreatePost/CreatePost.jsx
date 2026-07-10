'use client';

import React, { useState } from 'react';
import styles from './CreatePost.module.css';

export default function CreatePost() {
  // Array of thumbnail images to simulate stateful image switching
  const [images, setImages] = useState([
    { id: 1, src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60", alt: "Thumb 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=60", alt: "Thumb 2" }
  ]);
  
  const [activeImage, setActiveImage] = useState(images[0].src);

  const handleRemoveImage = (id, e) => {
    e.stopPropagation(); // Prevents switching active image when removing
    const updatedImages = images.filter(img => img.id !== id);
    setImages(updatedImages);
    if (updatedImages.length > 0) {
      setActiveImage(updatedImages[0].src);
    } else {
      setActiveImage("");
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* --- Header Section --- */}
      <header className={styles.header}>
        <h1>Add New Product</h1>
        <div className={styles.actionButtons}>
          <button type="button" className={`${styles.btn} ${styles.btnDraft}`}>📄 Save Draft</button>
          <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>✓ Add Product</button>
        </div>
      </header>

      {/* --- Main Responsive Layout Grid --- */}
      <main className={styles.mainLayout}>
        
        {/* --- LEFT COLUMN (Image Upload & Categories/Brand) --- */}
        <div className={`${styles.column} ${styles.columnLeft}`}>
          
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Upload Image</h2>
            <div className={styles.mainImageContainer}>
              {activeImage ? (
                <img id="mainPreview" src={activeImage} alt="Main Product" />
              ) : (
                <div className={styles.noImage}>No Image Selected</div>
              )}
            </div>
            <div className={styles.thumbnailGrid}>
              {images.map((img) => (
                <div 
                  key={img.id}
                  className={`${styles.thumbBox} ${activeImage === img.src ? styles.active : ''}`}
                  onClick={() => setActiveImage(img.src)}
                >
                  <img src={img.src} alt={img.alt} />
                  <span className={styles.removeIcon} onClick={(e) => handleRemoveImage(img.id, e)}>✕</span>
                </div>
              ))}
              <div className={`${styles.thumbBox} ${styles.addBtn}`}>
                <span>+</span>
              </div>
            </div>
          </section>

          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Categories & Brand</h2>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="categories">Categories</label>
                <select id="categories" defaultValue="Headphone">
                  <option>Headphone</option>
                  <option>Earbuds</option>
                  <option>Speakers</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="brandName">Brand Name</label>
                <input type="text" id="brandName" defaultValue="Beats" />
              </div>
            </div>
          </section>
        </div>

        {/* --- RIGHT COLUMN (General Info & Pricing) --- */}
        <div className={`${styles.column} ${styles.columnRight}`}>
          
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>General Information</h2>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" defaultValue="Beats Solo 2" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="productId">Product ID</label>
                <input type="text" id="productId" defaultValue="554762" />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="description">Description</label>
                <textarea id="description" placeholder="Type here..."></textarea>
              </div>
            </div>
          </section>

          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Pricing & Stock</h2>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="price">Price</label>
                <input type="text" id="price" defaultValue="50 USD" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="discountType">Discount Type</label>
                <select id="discountType" defaultValue="New Year Discount">
                  <option>New Year Discount</option>
                  <option>Clearance Sale</option>
                  <option>None</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="discountPercentage">Discount Percentage (%)</label>
                <input type="number" id="discountPercentage" defaultValue="10" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="stockQuantity">Stock Quantity</label>
                <input type="text" id="stockQuantity" defaultValue="200 Pieces" />
              </div>
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}