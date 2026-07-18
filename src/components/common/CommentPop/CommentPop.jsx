"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./CommentPop.module.css";

export default function CommentPop({ isOpen = false, onClose, COMMENTS }) {
  const [comments, setComments] = useState(COMMENTS || []);
  const [inputValue, setInputValue] = useState("");
  const [panelState, setPanelState] = useState("peek"); // "peek" (65vh) or "expanded" (94vh)
  const [replyTarget, setReplyTarget] = useState(null); 

  // Drag Gesture States for Mobile
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragCurrentY = useRef(0);
  const startTime = useRef(0);
  const panelRef = useRef(null);

  const commentsBodyRef = useRef(null);
  const inputRef = useRef(null);

  // My Personal Viewer Identity Meta
  const myAvatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80";

  useEffect(() => {
    if (!isOpen) {
      setPanelState("peek");
      setReplyTarget(null);
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (commentsBodyRef.current && isOpen) {
      setTimeout(() => {
        if (commentsBodyRef.current) {
          commentsBodyRef.current.scrollTo({
            top: commentsBodyRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 80);
    }
  }, [comments?.length, isOpen]);

  // Dynamically auto-scale input field height shifts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 100)}px`;
    }
  }, [inputValue]);

  // Mobile Drag Gesture Handlers
  const handleTouchStart = (e) => {
    if (!e.target.closest(`.${styles.commentsHeader}`) && !e.target.closest(`.${styles.mobileDragHandle}`)) return;
    
    setIsDragging(true);
    dragStartY.current = e.touches[0].clientY;
    dragCurrentY.current = e.touches[0].clientY;
    startTime.current = performance.now();
    
    if (panelRef.current) {
      panelRef.current.style.transition = "none";
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    dragCurrentY.current = e.touches[0].clientY;
    const deltaY = dragCurrentY.current - dragStartY.current;

    if (panelRef.current) {
      panelRef.current.style.transform = `translateY(${deltaY}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaY = dragCurrentY.current - dragStartY.current;
    const elapsedTime = performance.now() - startTime.current;
    const velocity = Math.abs(deltaY) / elapsedTime;

    if (panelRef.current) {
      panelRef.current.style.transition = "";
      panelRef.current.style.transform = "";
    }

    if (velocity > 0.3 || Math.abs(deltaY) > 80) {
      if (deltaY > 0) {
        if (panelState === "expanded") {
          setPanelState("peek");
        } else {
          onClose();
        }
      } else {
        setPanelState("expanded");
      }
    }
  };

  const togglePanelStateDesktopMobile = (e) => {
    if (e.target.closest(`.${styles.closeCommentsBtn}`)) return;
    if (window.innerWidth <= 768) {
      setPanelState((prev) => (prev === "peek" ? "expanded" : "peek"));
    }
  };

  const initiateReply = (parentComment, authorName) => {
    setReplyTarget({ parentId: parentComment.id, author: authorName });
    setInputValue(`@${authorName} `);
    if (inputRef.current) inputRef.current.focus();
  };

  const cancelReply = () => {
    setReplyTarget(null);
    setInputValue("");
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const cleanText = inputValue.trim();
    const isActiveReply = replyTarget && cleanText.startsWith(`@${replyTarget.author}`);

    if (isActiveReply) {
      setComments((prev) =>
        prev.map((c) => {
          if (c.id === replyTarget.parentId) {
            return {
              ...c,
              replies: [
                ...(c.replies || []),
                {
                  id: Date.now(),
                  author: "viewer_user",
                  avatarUrl: myAvatarUrl,
                  text: cleanText,
                  time: "1s",
                  likes: 0,
                  isLiked: false,
                },
              ],
            };
          }
          return c;
        })
      );
    } else {
      const newComment = {
        id: Date.now(),
        author: "viewer_user",
        avatarUrl: myAvatarUrl,
        text: cleanText,
        time: "1s",
        likes: 0,
        isLiked: false,
        replies: [],
        isNew: true,
      };
      setComments((prev) => [...(prev || []), newComment]);
    }

    setInputValue("");
    setReplyTarget(null);
  };

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  const panelClassName = `
    ${styles.commentsPanel} 
    ${!isOpen ? styles.hidden : ""} 
    ${panelState === "expanded" ? styles.expanded : styles.peek}
  `.trim();

  return (
    <div 
      ref={panelRef}
      className={panelClassName}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.commentsHeader} onClick={togglePanelStateDesktopMobile}>
        <div className={styles.mobileDragHandle} />
        <h3>Comments</h3>
        <button type="button" className={styles.closeCommentsBtn} onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className={styles.commentsBody} ref={commentsBodyRef}>
        {comments?.map((comment) => (
          <div key={comment.id} className={styles.commentContainerNode}>
            <div className={styles.commentNode} style={comment.isNew ? { animation: `${styles.fadeInUpComment} 0.35s cubic-bezier(0.215, 0.61, 0.355, 1) forwards` } : {}}>
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
                  <span onClick={() => initiateReply(comment, comment.author)} style={{ fontWeight: 600 }}>Reply</span>
                </div>
              </div>
              <div className={`${styles.commentLikeAside} ${comment.isLiked ? styles.liked : ""}`} onClick={() => handleLikeComment(comment.id)}>
                <i className={comment.isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                <span>{comment.likes || 0}</span>
              </div>
            </div>

            {comment.replies?.length > 0 && (
              <div className={styles.commentRepliesContainer}>
                {comment.replies.map((reply) => (
                  <div key={reply.id} className={styles.commentNode}>
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
                              <span className={styles.mentionTag}>
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
                        <span onClick={() => initiateReply(comment, reply.author)} style={{ fontWeight: 600 }}>Reply</span>
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
        {replyTarget && (
          <div className={styles.replyIndicatorBar}>
            <span>Replying to @{replyTarget.author}</span>
            <button type="button" onClick={cancelReply} className={styles.cancelReplyBtn}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}
        <form onSubmit={handleSubmitComment}>
          <div className={styles.commentInputWrapper}>
            <img src={myAvatarUrl} alt="My Identity Avatar" className={styles.inputInnerAvatar} />
            <textarea
              ref={inputRef}
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a comment..."
              autoComplete="off"
              className={styles.commentTextarea}
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