"use client";

import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <>
            {/* Backdrop Curtain for Mobile Sidebar menu */}
            <div 
                className={`${styles.sidebarOverlay} ${isOpen ? styles.visible : ''}`} 
                onClick={toggleSidebar}
            />

            {/* Sidebar Navigation */}
            <nav className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.logo}>
                    <i className="fa-solid fa-capsules"></i> Pharmly
                </div>
                <ul className={styles.navLinks}>
                    <li className={styles.navItem}>
                        <Link href="#"><i className="fa-solid fa-chart-pie"></i> Overview</Link>
                    </li>
                    <li className={`${styles.navItem} ${styles.active}`}>
                        <Link href="#"><i className="fa-solid fa-box"></i> Products</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#"><i className="fa-solid fa-cart-shopping"></i> Orders</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#"><i className="fa-solid fa-chart-line"></i> Sales</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#"><i className="fa-solid fa-users"></i> Customers</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#"><i className="fa-solid fa-credit-card"></i> Payments</Link>
                    </li>
                  
                </ul>
                
               

                <button className={styles.logoutBtn}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
                </button>
            </nav>
        </>
    );
}