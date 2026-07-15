"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SHORTS_DATA } from '../../../../../public/data';
import "./HighlightsGrid.css";

// Helper function to format counts (e.g., 1500 -> 1.5k, 1000000 -> 1M)
const formatCount = (num) => {
  if (!num || isNaN(num)) return "0";
  const absNum = Math.abs(num);
  
  if (absNum >= 1000000) {
    const formatted = (num / 1000000).toFixed(1);
    return formatted.endsWith('.0') ? `${Math.floor(num / 1000000)}M` : `${formatted}M`;
  }
  if (absNum >= 1000) {
    const formatted = (num / 1000).toFixed(1);
    return formatted.endsWith('.0') ? `${Math.floor(num / 1000)}k` : `${formatted}k`;
  }
  return num.toString();
};

export default function HighlightsGrid() {
  const router = useRouter();
  const [shorts] = useState(SHORTS_DATA || []);

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.play().catch((err) => {
        // Safe catch block for browsers blocking play before interaction
        console.warn("Autoplay prevented or interrupted:", err);
      });
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
    }
  };

  return (
    <section className="highlights-masonry-grid">
      {shorts.map((card) => (
        <div 
          key={card.id || card.name} 
          onClick={() => router.push(`/shorts/${card.id || ''}`)}
          className="highlight-grid-card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video 
            src={card.videoUrl} 
            muted 
            loop 
            playsInline
          />
          <div className="highlight-card-overlay">
            <h4 className="highlight-user-heading">{card.username}</h4>
            <div className="highlight-metrics-row">
              <span>
                <i className="fa-regular fa-heart"></i> {formatCount(card.likes)}
              </span>
              <span>
                <i className="fa-regular fa-comment"></i> {formatCount(card.commentsCount)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}