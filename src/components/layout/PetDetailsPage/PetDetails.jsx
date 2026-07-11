"use client";

import { useState } from "react";
import styles from "./PetDetails.module.css";
import PostInfo from "./PostInfo";
import ProductInfo from "./ProductInfo";
import AddressInfo from "./AddressInfo";

export default function PetDetails() {
    // Gallery States
    const [activeImg, setActiveImg] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNl48QUBFhZYPhdxEckRGXBVw6l2rHc4wsIG8pwrDrpM_W2RCcNhNrz_8W&s=10"
    );
    const [activeThumb, setActiveThumb] = useState(0);

    // Social Interaction States
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(248);
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

    const galleryImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNl48QUBFhZYPhdxEckRGXBVw6l2rHc4wsIG8pwrDrpM_W2RCcNhNrz_8W&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiPtNPgAx81ViBxADvVDzZV-azLKT-vVH2-sunSYAZ2QG9Yn-ZmGAPExN&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHJPJctyN9ey-wFI-sZScsZ-2Vb7D9U988lUjdwsVQW98Xc-YuTTKBVY&s=10"
    ];

    const likedUsers = [
        { name: "alex_j", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" },
        { name: "sam_dev", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" },
        { name: "linda.k", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" }
    ];

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
                    <img src={activeImg} alt="Featured Post Visual" />
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