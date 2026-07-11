"use client";

import { useState } from "react";
import styles from "./ProductInfo.module.css";

export default function ProductInfo({
    productQuantity = 1,
    setProductQuantity,
    onNext // Triggers the next phase (e.g., checkout/address)
}) {
    // Local state for UI selection options
    const [size, setSize] = useState("Small");
    const [material, setMaterial] = useState("Ceramic");
    const [color, setColor] = useState("Grey");

    const sizes = ["Small", "Large", "Medium"];
    const materials = ["Ceramic", "Plastic", "Wood", "Metal"];
    const colors = [
        { name: "Grey", hex: "#e2e8f0" },
        { name: "Burgundy", hex: "#581c1c" },
        { name: "Green", hex: "#0f766e" },
        { name: "Blue", hex: "#0369a1" },
        { name: "Black", hex: "#111827" }
    ];

    // Safely handles quantity updates even if setProductQuantity isn't passed
    const handleQuantityChange = (updater) => {
        if (typeof setProductQuantity === "function") {
            setProductQuantity(updater);
        }
    };

    // Packages selected variations up to the checkout logic
    const handleBuyNow = () => {
        if (typeof onNext === "function") {
            onNext({
                name: "Monstera deliciosa",
                price: 12.00,
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
            {/* Category & Title */}
            <span className={styles.categoryTag}>Pet Details</span>
            <div className={styles.titleRow}>
                <h1 className={styles.productName}>Monstera deliciosa</h1>
                <span className={styles.inStockBadge}>In Stock</span>
            </div>

            {/* Ratings */}
            <div className={styles.ratingRow}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingText}>4.9 (248 Reviews)</span>
            </div>

            {/* Price section */}
            <div className={styles.priceRow}>
                <span className={styles.currentPrice}>$12.00</span>
                <span className={styles.originalPrice}>$25.00</span>
            </div>

            {/* Description */}
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            {/* Plant Size Options */}
            <div className={styles.optionSection}>
                <label className={styles.optionLabel}>Plant Size</label>
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

            {/* Pot Material Options */}
            <div className={styles.optionSection}>
                <label className={styles.optionLabel}>Pot Material</label>
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

            {/* Pot Color Options */}
            <div className={styles.optionSection}>
                <label className={styles.optionLabel}>Pot Color : <span>{color}</span></label>
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

            {/* Actions Footer */}
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

                {/* Buy Now Button (Fills the remaining horizontal space) */}
                <button type="button" className={styles.buyNowBtn} onClick={handleBuyNow}>
                    Buy Now
                </button>

                {/* Wishlist Heart */}
                <button type="button" className={styles.wishlistBtn} aria-label="Add to wishlist">
                    ♡
                </button>
            </div>

            <hr className={styles.divider} />

            {/* Metadata Footer */}
            <div className={styles.metaData}>
                <div><strong>SKU :</strong> PLTC07654ABC</div>
                <div><strong>Tags :</strong> Indoor Plant, Monstera deliciosa, Plants</div>
                <div className={styles.shareRow}>
                    <strong>Share :</strong> 
                    <span className={styles.shareIcons}> Ⓜ ⓕ ⓣ ⓘ </span>
                </div>
            </div>
        </div>
    );
}