"use client";

import { useState, useEffect } from "react";
import styles from "./ProductInfo.module.css";

export default function ProductInfo({
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    productQuantity = 1,
    setProductQuantity,
    onBack, // Allows navigating back to the 'post' step
    onNext,  // Triggers the next phase (e.g., checkout/address)
    petDetails = [] // Passed down from parent post object
}) {
    // Safely extract the primary item info from incoming dynamic database item rows
    const fallbackItem = petDetails && petDetails[0] ? petDetails[0] : {};
    
    const displayCategory = fallbackItem.category || "Pet Accessory";
    const initialDescription = fallbackItem.description || 
        "Configure your listing modifications below. Adjust quantity values, dimensional frameworks, and finish preferences prior to confirmation.";

    // Sync state values with parent dynamically if the props change downstream
    useEffect(() => {
        if (fallbackItem.name && fallbackItem.name !== productName) {
            setProductName(fallbackItem.name);
        }
        if (fallbackItem.price && fallbackItem.price !== productPrice) {
            setProductPrice(Number(fallbackItem.price));
        }
    }, [fallbackItem, setProductName, setProductPrice]);

    // Dynamic Option arrays derived from database info or safe defaults if not provided
    const sizes = fallbackItem.availableSizes || ["Small", "Medium", "Large"];
    const materials = fallbackItem.availableMaterials || ["Premium Blend", "Eco-Fiber", "Natural Wood"];
    const colors = fallbackItem.availableColors || [
        { name: "Grey", hex: "#e2e8f0" },
        { name: "Burgundy", hex: "#581c1c" },
        { name: "Green", hex: "#0f766e" },
        { name: "Blue", hex: "#0369a1" },
        { name: "Black", hex: "#111827" }
    ];

    // Local configuration selections
    const [size, setSize] = useState(sizes[1] || sizes[0] || "Medium");
    const [material, setMaterial] = useState(materials[0] || "Premium Blend");
    const [color, setColor] = useState(colors[0]?.name || "Grey");

    // Reset local selections gracefully if configuration types alter on post switch
    useEffect(() => {
        if (sizes.length > 0) setSize(sizes[1] || sizes[0]);
        if (materials.length > 0) setMaterial(materials[0]);
        if (colors.length > 0) setColor(colors[0]?.name);
    }, [fallbackItem]);

    // Safely handles quantity updates even if setProductQuantity isn't passed
    const handleQuantityChange = (updater) => {
        if (typeof setProductQuantity === "function") {
            setProductQuantity(updater);
        }
    };

    // Packages selected variations up to the checkout routing logic
    const handleBuyNow = () => {
        if (typeof onNext === "function") {
            onNext({
                name: productName,
                price: productPrice,
                quantity: productQuantity,
                attributes: {
                    size,
                    material,
                    color
                }
            });
        }
    };

    return (
        <div className={styles.productContainer}>
            {/* Navigation Return Button */}
            {onBack && (
                <button type="button" className={styles.backButton} onClick={onBack}>
                    ← Back to Post Info
                </button>
            )}

            {/* Category & Title */}
            <span className={styles.categoryTag}>{displayCategory}</span>
            <div className={styles.titleRow}>
                <h1 className={styles.productName}>{productName}</h1>
                <span className={styles.inStockBadge}>
                    {fallbackItem.status || "Available"}
                </span>
            </div>

            {/* Ratings */}
            <div className={styles.ratingRow}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingText}>
                    {fallbackItem.rating || "5.0"} ({fallbackItem.reviewsCount || "Custom Order"})
                </span>
            </div>

            {/* Dynamic Price section */}
            <div className={styles.priceRow}>
                <span className={styles.currentPrice}>${Number(productPrice).toFixed(2)}</span>
                {fallbackItem.originalPrice && (
                    <span className={styles.originalPrice}>${Number(fallbackItem.originalPrice).toFixed(2)}</span>
                )}
            </div>

            {/* Description */}
            <p className={styles.description}>{initialDescription}</p>

            {/* Size Options */}
            {sizes.length > 0 && (
                <div className={styles.optionSection}>
                    <label className={styles.optionLabel}>Size Tier</label>
                    <div className={styles.chipGroup}>
                        {sizes.map((s) => (
                            <button
                                key={s}
                                type="button"
                                className={`${styles.chip} ${size === s ? styles.activeChip : ""}`}
                                onClick={() => setSize(s)}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Material Options */}
            {materials.length > 0 && (
                <div className={styles.optionSection}>
                    <label className={styles.optionLabel}>Material Selection</label>
                    <div className={styles.chipGroup}>
                        {materials.map((m) => (
                            <button
                                key={m}
                                type="button"
                                className={`${styles.chip} ${material === m ? styles.activeChip : ""}`}
                                onClick={() => setMaterial(m)}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Color Options */}
            {colors.length > 0 && (
                <div className={styles.optionSection}>
                    <label className={styles.optionLabel}>Color Palette: <span>{color}</span></label>
                    <div className={styles.colorGroup}>
                        {colors.map((c) => (
                            <button
                                key={c.name}
                                type="button"
                                className={`${styles.colorCircle} ${color === c.name ? styles.activeColor : ""}`}
                                style={{ backgroundColor: c.hex }}
                                onClick={() => setColor(c.name)}
                                title={c.name}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Actions Footer Panel */}
            <div className={styles.actionRow}>
                {/* Quantity Stepper */}
                <div className={styles.qtyStepper}>
                    <button 
                        type="button" 
                        onClick={() => handleQuantityChange(p => Math.max(1, p - 1))}
                    >
                        -
                    </button>
                    <span>{productQuantity}</span>
                    <button 
                        type="button" 
                        onClick={() => handleQuantityChange(p => p + 1)}
                    >
                        +
                    </button>
                </div>

                {/* Buy Now Button */}
                <button type="button" className={styles.buyNowBtn} onClick={handleBuyNow}>
                    Proceed to Delivery
                </button>

                {/* Wishlist Heart Toggle */}
                <button type="button" className={styles.wishlistBtn} aria-label="Add to wishlist">
                    ♡
                </button>
            </div>

            <hr className={styles.divider} />

            {/* Metadata Footer Summary */}
            <div className={styles.metaData}>
                <div><strong>Base Item:</strong> {productName}</div>
                <div><strong>SKU:</strong> {fallbackItem.sku || "N/A"}</div>
                <div><strong>Live Total:</strong> ${(productPrice * productQuantity).toFixed(2)}</div>
                <div className={styles.shareRow}>
                    <strong>Share Configurations :</strong> 
                    <span className={styles.shareIcons}> Ⓜ ⓕ ⓣ ⓘ </span>
                </div>
            </div>
        </div>
    );
}