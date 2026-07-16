"use client";

import { useState, useEffect } from "react";
import styles from "./PetDetails.module.css";
import PostInfo from "./PostInfo";
import ProductInfo from "./ProductInfo";
import AddressInfo from "./AddressInfo";

export default function PetDetails({ post }) {
    console.log("Rendering PetDetails with post data:", post);
    
    // Graceful fallback condition if no matching data object was found
    if (!post) {
        return (
            <div style={{ padding: "2rem", textAlign: "center", color: "#666" }}>
                <h2>Post Not Found</h2>
                <p>The pet detail listing you are looking for does not exist.</p>
            </div>
        );
    }

    // Dynamic Image Gallery: Extracts from post.images or falls back to data inside petDetails array
    const galleryImages = post.images || 
        (Array.isArray(post.petDetails) ? post.petDetails.flatMap(pet => pet.images || []) : []);

    // Gallery Stage States
    const [activeImg, setActiveImg] = useState(galleryImages[0] || "");
    const [activeThumb, setActiveThumb] = useState(0);

    // Sync gallery stages if post payload updates or drops down from props
    useEffect(() => {
        if (galleryImages.length > 0) {
            setActiveImg(galleryImages[0]);
            setActiveThumb(0);
        }
    }, [post]);

    // Social Interaction States populated dynamically
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes || 0);
    const [isCommentsOpen, setIsCommentsOpen] = useState(true);
    const [shareCopied, setShareCopied] = useState(false);

    // Flow Routing Architecture State: 'post', 'product-config', 'address'
    const [currentStep, setCurrentStep] = useState("post");
    
    // Product Configuration Matrix States
    const [productName, setProductName] = useState("Premium Ergonomic Cat Tree & Multi-Level Nest");
    const [productPrice, setProductPrice] = useState(89.00);
    const [productQuantity, setProductQuantity] = useState(1);
    
    // Delivery Destination Coordinates
    const [address, setAddress] = useState({
        fullName: "",
        phone: "",
        street: "",
        city: "",
        pincode: ""
    });

    const likedUsers = post.likedBy || [];

    const handleThumbClick = (url, index) => {
        setActiveImg(url);
        setActiveThumb(index);
    };

    const handleShare = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setShareCopied(true);
            setTimeout(() => setShareCopied(false), 2000);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({ ...prev, [name]: value }));
    };

    const handleConfirmOrder = (e) => {
        e.preventDefault();
        
        if (!address.fullName || !address.phone || !address.street || !address.city) {
            alert("Please accurately complete all delivery fields before executing confirmation.");
            return;
        }

        const targetWhatsAppNumber = "9074906624";
        const totalAmount = (productPrice * productQuantity).toFixed(2);
        
        const textMessage = `🛍️ *NEW ORDER REQUEST* 🛍️\n\n` +
            `📦 *Product Details:*\n` +
            `• Name: ${productName}\n` +
            `• Price: $${productPrice}\n` +
            `• Qty: ${productQuantity}\n` +
            `• Total Amount: $${totalAmount}\n\n` +
            `📍 *Delivery Shipping Address:*\n` +
            `• Name: ${address.fullName}\n` +
            `• Phone: ${address.phone}\n` +
            `• Street: ${address.street}\n` +
            `• City: ${address.city}\n` +
            `• Pin Code: ${address.pincode || "N/A"}`;

        const encodedMessage = encodeURIComponent(textMessage);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetWhatsAppNumber}&text=${encodedMessage}`;
        
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className={styles.postPageContainer}>
            {/* LEFT COLUMN: VISUAL GALLERY MODULE */}
            <section className={styles.postGallerySection}>
                <div className={styles.mainStageImage}>
                    {activeImg && <img src={activeImg} alt="Featured Post Visual" />}
                    <div className={styles.liveBadge}>FEATURED POST</div>
                </div>

                <div className={styles.thumbnailsStrip}>
                    {galleryImages.map((url, i) => (
                        <div
                            key={i}
                            className={`${styles.thumbTile} ${activeThumb === i ? styles.active : ""}`}
                            onClick={() => handleThumbClick(url, i)}
                        >
                            <img src={url} alt={`View ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* RIGHT COLUMN: ROUTED SUBSTRUCTURE CONSOLE */}
            <section className={styles.postInfoPanel}>
                {currentStep === "post" && (
                    <PostInfo
                        productName={productName}
                        liked={liked}
                        setLiked={setLiked}
                        likeCount={likeCount}
                        setLikeCount={setLikeCount}
                        isCommentsOpen={isCommentsOpen}
                        setIsCommentsOpen={setIsCommentsOpen}
                        shareCopied={shareCopied}
                        handleShare={handleShare}
                        likedUsers={likedUsers}
                        onNext={() => setCurrentStep("product-config")}
                        postDescription={post.description}
                        username={post.username}
                        userTitle={post.userTitle}
                        avatar={post.avatar}
                        comments={post.comments}
                        shares={post.shares}
                        petDetails={post.petDetails}
                    />
                )}

                {currentStep === "product-config" && (
                    <ProductInfo
                        productName={productName}
                        setProductName={setProductName}
                        productPrice={productPrice}
                        setProductPrice={setProductPrice}
                        productQuantity={productQuantity}
                        setProductQuantity={setProductQuantity}
                        onBack={() => setCurrentStep("post")}
                        onNext={() => setCurrentStep("address")}
                    />
                )}

                {currentStep === "address" && (
                    <AddressInfo
                        address={address}
                        handleInputChange={handleInputChange}
                        handleConfirmOrder={handleConfirmOrder}
                        onBack={() => setCurrentStep("product-config")}
                    />
                )}
            </section>
        </div>
    );
}