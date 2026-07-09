'use client';
import React, { useState, useEffect } from 'react';
import styles from './SignUp.module.css';
import { Check } from 'lucide-react';

// Fixed data structure to include img, title, and desc properties used in your JSX
const SLIDE_IMAGES = [
    {
        img: 'https://i.pinimg.com/1200x/d5/d4/9d/d5d49d70a1c320c85e1a5c2b960bb6e6.jpg',
        title: 'Elevate Your Style',
        desc: 'Discover carefully curated collections crafted for the modern aesthetic.'
    },
    {
        img: 'https://i.pinimg.com/736x/5f/c2/74/5fc274aad17e50a0a48a40e90427fc94.jpg',
        title: 'Timeless Minimalism',
        desc: 'Experience high-quality pieces designed to transcend seasonal trends.'
    },
    {
        img: 'https://i.pinimg.com/1200x/79/f4/ee/79f4eef0ac4b4ad30f3c2c44673eedbe.jpg',
        title: 'Join the Collective',
        desc: 'Unlock exclusive access, early drops, and community-only essentials.'
    }
];

export default function SignUp({ onclick }) {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [status, setStatus] = useState({
        fullName: { checking: false, valid: false },
        username: { checking: false, valid: false }
    });

    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide effect matching Login setup (4000ms)
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % SLIDE_IMAGES.length);
        }, 4000);

        return () => clearInterval(slideInterval);
    }, []);

    const handleUniqueCheck = (field, value) => {
        if (value.trim().length >= 3) {
            setStatus(prev => ({ ...prev, [field]: { checking: true, valid: false } }));
        } else {
            setStatus(prev => ({ ...prev, [field]: { checking: false, valid: false } }));
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (id === 'fullName' || id === 'username') {
            handleUniqueCheck(id, value);
        }
    };

    // Debounce checking states simulations
    useEffect(() => {
        if (!status.fullName.checking) return;
        const timeout = setTimeout(() => {
            setStatus(prev => ({ ...prev, fullName: { checking: false, valid: true } }));
        }, 800);
        return () => clearTimeout(timeout);
    }, [formData.fullName, status.fullName.checking]);

    useEffect(() => {
        if (!status.username.checking) return;
        const timeout = setTimeout(() => {
            setStatus(prev => ({ ...prev, username: { checking: false, valid: true } }));
        }, 800);
        return () => clearTimeout(timeout);
    }, [formData.username, status.username.checking]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className={styles.bodyWrapper}>
            <div className={styles.modalContainer}>

                {/* Left Side: Auto-Sliding Hero Image Section */}
                <div
                    className={styles.heroSide}
                    style={{ backgroundImage: `url(${SLIDE_IMAGES[currentSlide].img})` }}
                >
                    <div className={styles.storyIndicators}>
                        {SLIDE_IMAGES.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.indicatorBar} ${index === currentSlide ? styles.active : ''}`}
                            ></div>
                        ))}
                    </div>
                    <div className={styles.heroTextContainer}>
                        <h2 className={styles.heroTitle}>{SLIDE_IMAGES[currentSlide].title}</h2>
                        <p className={styles.heroText}>{SLIDE_IMAGES[currentSlide].desc}</p>
                    </div>
                </div>

                {/* Right Side: Form Section */}
                <div className={styles.formSide}>
                    <h1 className={styles.formTitle}>Create An Account</h1>
                    <p className={styles.subtitleText}>Become a member to elevate your everyday aesthetic.</p>

                    <form id="signupForm" onSubmit={handleSubmit} className={styles.gridForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName">Full Name</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="text"
                                    id="fullName"
                                    className={styles.formControl}
                                    placeholder="Alexander Wright"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                                
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="username">Username</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="text"
                                    id="username"
                                    className={styles.formControl}
                                    placeholder="alex_wright"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                {status.username.checking && <span className={styles.fieldLoader}></span>}
                                {status.username.valid && !status.username.checking && (
                                    <span className={styles.successCheckmark}>
                                        <Check size={15} strokeWidth={2.5} />
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.formControl}
                                    placeholder="alex@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone Number</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="tel"
                                    id="phone"
                                    className={styles.formControl}
                                    placeholder="+1 (555) 234-5678"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    id="password"
                                    className={styles.formControl}
                                    placeholder="••••••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    className={styles.togglePassword}
                                    onClick={() => setShowPass(!showPass)}
                                >
                                    {showPass ?
                                        <i className="fa-solid fa-eye-slash"></i>
                                        :
                                        <i className="fa-solid fa-eye"></i>}
                                </span>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type={showConfirmPass ? 'text' : 'password'}
                                    id="confirmPassword"
                                    className={styles.formControl}
                                    placeholder="••••••••••••"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    className={styles.togglePassword}
                                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                                >
                                    {showConfirmPass ? (
                                        <i className="fa-solid fa-eye-slash"></i>
                                    ) : (
                                        <i className="fa-solid fa-eye"></i>
                                    )}
                                </span>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitBtn} 
                        onClick={() => localStorage.setItem('role', 'user')}
                        >Register Account</button>
                    </form>

                    <div className={styles.divider}>or register with</div>

                    <div className={styles.socialContainer}>
                        <button type="button" className={styles.socialBtn}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgI6RX_xc38Oivjz22Z-i-n-Gov7vOu2jfn1WAnd9BVej2MvXKrFHtmA1&s=10" />
                            Google
                        </button>
                        <button type="button" className={styles.socialBtn}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEaXdi7l6AD2uVETyIGttt_S81MmBNClh3U48e-mrAw&s=10" alt="Apple icon" />
                            Apple ID
                        </button>
                    </div>

                    <div className={styles.loginFooter}>
                        Already part of the collective? <a style={{ cursor: 'pointer' }} onClick={() => onclick('login')}>Sign In</a>
                    </div>
                </div>

            </div>
        </div>
    );
}