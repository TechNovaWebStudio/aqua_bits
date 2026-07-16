"use client";

import styles from "./PostInfo.module.css";
import CommentPop from "@/components/common/CommentPop/CommentPop";

export default function PostInfo({
    productName,
    liked,
    setLiked,
    likeCount,
    setLikeCount,
    isCommentsOpen,
    setIsCommentsOpen,
    shareCopied,
    handleShare,
    likedUsers,
    onNext
}) {
    return (
        <div className={styles.postViewWrapper}>
            <div className={styles.postHeaderIdentity}>
                <div className={styles.identityAvatar}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMDldL5dZxdLVQbbJ3n9GQsdSKIHyv6oNmHFnsyKNrg&s=10' alt='User Profile' />
                </div>
                <div className={styles.identityMetaText}>
                    <h4>Betta Cattery & Friends</h4>
                    <span>@betta_shop • Verified Creator</span>
                </div>
                <button type="button" className={styles.viewProfileBtn} onClick={() => alert("Redirecting to profile...")}>
                    View Profile
                </button>
            </div>

            <h1 className={styles.postTitle}>{productName}</h1>
            
            <div className={styles.tagContainer}>
                <span className={styles.postTag}>#Fish</span>
                <span className={styles.postTag}>#Betta</span>
            </div>

            <div className={styles.postDescription}>
                <p>Hand-crafted from sustainable natural fibers and ultra-soft hypoallergenic plush textiles. Features reinforced baseboards ensuring completely safe vertical climbs for your companions.</p>
            </div>

            <div className={styles.likedUsersSection}>
                <div className={styles.avatarOverlapGroup}>
                    {likedUsers.map((user, idx) => (
                        <img key={idx} src={user.avatar} alt={user.name} className={styles.likedUserAvatar} />
                    ))}
                </div>
                <span className={styles.likedUsersText}>
                    Liked by <strong>{likedUsers[0].name}</strong>, <strong>{likedUsers[1].name}</strong> and <strong>{likeCount - 2} others</strong>
                </span>
            </div>

            <div className={styles.socialActionsBar}>
                <button type="button" className={`${styles.actionBtn} ${liked ? styles.actionLiked : ""}`} onClick={() => { setLiked(!liked); setLikeCount(prev => liked ? prev - 1 : prev + 1); }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    <span>Like</span>
                </button>
                <button type="button" className={`${styles.actionBtn} ${isCommentsOpen ? styles.actionActive : ""}`} onClick={() => setIsCommentsOpen(!isCommentsOpen)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                    <span>Comments</span>
                </button>
                <button type="button" className={styles.actionBtn} onClick={handleShare}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    <span>{shareCopied ? "Link Copied!" : "Share"}</span>
                </button>
            </div>

            {isCommentsOpen && (
                <div className={styles.rightSideCommentWrapper}>
                    <CommentPop COMMENTS={[]}isOpen={isCommentsOpen} onClose={() => setIsCommentsOpen(false)} />
                </div>
            )}

            <div className={styles.purchaseContainer}>
                <button type="button" className={styles.buyNowBtn} onClick={onNext}>
                    Buy Now
                </button>
            </div>
        </div>
    );
}