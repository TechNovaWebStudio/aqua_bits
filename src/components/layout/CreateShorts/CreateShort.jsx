'use strict';
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CreateShort.module.css';

export default function CreateShort() {
  // Manage state dynamically for user thumbnails removal
  const [thumbnails, setThumbnails] = useState([
    { id: 1, src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=150', alt: 'Sloth' },
    { id: 2, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=150', alt: 'Waterfall' },
  ]);

  const handleDeleteThumbnail = (id) => {
    setThumbnails(thumbnails.filter((thumb) => thumb.id !== id));
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.header}>
        <h1>Upload Your Video File</h1>
      </div>
      <div className={styles.headerSubtext}>Upload your video file and other media in here.</div>

      <div className={styles.mainGrid}>
        {/* Left Side: Upload Zone */}
        <div className={styles.uploadZone}>
          <div className={styles.uploadIconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
          </div>
          <h3>Select Video to Upload</h3>
          <p>Supported Format: SVG, JPG, PNG<br />(10mb each)</p>
          <button className={styles.selectBtn} type="button">
            Select File 
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"/>
            </svg>
          </button>
        </div>

        {/* Right Side: Form Fields */}
        <div>
          <div className={styles.formGroup}>
            <label>Video Caption</label>
            <div className={styles.inputWrapper}>
              <span className={styles.prefixIcon}>#</span>
              <input type="text" className={`${styles.formControl} ${styles.hasIcon}`} placeholder="Enter your video caption..." />
            </div>
            <div className={styles.charLimit}>21 / 50 Character Limit</div>
          </div>

          <div className={`${styles.formGroup} ${styles.dropdownRow}`}>
            <div>
              <label>Who Can View</label>
              <select className={styles.formControl}>
                <option>All People (Public)</option>
                <option>Private</option>
              </select>
            </div>
            <div>
              <label>Video Category</label>
              <select className={styles.formControl}>
                <option>Fitness & Wellness</option>
                <option>Education</option>
                <option>Entertainment</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Label</label>
            <textarea className={styles.formControl} placeholder="Enter your main text here..."></textarea>
            <div className={styles.charLimit}>300/300</div>
          </div>

          <div className={styles.formGroup}>
            <label>Video Thumbnails Cover</label>
            <div className={styles.thumbnailContainer}>
              {thumbnails.map((thumb) => (
                <div key={thumb.id} className={styles.thumbBox}>
                  <Image 
                    src={thumb.src} 
                    alt={thumb.alt} 
                    width={80} 
                    height={100} 
                    unoptimized // Allows rendering external Unsplash links directly without adding extra domain rules to next.config.js
                  />
                  <button 
                    type="button" 
                    className={styles.deleteBtn} 
                    onClick={() => handleDeleteThumbnail(thumb.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button className={styles.addThumbBtn} type="button">+</button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Allow Users To</label>
            <div className={styles.optionsRow}>
              <label className={styles.checkboxLabel}><input type="checkbox" defaultChecked={false} /> Comment</label>
              <label className={styles.checkboxLabel}><input type="checkbox" defaultChecked={true} /> Duet</label>
              <label className={styles.checkboxLabel}><input type="checkbox" defaultChecked={false} /> Remix</label>
              <label className={styles.checkboxLabel}><input type="checkbox" defaultChecked={true} /> Share</label>
              <label className={styles.checkboxLabel}><input type="checkbox" defaultChecked={true} /> Save</label>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}