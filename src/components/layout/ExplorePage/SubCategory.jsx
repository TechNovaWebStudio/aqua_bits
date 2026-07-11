'use client';

import React from 'react';
import styles from './SubCategory.module.css';

export default function SubCategory({ items, onBack }) {
  return (
    <div className={styles.subContainer}>
      <button className={styles.backButton} onClick={onBack}>
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>

      <div className={styles.subGrid}>
        {items.map((item) => (
          <div key={item.id} className={styles.subCard}>
            <img src={item.imgSrc} alt={item.title} className={styles.cardBgImage} />
            <div className={styles.cardOverlayGradient}></div>
            
            <div className={styles.subCardDetails}>
              <div className={styles.infoText}>
                <h3>{item.title}</h3>
                <p className={styles.itemCount}>{item.count}</p>
              </div>
              <div className={styles.actionIconCircle}>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}