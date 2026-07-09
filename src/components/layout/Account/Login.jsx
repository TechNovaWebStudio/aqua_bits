'use client';
import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { useRouter } from "next/navigation";

// Array of 3 high-quality fashion images for the auto-slider
const SLIDE_IMAGES = [
    'https://i.pinimg.com/1200x/d5/d4/9d/d5d49d70a1c320c85e1a5c2b960bb6e6.jpg',
    'https://i.pinimg.com/736x/5f/c2/74/5fc274aad17e50a0a48a40e90427fc94.jpg',
    'https://i.pinimg.com/1200x/79/f4/ee/79f4eef0ac4b4ad30f3c2c44673eedbe.jpg',

];

export default function Login({ onclick }) {
    const router = useRouter(); // Initialize router here
    const [currentSlide, setCurrentSlide] = useState(0);
    const [email, setEmail] = useState('magikapro@mail.com');
    const [password, setPassword] = useState('password123');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Auto-slide effect (changes every 4000ms / 4 seconds)
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % SLIDE_IMAGES.length);
        }, 4000);

        return () => clearInterval(slideInterval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, confirmPassword });
    };

    return (
        <div className={styles.bodyWrapper}>
            <div className={styles.modalContainer}>
                {/* <button className={styles.closeBtn} aria-label="Close window">&times;</button> */}

                {/* Left Side: Auto-Sliding Hero Image Section */}
                <div
                    className={styles.heroSide}
                    style={{ backgroundImage: `url(${SLIDE_IMAGES[currentSlide]})` }}
                >
                    <div className={styles.storyIndicators}>
                        {SLIDE_IMAGES.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.indicatorBar} ${index === currentSlide ? styles.active : ''}`}
                            ></div>
                        ))}
                    </div>
                    <p className={styles.heroText}>
                        Urbanmuse is an online fashion store that provides a variety of clothes, shoes, bags, and accessories for men and women.
                    </p>
                </div>

                {/* Right Side: Form Section */}
                <div className={styles.formSide}>

                    <h1 className={styles.formTitle}>Login Your Account!</h1>

                    <form id="signupForm" onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.formControl}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className={styles.formControl}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className={styles.togglePassword}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ?
                                        <i className="fa-solid fa-eye-slash"></i>
                                        :
                                        <i className="fa-solid fa-eye"></i>}
                                </span>
                            </div>
                        </div>

                        <div className={styles.passwordRequirements}>
                            <div className={styles.reqTitle}>Password must contain:</div>
                            <div className={styles.reqItem}>
                                <span className={styles.checkIcon}>✓</span> Minimum 8 characters
                            </div>
                            <div className={styles.reqItem}>
                                <span className={styles.checkIcon}>✓</span> Must have alphabetic & numeric characters
                            </div>
                        </div>



                        <button
                            type="submit"
                            className={styles.submitBtn}
                            onClick={() => {
                                // 1. Save the new role
                                localStorage.setItem('role', 'user');

                                // 2. Alert the sidebar to update its state immediately
                                window.dispatchEvent(new Event("local-storage-update"));

                                // 3. Navigate back home
                                router.push('/');
                            }}
                        >
                            Create account
                        </button>
                    </form>

                    <div className={styles.divider}>or login with</div>

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
                        Create a New Account ! <a onClick={() => onclick('signUp')}>Sign Up</a>
                    </div>
                </div>
            </div>
        </div >
    );
}