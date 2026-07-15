'use client'; // Required for useRouter and client interaction

import React from 'react';
import './BreedersList.css';
import { ExploreNavBar } from './ExploreNavBar';
import { FaEye, FaComment, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { Breeders } from '../../../../public/data';
import { useRouter } from 'next/navigation'; // Import Next.js router

export default function BreedersList({ activeTag, setActiveTag }) {
    const router = useRouter();

    const handleViewProfile = (breeder) => {
        // 1. Set the role to 'breeder' in localStorage so ProfileSection loads the correct view
        localStorage.setItem('role', 'breeder');
        
        // 2. Save their ID or details for rendering the specific data
        localStorage.setItem('selectedBreederId', breeder.id);

        // 3. Dispatch the custom event so ProfileSection updates immediately if already mounted
        window.dispatchEvent(new Event("local-storage-update"));

        // 4. Navigate to the dynamic profile page (Fixed: Using dynamic template literals)
        router.push(`/profile/${breeder.id}`);
    };

    return (
        <section className="breeders-container">
            <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />

            <div className="breeders-header">
                <div className="header-title-group">
                    <h2 className="header-title">Best for you</h2>
                    <span className="badge-count">{Breeders.length}</span>
                </div>
            </div>

            <div className="breeders-grid">
                {Breeders.map((doc) => (
                    <div key={doc.id} className="card">
                        <div className="card-top">
                            <div className="avatar-circle">
                                <img src={doc.profileImage} alt='image' />
                            </div>
                            <div className="doctor-info">
                                <h3 className="doctor-name">{doc.name}</h3>
                                <p className="doctor-title">{doc.userName}</p>
                                <p className="mobile-follow-count">{doc.counts.followers} followers</p>
                            </div>
                        </div>

                        <div className="metrics-row">
                            <span className="rating-badge high"><FaStar /> {doc.rating}</span>
                            <span className="location-text"><FaMapMarkerAlt /> {doc.location}</span>
                        </div>

                        <div className="desktop-only-content">
                            <div className="stats-row">
                                <p><FaEye /> {doc.experience} Experience</p>
                                <p><FaComment /> {doc.bio}</p>
                            </div>
                            <div className="tags-container">
                                {doc.categories.map((tag, idx) => (
                                    <span key={idx} className="tag-item">#{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="card-footer">
                            <button className="book-btn">Follow</button>
                            {/* Click Handler */}
                            <button 
                                className="mess-btn" 
                                onClick={() => handleViewProfile(doc)}
                            >
                                view
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}