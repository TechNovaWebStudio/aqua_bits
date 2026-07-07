"use client";

import { useState } from "react";
import styles from "./PetDetails.module.css";

export default function PetDetails() {
    // Gallery Management
    const [activeImg, setActiveImg] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNl48QUBFhZYPhdxEckRGXBVw6l2rHc4wsIG8pwrDrpM_W2RCcNhNrz_8W&s=10"
    );
    const [activeThumb, setActiveThumb] = useState(0);

    // Variant States
    const [selectedColor, setSelectedColor] = useState("Warm Oat Cloud");
    const [selectedSize, setSelectedSize] = useState("Standard Eco-Weave");

    // Accordion Expand States
    const [openAccordion, setOpenAccordion] = useState(0);

    // Social Interaction States
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(248);
    const [comments, setComments] = useState([
        { id: 1, user: "cat_lover99", text: "Is this little angel still available for adoption? 😍", time: "2m ago" },
        { id: 2, user: "marcus_v", text: "Sent an inquiry via DM! Ready to pick up this week.", time: "15m ago" }
    ]);
    const [newComment, setNewComment] = useState("");

    const galleryImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNl48QUBFhZYPhdxEckRGXBVw6l2rHc4wsIG8pwrDrpM_W2RCcNhNrz_8W&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiPtNPgAx81ViBxADvVDzZV-azLKT-vVH2-sunSYAZ2QG9Yn-ZmGAPExN&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHJPJctyN9ey-wFI-sZScsZ-2Vb7D9U988lUjdwsVQW98Xc-YuTTKBVY&s=10"
    ];

    const handleThumbClick = (url, index) => {
        setActiveImg(url);
        setActiveThumb(index);
    };

    const handleLikeToggle = () => {
        if (liked) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }
        setLiked(!liked);
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        setComments([
            ...comments,
            {
                id: Date.now(),
                user: "you",
                text: newComment,
                time: "Just now"
            }
        ]);
        setNewComment("");
    };

    return (
        <div className={styles.productPageContainer}>

            {/* LEFT COLUMN: VISUAL GALLERY */}
            <section className={styles.productGallerySection}>
                <div className={styles.mainStageImage}>
                    <img src={activeImg} alt="Featured Live Companion" />
                    <div className={styles.liveBadge}>LIVE SALE</div>
                </div>

                <div className={styles.thumbnailsStrip}>
                    {galleryImages.map((url, i) => (
                        <div
                            key={i}
                            className={`${styles.thumbTile} ${activeThumb === i ? styles.active : ""}`}
                            onClick={() => handleThumbClick(url, i)}
                        >
                            <img src={url} alt={`Thumbnail view ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* RIGHT COLUMN: INFORMATION PANEL */}
            <section className={styles.productInfoPanel}>

                {/* Vendor Identity / Breeder Block */}
                <div className={styles.postHeaderIdentity}>
                    <div className={styles.identityAvatar}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMDldL5dZxdLVQbbJ3n9GQsdSKIHyv6oNmHFnsyKNrg&s=10' alt='Breeder Profile' />
                    </div>

                    <div className={styles.identityMetaText}>
                        <h4>Betta Cattery & Friends</h4>
                        <span>@betta_shop • Verified Breeder</span>
                    </div>

                    {/* Social Counters Action */}
                    <button
                        type="button"
                        className={`${styles.socialLikeBtn} ${liked ? styles.socialLiked : ""}`}
                        onClick={handleLikeToggle}
                        aria-label="Like this pet entry"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span>{likeCount}</span>
                    </button>
                </div>

                <h1 className={styles.productTitle}>Premium Ergonomic Cat Tree & Multi-Level Nest</h1>
                {/* <span className={styles.variantLabel}>
                    Category OF :- <span style={{ color: '#111' }}>Fish</span>
                </span>

                <span className={styles.variantLabel}>
                    SUB Category :- <span style={{ color: '#111' }}>Betta</span>
                </span> */}
                {/* Status Indicator Bar (Replaced Reviews) */}
                <div className={styles.liveStatusRow}>
                    <span className={styles.pulseDot}></span>
                    <span className={styles.liveViewersText}>14 people are viewing this listing right now</span>
                </div>


                <div className={styles.productPriceBracket}>
                    <span className={styles.currentPrice}>$89.00</span>
                    <span className={styles.strikePrice}>$120.00</span>
                    <span className={styles.discountTag}>Special Adoption Offer</span>
                </div>

                {/* Variant Selectors 1: Texture Finish */}
                <div className={styles.variantPickerGroup}>
                    <span className={styles.variantLabel}>
                        Quantity :-  <strong style={{ color: '#111' }}>1 {selectedColor}</strong>
                    </span>
                    <div className={styles.colorOptionsFlex}>
                        <button
                            type="button"
                            className={`${styles.colorDotBtn} ${selectedColor === "Warm Oat Cloud" ? styles.active : ""}`}
                            
                            onClick={() => setSelectedColor("pair")}
                        >
                        pair
                        </button>
                        <button
                            type="button"
                            className={`${styles.colorDotBtn} ${selectedColor === "Midnight Velvet" ? styles.active : ""}`}
                            
                            onClick={() => setSelectedColor("Peace")}
                        > Peace
                        </button>
                        <button
                            type="button"
                            className={`${styles.colorDotBtn} ${selectedColor === "Nordic Birch" ? styles.active : ""}`}
                            
                            onClick={() => setSelectedColor("Trios")}
                        >
                         Trios
                        </button>
                    </div>
                </div>


                {/* Variant Selectors 2: Sizing */}
                <div className={styles.variantPickerGroup}>
                    <span className={styles.variantLabel}>Category & Subcategory :-</span>
                    <div className={styles.sizeOptionsFlex}>
                        <button
                            type="button"
                            className={styles.sizePillBtn}
                            onClick={() => setSelectedSize("Standard Eco-Weave")}
                        >
                            FISH
                        </button>
                        <button
                            type="button"
                            className={styles.sizePillBtn}
                            onClick={() => setSelectedSize("Penthouse XL Tier")}
                        >
                            BETTA
                        </button>
                    </div>
                </div>

                {/* Accordions Feature Panel */}
                <div className={styles.productAccordionsBlock}>
                    <div className={`${styles.infoAccordionCard} ${openAccordion === 0 ? styles.open : ""}`}>
                        <div className={styles.accordionTriggerBar} onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}>
                            <span>Product Details & Materials</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                        <div className={styles.accordionPanelContent}>
                            <div className={styles.accordionPanelInner}>
                                <p>Hand-crafted from sustainable natural fibers and ultra-soft hypoallergenic plush textiles. Features reinforced baseboards ensuring completely safe vertical climbs for your companions.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.infoAccordionCard} ${openAccordion === 1 ? styles.open : ""}`}>
                        <div className={styles.accordionTriggerBar} onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}>
                            <span>Shipping & Safe Pet Travel</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                        <div className={styles.accordionPanelContent}>
                            <div className={styles.accordionPanelInner}>
                                <p>Complimentary flat-rate express logistics automatically handles dispatch coordinates across global targets on order thresholds clearing $75 valuation matrix benchmarks.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Purchase Modules */}
                <div className={styles.purchaseActionContainer}>
                    <button type="button" className={`${styles.btnPrimeBuy} ${styles.btnAddToCart}`} onClick={() => alert('Securely reserved in your selection bag.')}>
                        Conform Your order request
                    </button>
                    {/* <button type="button" className={`${styles.btnPrimeBuy} ${styles.btnDirectCheckout}`} onClick={() => alert('Directing straight to safe transport onboarding framework...')}>
                        Instant Adoption Checkout
                    </button> */}
                </div>



                {/* SOCIAL DISCUSSIONS/COMMENTS INTERFACE
                <div className={styles.discussionSection}>
                    <h3 className={styles.discussionHeading}>Live Inquiry Feed</h3>
                    
                    <div className={styles.commentsContainer}>
                        {comments.map((comment) => (
                            <div key={comment.id} className={styles.commentItem}>
                                <div className={styles.commentUserRow}>
                                    <span className={styles.commentUser}>@{comment.user}</span>
                                    <span className={styles.commentTime}>{comment.time}</span>
                                </div>
                                <p className={styles.commentBodyText}>{comment.text}</p>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleAddComment} className={styles.commentFormRow}>
                        <input 
                            type="text" 
                            className={styles.commentInput} 
                            placeholder="Ask a question or leave a public comment..." 
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button type="submit" className={styles.commentSubmitBtn}>Send</button>
                    </form>
                </div> */}

            </section>
        </div>
    );
}