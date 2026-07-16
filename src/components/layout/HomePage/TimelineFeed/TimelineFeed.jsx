"use client";

import { useState } from "react";
import "./TimelineFeed.css";
import { useRouter } from "next/navigation";
import CommentPop from "@/components/common/CommentPop/CommentPop";
import { POSTS_DATA } from "../../../../../public/data";

function PostCard({ post }) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  // Safely extract numeric likes
  const initialLikesVal = typeof post.initialLikes === "number" ? post.initialLikes : 0;
  const [likesCount, setLikesCount] = useState(initialLikesVal);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  // Touch handlers for mobile sliders
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
      setLikesCount(initialLikesVal);
    } else {
      setLiked(true);
      setLikesCount(parseFloat((initialLikesVal + 0.1).toFixed(1)));
    }
  };

  const timeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);

    const seconds = Math.floor((now - past) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "min", seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);

      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);

      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  };

  // Safely get a primitive value for likes display text
  const renderLikesDisplay = () => {
    if (typeof post.likes === "object" && post.likes !== null) {
      return post.likes.user || "Someone";
    }
    return post.likes;
  };

  // Format numbers to 1K, 10K, 100K, 1M, etc.
  const formatCount = (num) => {
    if (!num || isNaN(num)) return "0";
    const numericValue = typeof num === "string" ? parseFloat(num) : num;

    if (numericValue >= 1000000) {
      return (numericValue / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (numericValue >= 1000) {
      return (numericValue / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return numericValue.toString();
  };

  // FIX: Safely calculate comment length since post.comments is an array of objects
  const commentCount = Array.isArray(post.comments) ? post.comments.length : (post.comments || 0);

  // Safely track share counts if present in data, otherwise default to 0
  const shareCount = post.shares || 0;

  return (
    <div className="timeline-feed-card">
      {/* 1. Header identity block */}
      <div className="post-header-identity">
        <div className="identity-avatar">
          <img src={post.avatar} alt={post.username} />
        </div>
        <div className="identity-meta-text">
          <h4>{post.username}</h4>
          <span>{timeAgo(post.uploadTime)}</span>
        </div>
      </div>

      {/* 2. Slider view track */}
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
          {post.images?.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Viewport view ${index + 1}`}
              className="slider-image"
            />
          ))}
        </div>

        <div className="viewport-overlay-bottom">
          <div className="slider-dots-container">
            {post.images?.map((_, index) => (
              <span
                key={index}
                className={`slider-dot ${currentImageIndex === index ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Post interactions toolbar panel */}
      <div className="post-actions-panel">
        <div className="actions-group-left">
          <button className={`action-button-trigger ${liked ? "user-liked-active" : ""}`} onClick={toggleLike}>
            <i className={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
            <span>{formatCount(typeof renderLikesDisplay() === 'string' ? 1000 : renderLikesDisplay())}</span>
          </button>

          {/* FIX APPLIED HERE: rendering commentCount instead of post.comments */}
          <button className="action-button-trigger" onClick={() => setIsCommentsOpen(true)}>
            <i className="fa-regular fa-comment"></i>
            <span>{formatCount(commentCount)}</span>
          </button>

          {/* Added Share Action Button */}
          <button className="action-button-trigger">
            <i className="fa-regular fa-share-from-square"></i>
            <span>{formatCount(shareCount)}</span>
          </button>
        </div>
        <button className="action-button-buynow" onClick={() => router.push(`/pet-details/${post.id}`)}>

          View Details
        </button>
      </div>

      {/* 4. Social statistics counter display summary */}
      <div className="liked-people-row">
        <div className="avatar-overlap-group">
          {post.likedBy?.map((avatar, idx) => (
            <img key={avatar.id || idx} src={avatar.avatar} alt="Likers icon profile" className="overlap-avatar" />
          ))}
        </div>
        <p className="liked-text-summary">
          Liked by <strong>{renderLikesDisplay()}</strong> and <strong>{formatCount(likesCount * 1000)} others</strong>
        </p>
      </div>

      {/* 5. Content text block context description details */}
      <p className="post-description-overlay">{post.description}</p>

      {/* 6. Comment Modal */}
      {isCommentsOpen && (
        <CommentPop COMMENTS={post.comments} isOpen={isCommentsOpen} onClose={() => setIsCommentsOpen(false)} />
      )}
    </div>
  );
}

export default function TimelineFeed() {
  return (
    <div className="timeline-feed-container">
      {POSTS_DATA.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}