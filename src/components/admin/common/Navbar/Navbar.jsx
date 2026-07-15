"use client";

import styles from './Navbar.module.css';

export default function Navbar({ toggleSidebar }) {
    return (
        <header className={styles.header}>
            <div className={styles.headerTitleArea}>
                <button className={styles.menuToggle} onClick={toggleSidebar}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div>
                    <h1>Product List</h1>
                    <p>Let's check your pharmacy today</p>
                </div>
            </div>
            <div className={styles.headerActions}>
                <div className={styles.searchBar}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className={styles.userProfile}>
                    <div className={styles.userAvatar}>JB</div>
                    <div className={styles.userInfo}>
                        <span>James Bond</span>
                        <small>Admin Dashboard</small>
                    </div>
                </div>
            </div>
        </header>
    );
}