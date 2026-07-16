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
    onBack,
    onNext,
    petDetails,
    sizes = ['Pair', 'Piece', 'Trio'],
    postDescription
}) {
    // Local state to manage the chosen tier size
    const [size, setSize] = useState(sizes[0] || '');

    // Dynamically retrieve shipping methods from petDetails, falling back safely if undefined
    const shippingMethods = petDetails?.shippingMethods || [];

    // Initialize state using the dynamic methods array safely
    const [selectedMethod, setSelectedMethod] = useState(null);

    // Set default shipping method once dynamic data is available
    useEffect(() => {
        if (shippingMethods.length > 0 && !selectedMethod) {
            setSelectedMethod(shippingMethods[0]);
        }
    }, [shippingMethods.length]); // Track array length changes safely instead of checking the object itself

    // Keep parent streams synchronized
    useEffect(() => {
        const targetName = petDetails?.petName;
        const targetPrice = petDetails?.price;

        if (targetName && targetName !== productName && typeof setProductName === "function") {
            setProductName(targetName);
        }
        if (targetPrice && Number(targetPrice) !== productPrice && typeof setProductPrice === "function") {
            setProductPrice(Number(targetPrice));
        }
    }, [petDetails, productName, productPrice, setProductName, setProductPrice]);

    const handleQuantityChange = (updater) => {
        if (typeof setProductQuantity === "function") {
            setProductQuantity(updater);
        }
    };

    const handleBuyNow = () => {
        if (typeof onNext === "function") {
            onNext({
                name: productName || petDetails?.petName,
                price: productPrice || petDetails?.price,
                quantity: productQuantity,
                shipping: selectedMethod,
                size: size, // Include selected size tier in submit hook payload
                details: petDetails
            });
        }
    };

    const petBaseRate = Number(productPrice || petDetails?.price || 0);
    // Explicitly parse the boolean value safely
    const isShippingAvailable = petDetails?.shippingAvailable === true;
    const cumulativeShippingCost = (isShippingAvailable && selectedMethod) ? Number(selectedMethod.amount) : 0;
    const finalValuation = (petBaseRate * productQuantity) + cumulativeShippingCost;

    return (
        <div className={styles.productContainer}>
            {/* Categorization & Badges */}
            <div className={styles.badgeRow}>
                {onBack && (
                    <button type="button" className={styles.backButton} onClick={onBack}>
                        ← Back to Listings
                    </button>
                )}
                <span className={styles.inStockBadge}>Breeder</span>
            </div>

            {/* Title Identity */}
            <h1 className={styles.productName}>{productName || petDetails?.petName}</h1>

            {/* Micro Health Banner */}
            <div className={styles.healthStrip}>
                <span className={styles.healthText}> {postDescription}</span>
                {/* <span className={styles.healthDot} />
                <span className={styles.healthText}><strong>Health Status:</strong> {petDetails?.healthStatus}</span> */}
            </div>


            {/* Core Traits Specifications Grid */}
            <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                    <span className={styles.featureLabel}>Age :-</span>
                    <span className={styles.featureValue}>{petDetails?.age}</span>
                </div>
                <div className={styles.featureCard}>
                    <span className={styles.featureLabel}>Quality :-</span>
                    <span className={styles.featureValue}>Good</span>
                </div>
                <div className={styles.featureCard}>
                    <span className={styles.featureLabel}>Minimum QUT :-</span>
                    <span className={styles.featureValue}>{petDetails?.basicQuantity}   </span>
                </div>
                <div className={styles.featureCard}>
                    <span className={styles.featureLabel}>Total Stock :-</span>
                    <span className={styles.featureValue}>{petDetails?.totalStock} left</span>
                </div>
            </div>

            <div>
                <span className={styles.sectionLabel}>Select Unit</span>
                <div className={styles.optionSection}>
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
            </div>

            {/* Financial Frame Card */}
            <div className={styles.priceCard}>
                <div className={styles.priceInfo}>
                    <span className={styles.currentPrice}>₹{petBaseRate.toLocaleString('en-IN')}</span>
                    <span className={styles.unitType}>per {petDetails?.basicQuantity || "unit"}</span>
                </div>
            </div>

            {/* Interactive Transit Allocation */}
            <div className={styles.shippingSection}>
                <span className={styles.sectionLabel}>Transit Assignment</span>

                {!isShippingAvailable ? (
                    <div className={styles.disabledShippingBox}>
                        🏡 Delivery Unavailable — Private Regional Pickup Only
                    </div>
                ) : (
                    <div className={styles.formBlockGroup}>
                        <h3 className={styles.formBlockTitle}>
                            <i className="fa-solid fa-truck-fast" style={{ color: '#0095f6' }}></i> Shipping Method
                        </h3>

                        {shippingMethods.map((method, index) => {
                            const isSelected = selectedMethod?.shippingMethod === method.shippingMethod;
                            return (
                                <div
                                    key={index}
                                    className={`${styles.shippingSpeedOption} ${isSelected ? styles.selected : ''}`}
                                    onClick={() => setSelectedMethod(method)}
                                >
                                    <div className={styles.speedLabelLeft}>
                                        <div className={`${styles.speedRadioBullet} ${isSelected ? styles.radioActive : ''}`}></div>
                                        <div className={styles.speedText}>
                                            <h4>{method.shippingMethod}</h4>
                                            <p>Reliable logistics transit for your new companion.</p>
                                        </div>
                                    </div>
                                    <div className={styles.speedCostRight}>
                                        ₹{Number(method.amount).toLocaleString('en-IN')}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Core Action UI Row */}
            <div className={styles.actionRow}>
                <div className={styles.qtyStepper}>
                    <button
                        type="button"
                        onClick={() => handleQuantityChange(p => Math.max(petDetails?.minimumOrderQuantity || 1, p - 1))}
                    >
                        −
                    </button>
                    <span>{productQuantity}</span>
                    <button
                        type="button"
                        onClick={() => handleQuantityChange(p => Math.min(petDetails?.totalStock || 99, p + 1))}
                    >
                        +
                    </button>
                </div>

                <button type="button" className={styles.buyNowBtn} onClick={handleBuyNow}>
                    Proceed to Delivery
                </button>


            </div>

            <hr className={styles.divider} />

            {/* Cost Ledger Summary Box */}
            <div className={styles.summaryBox}>
                <div className={styles.summaryLine}>
                    <span>Base Value ({productQuantity} × item):</span>
                    <strong>₹{(petBaseRate * productQuantity).toLocaleString('en-IN')}</strong>
                </div>
                <div className={styles.summaryLine}>
                    <span>Logistics Premium:</span>
                    <strong>₹{cumulativeShippingCost.toLocaleString('en-IN')}</strong>
                </div>
                <div className={styles.totalLine}>
                    <span>Total Valuation:</span>
                    <span className={styles.totalPrice}>₹{finalValuation.toLocaleString('en-IN')}</span>
                </div>
            </div>
        </div>
    );
}