"use client";

import { useState } from "react";
import "./TimelineFeed.css";

// 1. Define the dynamic posts object data array
const postsData = [
  {
    id: 1,
    username: "Koi_Pond",
    timeAgo: "2 hours ago",
    avatarUrl: "https://c1.wallpaperflare.com/preview/93/792/921/water-fish-japan-carp.jpg",
    description: "Exploring the beautiful landscapes and capturing moments that stay forever. This weekend getaway was exactly what I needed to recharge!",
    initialLikes: 15.2,
    commentCount: 428,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRex8DjTM34OQY5n3fsThrF4386btxG4zXsSHhNCI3EC0ro2FEEx9u6moc&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNVi2Jia8CJijunqY_9rqPx0OWxfB6bHi1LgkV7S_Ey1Lt3wz2D9P-ZKx&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0pJO6ztanhZ5OYlV-ZQ6wEX6fAltGIQ6zucfuFfmEKZjoQSxmiDTn7EV&s=10"
    ],
    likedBySummary: "alex_jdm",
    likedByAvatars: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&q=80"
    ]
  },

  {
    id: 2,
    username: "Betta_Fish",
    timeAgo: "2 hours ago",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMDldL5dZxdLVQbbJ3n9GQsdSKIHyv6oNmHFnsyKNrg&s=10",
    description: "Exploring the beautiful landscapes and capturing moments that stay forever. This weekend getaway was exactly what I needed to recharge!",
    initialLikes: 15.2,
    commentCount: 428,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNl48QUBFhZYPhdxEckRGXBVw6l2rHc4wsIG8pwrDrpM_W2RCcNhNrz_8W&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiPtNPgAx81ViBxADvVDzZV-azLKT-vVH2-sunSYAZ2QG9Yn-ZmGAPExN&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHJPJctyN9ey-wFI-sZScsZ-2Vb7D9U988lUjdwsVQW98Xc-YuTTKBVY&s=10"
    ],
    likedBySummary: "alex_jdm",
    likedByAvatars: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&q=80"
    ]
  }
];

// 2. Individual Post Card Component managing its own slider & interaction states
function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.initialLikes);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  // Touch state helpers for mobile swipe detection
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentImageIndex((prev) => (prev === post.images.length - 1 ? 0 : prev + 1));
    } else if (isRightSwipe) {
      setCurrentImageIndex((prev) => (prev === 0 ? post.images.length - 1 : prev - 1));
    }
  };

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(post.initialLikes);
    } else {
      setLiked(true);
      setLikesCount(parseFloat((post.initialLikes + 0.1).toFixed(1)));
    }
  };

  return (
    <div className="timeline-feed-card">
      {/* Header Section */}
      <div className="post-header-identity">
        <div className="identity-avatar">
          <img src={post.avatarUrl} alt={post.username} />
        </div>
        <div className="identity-meta-text">
          <h4>{post.username}</h4>
          <span>{post.timeAgo}</span>
        </div>
      </div>

      {/* Image Slider Section with Swipe Animations */}
      <div 
        className="post-display-viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {post.images.map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Viewport view ${index + 1}`} 
              className="slider-image"
            />
          ))}
        </div>
        
        {/* Navigation Indicator Dots Overlay */}
        <div className="viewport-overlay-bottom">
          <div className="slider-dots-container">
            {post.images.map((_, index) => (
              <span 
                key={index} 
                className={`slider-dot ${currentImageIndex === index ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Action Layout Panel */}
      <div className="post-actions-panel">
        <div className="actions-group-left">
          <button className={`action-button-trigger ${liked ? "user-liked-active" : ""}`} onClick={toggleLike}>
            <i className={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
            <span>{likesCount}K</span>
          </button>
          <button className="action-button-trigger">
            <i className="fa-regular fa-comment"></i>
            <span>{post.commentCount}</span>
          </button>
        </div>
        <button className="action-button-buynow">View Details</button>
      </div>

      {/* Overlapping Avatar Elements Row */}
      <div className="liked-people-row">
        <div className="avatar-overlap-group">
          {post.likedByAvatars.map((avatar, idx) => (
            <img key={idx} src={avatar} alt="Likers icon profile" className="overlap-avatar" />
          ))}
        </div>
        <p className="liked-text-summary">
          Liked by <strong>{post.likedBySummary}</strong> and <strong>{likesCount}K others</strong>
        </p>
      </div>

      {/* Text Post Content Block Description */}
      <p className="post-description-overlay">{post.description}</p>
    </div>
  );
}

// 3. Main Wrapper Engine component mapping over the dataset array cleanly
export default function TimelineFeed() {
  return (
    <div className="timeline-feed-container">
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}