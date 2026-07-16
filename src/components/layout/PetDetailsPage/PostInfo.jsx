"use client";

import styles from "./PostInfo.module.css";
import CommentPop from "@/components/common/CommentPop/CommentPop";

// Helper function to format counts (e.g., 4 -> "04", 1200 -> "1.2k")
const formatCount = (num) => {
    const val = Number(num) || 0;
    if (val < 10) {
        return val.toString().padStart(2, "0");
    }
    if (val < 1000) {
        return val.toString();
    }
    if (val >= 1000000) {
        return (val / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
    }
    if (val >= 1000) {
        return (val / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return val.toString();
};

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
    likedUsers = [],
    onNext,
    postDescription,
    username,
    userTitle,
    avatar,
    comments = [],
    shares,
    petDetails
}) {
    const firstLikerName = likedUsers[0]?.name || "Someone";
    const secondLikerName = likedUsers[1]?.name || "Another User";
    const anonymousOthersCount = Math.max(0, likeCount - likedUsers.length);

    return (
        <div className={styles.postViewWrapper}>
            {/* POST HEADER: IDENTITY PLATFORM INFO */}
            <div className={styles.postHeaderIdentity}>
                <div className={styles.identityAvatar}>
                    <img 
                        src={avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMDldL5dZxdLVQbbJ3n9GQsdSKIHyv6oNmHFnsyKNrg&s=10'} 
                        alt={`${username || 'user'}'s profile picture`} 
                    />
                </div>
                <div className={styles.identityMetaText}>
                    <h4>{userTitle || "Content Creator"}</h4>
                    <span>@{username || "anonymous"} </span>
                </div>
                <button 
                    type="button" 
                    className={styles.viewProfileBtn} 
                    onClick={() => alert("Redirecting to profile...")}
                >
                    View Profile
                </button>
            </div>

            {/* INTERACTION DYNAMIC TITLE */}
            <h1 className={styles.postTitle}>{productName}</h1>

            {/* POST CONTENT METADATA TAGS */}
            {(petDetails?.catogerys?.qut || petDetails?.catogerys?.subQut) && (
                <div className={styles.tagContainer}>
                    {petDetails?.catogerys?.qut && <span className={styles.postTag}>#{petDetails.catogerys.qut}</span>}
                    {petDetails?.catogerys?.subQut && <span className={styles.postTag}>#{petDetails.catogerys.subQut}</span>}
                </div>
            )}

            {/* DYNAMIC DESCRIPTION WINDOW */}
            <div className={styles.postDescription}>
                <p>{postDescription || "No description provided for this listing."}</p>
            </div>

            {/* CONDITIONAL COMPACT LIKED USERS METRIC BLOCK */}
            {likedUsers.length > 0 && (
                <div className={styles.likedUsersSection}>
                    <div className={styles.avatarOverlapGroup}>
                        {likedUsers.slice(0, 3).map((user, idx) => (
                            <img key={idx} src={user.avatar} alt={user.name} className={styles.likedUserAvatar} />
                        ))}
                    </div>
                    <span className={styles.likedUsersText}>
                        {likedUsers.length >= 2 ? (
                            <>Liked by <strong>{firstLikerName}</strong>, <strong>{secondLikerName}</strong> and <strong>{anonymousOthersCount > 0 ? `${formatCount(anonymousOthersCount)} others` : "others"}</strong></>
                        ) : (
                            <>Liked by <strong>{firstLikerName}</strong></>
                        )}
                    </span>
                </div>
            )}

            {/* ACTION INTERACTION CONSOLE BAR */}
            <div className={styles.socialActionsBar}>
                <button 
                    type="button" 
                    className={`${styles.actionBtn} ${liked ? styles.actionLiked : ""}`} 
                    onClick={() => { 
                        setLiked(!liked); 
                        setLikeCount(prev => liked ? prev - 1 : prev + 1); 
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span className={styles.btnLabel}>Likes</span>
                    <span className={styles.btnCount}>{formatCount(likeCount)}</span>
                </button>

                <button 
                    type="button" 
                    className={`${styles.actionBtn} ${isCommentsOpen ? styles.actionActive : ""}`} 
                    onClick={() => setIsCommentsOpen(!isCommentsOpen)}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span className={styles.btnLabel}>Comments</span>
                    <span className={styles.btnCount}>({formatCount(comments.length)})</span>
                </button>

                <button type="button" className={styles.actionBtn} onClick={handleShare}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                    <span className={styles.btnLabel}>{shareCopied ? "Link Copied!" : "Share"}</span>
                    {!shareCopied && <span className={styles.btnCount}>({formatCount(shares)})</span>}
                </button>
            </div>

            {/* RENDER COMMENTS POP PANEL MODULE */}
            {isCommentsOpen && (
                <div className={styles.rightSideCommentWrapper}>
                    <CommentPop 
                        COMMENTS={comments} 
                        isOpen={isCommentsOpen} 
                        onClose={() => setIsCommentsOpen(false)} 
                    />
                </div>
            )}

            {/* ROUTING INITIATOR BAR CONTROLLER */}
            <div className={styles.purchaseContainer}>
                <button type="button" className={styles.buyNowBtn} onClick={onNext}>
                    Buy Now
                </button>
            </div>
        </div>
    );
}