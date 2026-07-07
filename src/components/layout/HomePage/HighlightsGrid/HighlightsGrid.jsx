"use client";

import { useRouter } from 'next/navigation';
import "./HighlightsGrid.css";

export default function HighlightsGrid() 
{ const router = useRouter();
  const cards = [
    { name: "Elena R.", likes: "12K", views: "45K", video: "./dumo.mp4" },
    { name: "Marcus A.", likes: "8.4K", views: "29K", video: "./dumo2.mp4" },
    { name: "Billie J.", likes: "19.1K", views: "88K", video: "./dumo3.mp4" },
    { name: "Charlie D.", likes: "15.3K", views: "62K", video: "./dumo4.mp4" },
  ];

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.play().catch((err) => console.log("Autoplay prevented:", err));
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      // Optional: Reset video to the beginning when mouse leaves
      // video.currentTime = 0; 
    }
  };

  return (
    <section className="highlights-masonry-grid">
      {cards.map((card, i) => (
        <div 
        onClick={() => router.push('/view-short')}
          key={i} 
          className="highlight-grid-card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video 
            src={card.video} 
            muted 
            loop 
            playsInline
            // poster="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
          />
          <div className="highlight-card-overlay">
            <h4 className="highlight-user-heading">{card.name}</h4>
            <div className="highlight-metrics-row">
              <span><i className="fa-regular fa-heart"></i> {card.likes}</span>
              <span><i className="fa-regular fa-eye"></i> {card.views}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}