'use client';

import React, { useState, useRef } from 'react';
import './UpdateProfile.css'

export default function UpdateProfile() {
    // Multi-step Wizard States
    const [currentStep, setCurrentStep] = useState(1);
    const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
    const [selectedPayout, setSelectedPayout] = useState('Google Pay');

    // Input Field Validation States
    const [errors, setErrors] = useState({});

    // Image Ref & Profile Source States
    const userFileInputRef = useRef(null);
    const merchantFileInputRef = useRef(null);
    const [userPic, setUserPic] = useState(
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    );
    const [merchantPic, setMerchantPic] = useState(
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=300&q=80'
    );

    // Form Field Value States (Needed for manual validation control)
    const [formData, setFormData] = useState({
        userFullTitle: 'Jane Doe',
        userNickName: 'janedoe_merchant',
        userEmail: 'jane.doe@merchantfeed.com',
        userPhone: '+1 (555) 234-5678',
        step1StoreName: '',
        step1StructureType: '',
        step1Category: '',
        step1WebLink: '',
        step2TaxId: '',
        step2Address: '',
        step2OwnerRef: '',
        step2Revenue: '',
        step3SupportEmail: '',
        step3BizPhone: '',
        step3Insta: '',
        step3Fb: ''
    });

    // Track Input Changes & Reset specific field error states dynamically
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: '' }));
        }
    };

    // Avatar Image File Synchronizer
    const handleAvatarChange = (e, setAvatar) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setAvatar(reader.result);
            reader.readAsDataURL(file);
        }
    };

    // Dynamic Multi-Step Validation Logic Rules
    const validateCurrentStep = () => {
        const activeErrors = {};

        if (currentStep === 1) {
            if (!formData.step1StoreName.trim()) activeErrors.step1StoreName = 'Store name is required.';
            if (!formData.step1StructureType) activeErrors.step1StructureType = 'Please select a business entity structure.';
            if (!formData.step1Category.trim()) activeErrors.step1Category = 'Primary target category classification is required.';
        }

        if (currentStep === 2) {
            if (!formData.step2TaxId.trim()) activeErrors.step2TaxId = 'Federal Tax ID / EIN code layer is required.';
            if (!formData.step2Address.trim()) activeErrors.step2Address = 'Registered legal workspace street address is required.';
            if (!formData.step2OwnerRef.trim()) activeErrors.step2OwnerRef = 'National identification document sequence is mandatory.';
            if (!formData.step2Revenue) activeErrors.step2Revenue = 'Please select an estimated distribution gross tier.';
        }

        if (currentStep === 3) {
            if (!formData.step3SupportEmail.trim()) {
                activeErrors.step3SupportEmail = 'Customer helpdesk support email is required.';
            } else if (!/\S+@\S+\.\S+/.test(formData.step3SupportEmail)) {
                activeErrors.step3SupportEmail = 'Please match a legitimate administrative email format structure.';
            }
            if (!formData.step3BizPhone.trim()) activeErrors.step3BizPhone = 'Operations routing business phone string is required.';
            if (!formData.step3Insta.trim()) activeErrors.step3Insta = 'Social brand index placement URL reference is required.';
        }

        setErrors(activeErrors);
        return Object.keys(activeErrors).length === 0;
    };

    const nextStep = (e) => {
        e.preventDefault();
        if (validateCurrentStep()) {
            setCurrentStep((prev) => Math.min(prev + 1, 4));
        }
    };

    const prevStep = () => {
        setErrors({});
        setCurrentStep((prev) => Math.max(prev - 1, 1));

        // 1. Elevate role to admin/breeder in memory
        localStorage.setItem("role", "admin");

        // 2. Alert the sidebar to update dynamically without reloading
        window.dispatchEvent(new Event("local-storage-update"));

        // 3. Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = "/profile";
        }, 2000);
    };

    const handleFinalSubmit = (e) => {
        e.preventDefault();
        setIsOnboardingComplete(true);
        // 1. Elevate role to admin/breeder in memory
        localStorage.setItem("role", "breeder");

        // 2. Alert the sidebar to update dynamically without reloading
        window.dispatchEvent(new Event("local-storage-update"));

        // 3. Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = "/profile";
        }, 2000);
    };

    const stepMeta = {
        1: { title: 'Create Merchant Profile', sub: 'Step 1 of 4: Initialize storefront parameter layers' },
        2: { title: 'Verification Documents', sub: 'Step 2 of 4: Input legal business compliance credentials' },
        3: { title: 'Contact & Social Channels', sub: 'Step 3 of 4: Link store access channels and support endpoints' },
        4: { title: 'Payout Method Setup', sub: 'Step 4 of 4: Choose currency conversion processing gateway' },
    };

    return (
        <div className="portal-wrapper">
            <main className="portal-container">

                {/* LEFT PANEL: USER PERSONAL ACCOUNT */}
                <section className="panel-card">
                    <h3 className="panel-title">User Profile</h3>
                    <p className="panel-subtitle">Manage personal administrative identification access points</p>

                    <div className="avatar-aligner">
                        <div className="avatar-frame">
                            <img className="avatar-img" src={userPic} alt="Identity Avatar" />
                            <button
                                type="button"
                                className="avatar-action-badge"
                                onClick={() => userFileInputRef.current.click()}
                                aria-label="Upload User Avatar"
                            >
                                <i className="fa-solid fa-camera"></i>
                            </button>
                            <input
                                type="file"
                                ref={userFileInputRef}
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={(e) => handleAvatarChange(e, setUserPic)}
                            />
                        </div>
                    </div>

                    <div className="form-layout-stack">
                        <div className="form-field-group">
                            <input
                                type="text"
                                id="userFullTitle"
                                value={formData.userFullTitle}
                                onChange={handleInputChange}
                                placeholder=" "
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="userFullTitle">Full Name</label>
                        </div>

                        <div className="form-field-group">
                            <input
                                type="text"
                                id="userNickName"
                                value={formData.userNickName}
                                onChange={handleInputChange}
                                placeholder=" "
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="userNickName">Username</label>
                        </div>

                        <div className="form-field-group">
                            <input
                                type="email"
                                id="userEmail"
                                value={formData.userEmail}
                                onChange={handleInputChange}
                                placeholder=" "
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="userEmail">Email Address</label>
                        </div>

                        <div className="form-field-group">
                            <input
                                type="tel"
                                id="userPhone"
                                value={formData.userPhone}
                                onChange={handleInputChange}
                                placeholder=" "
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="userPhone">Phone Number</label>
                        </div>
                    </div>

                    <p className="legal-notice">All communication protocols adhere encryptively to data compliance regulations.</p>
                </section>

                {/* RIGHT PANEL: DYNAMIC 4-STEP WIZARD */}
                <section className="panel-card" id="wizardRightPanel">
                    {!isOnboardingComplete ? (
                        <>
                            <div>
                                <h3 className="panel-title">{stepMeta[currentStep].title}</h3>
                                <p className="panel-subtitle">{stepMeta[currentStep].sub}</p>

                                {/* Micro Progress Tracker */}
                                <div className="wizard-steps-indicator">
                                    {[1, 2, 3, 4].map((step) => (
                                        <div key={step} className={`step-pill ${currentStep >= step ? 'active' : ''}`} />
                                    ))}
                                </div>
                            </div>

                            {/* STEP 1: INITIAL METRICS */}
                            {currentStep === 1 && (
                                <form className="merchant-form-step active-step" onSubmit={nextStep} noValidate>
                                    <div className="avatar-aligner">
                                        <div className="avatar-frame">
                                            <img className="avatar-img" src={merchantPic} alt="Brand Avatar Logo" />
                                            <button
                                                type="button"
                                                className="avatar-action-badge"
                                                onClick={() => merchantFileInputRef.current.click()}
                                                aria-label="Upload Merchant Logo"
                                            >
                                                <i className="fa-solid fa-store"></i>
                                            </button>
                                            <input
                                                type="file"
                                                ref={merchantFileInputRef}
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                onChange={(e) => handleAvatarChange(e, setMerchantPic)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-layout-stack">
                                        <div className="form-field-group">
                                            <input
                                                type="text"
                                                id="step1StoreName"
                                                value={formData.step1StoreName}
                                                onChange={handleInputChange}
                                                className={errors.step1StoreName ? 'input-error-state' : ''}
                                                placeholder=" "
                                                autoComplete="off"
                                            />
                                            <label htmlFor="step1StoreName">Store / Brand Registered Name</label>
                                            {errors.step1StoreName && <span className="field-error-msg">{errors.step1StoreName}</span>}
                                        </div>

                                        <div className="form-field-group">
                                            <select
                                                id="step1StructureType"
                                                value={formData.step1StructureType}
                                                onChange={handleInputChange}
                                                className={errors.step1StructureType ? 'input-error-state' : ''}
                                            >
                                                <option value="" disabled hidden></option>
                                                <option value="individual">Individual / Sole Proprietorship</option>
                                                <option value="corporation">Registered LLC / Corporation</option>
                                                <option value="brand_partnership">Brand Representative / Distributor</option>
                                            </select>
                                            <label htmlFor="step1StructureType">Business Legal Entity Structure</label>
                                            {errors.step1StructureType && <span className="field-error-msg">{errors.step1StructureType}</span>}
                                        </div>

                                        <div className="form-field-group">
                                            <input
                                                type="text"
                                                id="step1Category"
                                                value={formData.step1Category}
                                                onChange={handleInputChange}
                                                className={errors.step1Category ? 'input-error-state' : ''}
                                                placeholder=" "
                                                autoComplete="off"
                                            />
                                            <label htmlFor="step1Category">Primary Category (e.g., Automotive, Apparel)</label>
                                            {errors.step1Category && <span className="field-error-msg">{errors.step1Category}</span>}
                                        </div>

                                        <div className="form-field-group">
                                            <input
                                                type="url"
                                                id="step1WebLink"
                                                value={formData.step1WebLink}
                                                onChange={handleInputChange}
                                                placeholder=" "
                                            />
                                            <label htmlFor="step1WebLink">Current Website Link (optional)</label>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn-portal btn-primary">
                                        Continue to Verification <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </form>
                            )}

                            {/* STEP 2: LEGAL COMPLIANCE METRICS */}
                            {currentStep === 2 && (
                                <form className="merchant-form-step active-step" onSubmit={nextStep} noValidate>
                                    <div className="form-layout-stack">
                                        <div className="form-field-group">
                                            <input
                                                type="text"
                                                id="step2TaxId"
                                                value={formData.step2TaxId}
                                                onChange={handleInputChange}
                                                className={errors.step2TaxId ? 'input-error-state' : ''}
                                                placeholder=" "
                                                autoComplete="off"
                                            />
                                            <label htmlFor="step2TaxId">Federal Tax ID / EIN Number</label>
                                            {errors.step2TaxId && <span className="field-error-msg">{errors.step2TaxId}</span>}
                                        </div>

                                        <div className="form-field-group">
                                            <input
                                                type="text"
                                                id="step2Address"
                                                value={formData.step2Address}
                                                onChange={handleInputChange}
                                                className={errors.step2Address ? 'input-error-state' : ''}
                                                placeholder=" "
                                                autoComplete="off"
                                            />
                                            <label htmlFor="step2Address">Registered Business Street Address</label>
                                            {errors.step2Address && <span className="field-error-msg">{errors.step2Address}</span>}
                                        </div>

                                        <div className="form-field-group">
                                            <input
                                                type="text"
                                                id="step2OwnerRef"
                                                value={formData.step2OwnerRef}
                                                onChange={handleInputChange}
                                                className={errors.step2OwnerRef ? 'input-error-state' : ''}
                                                placeholder=" "
                                                autoComplete="off"
                                            />
                                            <label htmlFor="step2OwnerRef">National ID / Passport Document Reference</label>
                                            {errors.step2OwnerRef && <span className="field-error-msg">{errors.step2OwnerRef}</span>}
                                        </div>

                                        <div className="form-field-group">
                                            <select
                                                id="step2Revenue"
                                                value={formData.step2Revenue}
                                                onChange={handleInputChange}
                                                className={errors.step2Revenue ? 'input-error-state' : ''}
                                            >
                                                <option value="" disabled hidden></option>
                                                <option value="tier1">Under $50,000 ARR</option>
                                                <option value="tier2">$50,000 - $250,000 ARR</option>
                                                <option value="tier3">$250,000 - $1M ARR</option>
                                                <option value="tier4">Over $1M ARR</option>
                                            </select>
                                            <label htmlFor="step2Revenue">Estimated Annual Distribution Gross Revenue</label>
                                            {errors.step2Revenue && <span className="field-error-msg">{errors.step2Revenue}</span>}
                                        </div>
                                    </div>

                                    <div className="wizard-button-row">
                                        <button type="button" className="btn-portal btn-secondary" onClick={prevStep}>Back</button>
                                        <button type="submit" className="btn-portal btn-primary">Continue to Contacts <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 3: DIGITAL LINKS & CHANNELS */}
                            {currentStep === 3 && (
                                <form className="merchant-form-step active-step" onSubmit={nextStep} noValidate>
                                    <div className="form-layout-stack">
                                        <div className="form-field-group">
                                            <input
                                                type="email"
                                                id="step3SupportEmail"
                                                value={formData.step3SupportEmail}
                                                onChange={handleInputChange}
                                                className={errors.step3SupportEmail ? 'input-error-state' : ''}
                                                placeholder=" "
                                                autoComplete="off"
                                            />
                                            <label htmlFor="step3SupportEmail">Customer Support Email Address</label>
                                            {errors.step3SupportEmail && <span className="field-error-msg">{errors.step3SupportEmail}</span>}
                                        </div>

                                        <div className="form-field-group">
                                            <input
                                                type="tel"
                                                id="step3BizPhone"
                                                value={formData.step3BizPhone}
                                                onChange={handleInputChange}
                                                className={errors.step3BizPhone ? 'input-error-state' : ''}
                                                placeholder=" "
                                                autoComplete="off"
                                            />
                                            <label htmlFor="step3BizPhone">Business Phone Number</label>
                                            {errors.step3BizPhone && <span className="field-error-msg">{errors.step3BizPhone}</span>}
                                        </div>

                                        <div className="form-field-group">
                                            <input
                                                type="url"
                                                id="step3Insta"
                                                value={formData.step3Insta}
                                                onChange={handleInputChange}
                                                className={errors.step3Insta ? 'input-error-state' : ''}
                                                placeholder=" "
                                                autoComplete="off"
                                            />
                                            <label htmlFor="step3Insta">Instagram Profile URL</label>
                                            {errors.step3Insta && <span className="field-error-msg">{errors.step3Insta}</span>}
                                        </div>

                                        <div className="form-field-group">
                                            <input
                                                type="url"
                                                id="step3Fb"
                                                value={formData.step3Fb}
                                                onChange={handleInputChange}
                                                placeholder=" "
                                            />
                                            <label htmlFor="step3Fb">Facebook Page URL (optional)</label>
                                        </div>
                                    </div>

                                    <div className="wizard-button-row">
                                        <button type="button" className="btn-portal btn-secondary" onClick={prevStep}>Back</button>
                                        <button type="submit" className="btn-portal btn-primary">Continue to Payments <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 4: PREMIUM PAYMENT CHANNEL CHOICE */}
                            {currentStep === 4 && (
                                <form className="merchant-form-step active-step" onSubmit={handleFinalSubmit}>
                                    <div className="payment-options-layout">
                                        {[
                                            { id: 'gpay', value: 'Google Pay', title: 'Google Pay Business', desc: 'Fast, unified smart payout processing systems.', icon: 'fa-brands fa-google-pay', style: { color: '#ea4335', backgroundColor: 'rgba(234,67,53,0.06)', fontSize: '26px' } },
                                            { id: 'phonepe', value: 'PhonePe', title: 'PhonePe Merchant Gateway', desc: 'Seamless digital wallet settlement transfers.', icon: 'fa-solid fa-mobile-screen-button', style: { color: '#5f259f', backgroundColor: 'rgba(95,37,159,0.06)' } },
                                            { id: 'wire', value: 'Bank Wire / ACH', title: 'Bank Wire / ACH Transfer', desc: 'Direct settlement into business checking accounts.', icon: 'fa-solid fa-building-columns', style: { color: '#00b050' } },
                                            { id: 'stripe', value: 'Stripe Terminal', title: 'Stripe Merchant Terminal', desc: 'Instant global distribution processing layers.', icon: 'fa-brands fa-stripe', style: { color: '#635bff' } },
                                        ].map((gateway) => (
                                            <label key={gateway.id} className="relative block cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="paymentGatewayChoice"
                                                    value={gateway.value}
                                                    className="hidden-radio-input"
                                                    checked={selectedPayout === gateway.value}
                                                    onChange={() => setSelectedPayout(gateway.value)}
                                                />
                                                <div className="premium-payment-card">
                                                    <div className="payment-card-main">
                                                        <div className="payment-icon-wrapper" style={gateway.style}>
                                                            <i className={gateway.icon}></i>
                                                        </div>
                                                        <div className="payment-details">
                                                            <span className="payment-title">{gateway.title}</span>
                                                            <span className="payment-description">{gateway.desc}</span>
                                                        </div>
                                                    </div>
                                                    <div className="payment-selector-dot"></div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>

                                    <div className="wizard-button-row">
                                        <button type="button" className="btn-portal btn-secondary" onClick={prevStep}>Back</button>
                                        <button type="submit" className="btn-portal btn-primary">Complete Onboarding <i className="fa-solid fa-circle-check"></i></button>
                                    </div>
                                </form>
                            )}

                            <p className="legal-notice">Identity onboarding verification matrix sequences can require up to 48 operational registry system validation hours.</p>
                        </>
                    ) : (
                        /* PERSISTENT LIVE SUCCESS AREA */
                        <div className="success-screen-wrapper show-success">
                            <div className="success-icon-badge">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <h4 className="success-title">Onboarding Complete!</h4>
                            <p className="success-message">Your strategic merchant configuration pipelines have been successfully initialized. Operational registry validations will take up to 48 hours.</p>
                            <div>
                                <span className="badge-method-selected">
                                    <i className="fa-solid fa-wallet" style={{ color: '#00b050' }}></i> Selected Payout: <strong>{selectedPayout}</strong>
                                </span>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}