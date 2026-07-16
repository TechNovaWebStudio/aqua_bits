"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./CommentPop.module.css";

export default function CommentPop({ isOpen = false, onClose, COMMENTS  }) {
  // Safe initialization: guarantee it is an array even if COMMENTS is undefined
  const [comments, setComments] = useState(COMMENTS || []);
  const [inputValue, setInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const commentsBodyRef = useRef(null);

  useEffect(() => {
    if (!isOpen) setIsExpanded(false);
  }, [isOpen]);

  useEffect(() => {
    if (commentsBodyRef.current) {
      commentsBodyRef.current.scrollTop = commentsBodyRef.current.scrollHeight;
    }
  // Safe length check using optional chaining
  }, [comments?.length]);

  const handleHeaderClick = (e) => {
    if (e.target.closest(`.${styles.closeCommentsBtn}`)) return;
    if (window.innerWidth <= 768) {
      setIsExpanded((prev) => !prev);
    }
  };

  const handleLikeComment = (commentId, isReply = false, parentId = null) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (!isReply && comment.id === commentId) {
          return {
            ...comment,
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? (comment.likes || 1) - 1 : (comment.likes || 0) + 1,
          };
        } else if (isReply && comment.id === parentId) {
          return {
            ...comment,
            replies: (comment.replies || []).map((reply) =>
              reply.id === commentId
                ? {
                    ...reply,
                    isLiked: !reply.isLiked,
                    likes: reply.isLiked ? (reply.likes || 1) - 1 : (reply.likes || 0) + 1,
                  }
                : reply
            ),
          };
        }
        return comment;
      })
    );
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newComment = {
      id: Date.now(),
      author: "viewer_user",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      avatarColor: "#a7f3d0",
      avatarTextColor: "#065f46",
      text: inputValue,
      time: "1s",
      likes: 0,
      isLiked: false,
      replies: [],
      isNew: true,
    };

    setComments((prev) => [...(prev || []), newComment]);
    setInputValue("");
  };

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  return (
    <div className={`${styles.commentsPanel} ${!isOpen ? styles.hidden : ""} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.commentsHeader} onClick={handleHeaderClick}>
        <div className={styles.mobileDragHandle} />
        <h3>Comments</h3>
        <button type="button" className={styles.closeCommentsBtn} onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className={styles.commentsBody} ref={commentsBodyRef}>
        {/* Safely map over comments */}
        {comments?.map((comment) => (
          <div key={comment.id} className={styles.commentContainerNode}>
            <div className={styles.commentNode} style={comment.isNew ? { animation: "fadeIn 0.3s ease-out forwards" } : {}}>
              
              {/* Parent Comment Avatar System */}
              {comment.avatarUrl ? (
                <img src={comment.avatarUrl} alt={comment.author || "User"} className={styles.commentAvatarImage} />
              ) : (
                <div className={styles.commentAvatar} style={{ backgroundColor: comment.avatarColor || "#ccc", color: comment.avatarTextColor || "#1e293b" }}>
                  {getInitial(comment.author)}
                </div>
              )}
              
              <div className={styles.commentContentBlock}>
                <div className={styles.commentUserMeta}>
                  <span className={styles.commentAuthor}>{comment.author || "Anonymous"}</span>
                  <p className={styles.commentText}>{comment.text}</p>
                </div>
                <div className={styles.commentActionsFooter}>
                  <span>{comment.time || "Just now"}</span>
                  <span style={{ fontWeight: 600, cursor: "pointer" }}>Reply</span>
                </div>
              </div>
              <div className={`${styles.commentLikeAside} ${comment.isLiked ? styles.liked : ""}`} onClick={() => handleLikeComment(comment.id)}>
                <i className={comment.isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                <span>{comment.likes || 0}</span>
              </div>
            </div>

            {/* Safely check for replies before mapping */}
            {comment.replies?.length > 0 && (
              <div className={styles.commentRepliesContainer}>
                {comment.replies.map((reply) => (
                  <div key={reply.id} className={styles.commentNode}>
                    
                    {/* Reply Comment Avatar System */}
                    {reply.avatarUrl ? (
                      <img src={reply.avatarUrl} alt={reply.author || "User"} className={styles.commentAvatarImage} />
                    ) : (
                      <div className={styles.commentAvatar} style={{ backgroundColor: reply.avatarColor || "#ccc", color: reply.avatarTextColor || "#1e293b" }}>
                        {getInitial(reply.author)}
                      </div>
                    )}
                    
                    <div className={styles.commentContentBlock}>
                      <div className={styles.commentUserMeta}>
                        <span className={styles.commentAuthor}>{reply.author || "Anonymous"}</span>
                        <p className={styles.commentText}>
                          {reply.text?.startsWith("@") ? (
                            <>
                              <span style={{ color: "#10ac84", marginRight: "4px", fontWeight: "600" }}>
                                {reply.text.split(" ")[0]}
                              </span>
                              {reply.text.substring(reply.text.split(" ")[0].length)}
                            </>
                          ) : (
                            reply.text
                          )}
                        </p>
                      </div>
                      <div className={styles.commentActionsFooter}>
                        <span>{reply.time || "Just now"}</span>
                        <span style={{ fontWeight: 600, cursor: "pointer" }}>Reply</span>
                      </div>
                    </div>
                    <div className={`${styles.commentLikeAside} ${reply.isLiked ? styles.liked : ""}`} onClick={() => handleLikeComment(reply.id, true, comment.id)}>
                      <i className={reply.isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                      <span>{reply.likes || 0}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.commentsFooter}>
        <form onSubmit={handleSubmitComment}>
          <div className={styles.commentInputWrapper}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a comment..."
              autoComplete="off"
            />
            <button 
              type="submit" 
              className={styles.submitCommentBtn}
              style={inputValue.trim() ? { opacity: 1, pointerEvents: "auto" } : {}}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}