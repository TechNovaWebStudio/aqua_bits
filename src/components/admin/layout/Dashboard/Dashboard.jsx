"use client";

import { useState } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../../common/Navbar/Navbar';

export default function AdminDashboard() {
    const [activeCategory, setActiveCategory] = useState('Antibiotics');

    const categories = [
        { id: 'Antibiotics', title: 'Antibiotics', count: 120, trend: '+2%', trendType: 'up', icon: 'fa-prescription-bottle-medical' },
        { id: 'PainRelievers', title: 'Pain Relievers', count: 95, trend: '-0.5%', trendType: 'down', icon: 'fa-droplet' },
        { id: 'Vitamins', title: 'Vitamins & Supp.', count: 75, trend: '+2%', trendType: 'up', icon: 'fa-pills' },
        { id: 'Antiviral', title: 'Antiviral Drugs', count: 50, trend: '+1.2%', trendType: 'up', icon: 'fa-shield-virus' }
    ];

    return (
        <div className={styles.dashboardBody}>
            <Navbar/>
            <main className={styles.mainContent}>
                {/* Metrics Summary Row Section */}
                <section className={styles.summaryGrid}>
                    <div className={`${styles.summaryCard} ${styles.total}`}>
                        <div className={styles.summaryIcon}><i className="fa-solid fa-box-archive"></i></div>
                        <div className={styles.summaryDetails}>
                            <p>Total Products</p>
                            <h2>20,579</h2>
                        </div>
                        <i className={`fa-solid fa-ellipsis-vertical ${styles.cardMore}`}></i>
                    </div>
                    <div className={`${styles.summaryCard} ${styles.low}`}>
                        <div className={styles.summaryIcon}><i className="fa-solid fa-triangle-exclamation"></i></div>
                        <div className={styles.summaryDetails}>
                            <p>Low Stock Items</p>
                            <h2>120</h2>
                        </div>
                        <i className={`fa-solid fa-ellipsis-vertical ${styles.cardMore}`}></i>
                    </div>
                    <div className={`${styles.summaryCard} ${styles.out}`}>
                        <div className={styles.summaryIcon}><i className="fa-solid fa-circle-xmark"></i></div>
                        <div className={styles.summaryDetails}>
                            <p>Out of Stock</p>
                            <h2>89</h2>
                        </div>
                        <i className={`fa-solid fa-ellipsis-vertical ${styles.cardMore}`}></i>
                    </div>
                </section>

                {/* Category Ribbon Selection Grids */}
                <section className={styles.categoriesGrid}>
                    {categories.map((category) => (
                        <div 
                            key={category.id}
                            className={`${styles.categoryCard} ${activeCategory === category.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <h4>{category.title}</h4>
                            <div className={styles.categoryMetrics}>
                                <h3>{category.count}</h3>
                                <span className={`${styles.trendBadge} ${category.trendType === 'up' ? styles.up : styles.down}`}>
                                    <i className={`fa-solid fa-arrow-trend-${category.trendType}`}></i> {category.trend}
                                </span>
                            </div>
                            <span className={styles.categoryIcon}><i className={`fa-solid ${category.icon}`}></i></span>
                        </div>
                    ))}
                </section>

                {/* Main Product Table Grid Container */}
                <section className={styles.tableContainer}>
                    <div className={styles.tableToolbar}>
                        <div className={styles.searchBar}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search product metrics..." />
                        </div>
                        <div className={styles.toolbarRight}>
                            <button className={`${styles.btn} ${styles.btnPrimary}`}><i className="fa-solid fa-plus"></i> Add New</button>
                            <button className={styles.btn}><i className="fa-solid fa-sliders"></i> Filters</button>
                            <button className={styles.btn}><i className="fa-solid fa-download"></i> Export</button>
                            <button className={styles.btn}>This Month <i className="fa-solid fa-chevron-down"></i></button>
                        </div>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Expiry Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#001</td>
                                    <td><strong>Paracetamol</strong> 500mg</td>
                                    <td>120 Units</td>
                                    <td>$5.00</td>
                                    <td>15-03-2025</td>
                                    <td><span className={`${styles.statusPill} ${styles.instock}`}>In Stock</span></td>
                                    <td className={styles.actionsCell}>
                                        <i className="fa-regular fa-eye"></i>
                                        <i className="fa-regular fa-edit"></i>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#002</td>
                                    <td><strong>Amoxicillin</strong> 250mg</td>
                                    <td>45 Units</td>
                                    <td>$7.50</td>
                                    <td>01-12-2024</td>
                                    <td><span className={`${styles.statusPill} ${styles.lowstock}`}>Low Stock</span></td>
                                    <td className={styles.actionsCell}>
                                        <i className="fa-regular fa-eye"></i>
                                        <i className="fa-regular fa-edit"></i>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#003</td>
                                    <td><strong>Ibuprofen</strong> 200mg</td>
                                    <td>0 Units</td>
                                    <td>$6.00</td>
                                    <td>15-11-2023</td>
                                    <td><span className={`${styles.statusPill} ${styles.outstock}`}>Out of Stock</span></td>
                                    <td className={styles.actionsCell}>
                                        <i className="fa-regular fa-eye"></i>
                                        <i className="fa-regular fa-edit"></i>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#004</td>
                                    <td><strong>Cetirizine</strong> 10mg</td>
                                    <td>150 Units</td>
                                    <td>$3.50</td>
                                    <td>30-06-2026</td>
                                    <td><span className={`${styles.statusPill} ${styles.instock}`}>In Stock</span></td>
                                    <td className={styles.actionsCell}>
                                        <i className="fa-regular fa-eye"></i>
                                        <i className="fa-regular fa-edit"></i>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table Navigation and Pagination block */}
                    <div className={styles.tableFooter}>
                        <div>Showing 4 out of 120 items</div>
                        <div className={styles.pagination}>
                            <div className={`${styles.pageNum} ${styles.active}`}>1</div>
                            <div className={styles.pageNum}>2</div>
                            <div className={styles.pageNum}>3</div>
                            <div className={styles.pageNum}>...</div>
                            <div className={styles.pageNum}>10</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}