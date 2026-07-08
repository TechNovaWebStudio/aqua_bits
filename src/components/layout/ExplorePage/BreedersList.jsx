import React from 'react';
import './BreedersList.css';
import { ExploreNavBar } from './ExploreNavBar';
// Imported the requested icons along with a few others to clean up the UI
import { FaEye, FaComment, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const doctorsData = [
    {
        id: 1,
        name: "Dr. Sam Wallfolk",
        title: "Clinical psychologist",
        rating: "5.0",
        location: "New York, USA",
        exp: "10 yrs of exp.",
        consultations: "1000+ consultations",
        tags: ["Abuse", "Depression", "PTSD"],
        extraTags: "+3",
        price: "$80/h",
        type: "Online/Offline"
    },
    {
        id: 2,
        name: "Dr. Ben Affleck",
        title: "Military psychologist",
        rating: "4.1",
        location: "Los Angeles, USA",
        exp: "4 yrs of exp.",
        consultations: "400+ consultations",
        tags: ["Abuse", "Fears", "Mental Health"],
        extraTags: "+2",
        price: "$50/h",
        type: "Online"
    },
    {
        id: 3,
        name: "Dr. Sarah Legend",
        title: "Child psychologist",
        rating: "5.0",
        location: "Chicago, USA",
        exp: "20 yrs of exp.",
        consultations: "2000+ consultations",
        tags: ["Abuse", "Parenting", "Food"],
        extraTags: "+4",
        price: "$120/h",
        type: "Offline"
    },
    {
        id: 4,
        name: "Dr. Angela Braun",
        title: "Forensic psychologist",
        rating: "3.0",
        location: "Philadelphia, USA",
        exp: "2 yrs of exp.",
        consultations: "100+ consultations",
        tags: ["Anxieties and Phobies", "Depression"],
        extraTags: "+5",
        price: "$40/h",
        type: "Offline"
    },
    {
        id: 5,
        name: "Dr. Dilan McCarter",
        title: "Industrial-Organizational p...",
        rating: "5.0",
        location: "San Diego, USA",
        exp: "8 yrs of exp.",
        consultations: "500+ consultations",
        tags: ["Job and Career", "Stress"],
        extraTags: "+3",
        price: "$75/h",
        type: "Online/Offline"
    },
    {
        id: 6,
        name: "Dr. Evan Peters",
        title: "Clinical psychologist",
        rating: "4.1",
        location: "Houston, USA",
        exp: "3 yrs of exp.",
        consultations: "400+ consultations",
        tags: ["Addictions", "Violence and Agression"],
        extraTags: "+2",
        price: "$50/h",
        type: "Online/Offline"
    }
];

export default function BreedersList({ activeTag, setActiveTag }) {
    return (
        <section className="breeders-container">
            <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />

            {/* Header Section */}
            <div className="breeders-header">
                <div className="header-title-group">
                    <h2 className="header-title">Best for you</h2>
                    <span className="badge-count">24</span>
                </div>
                <button className="see-all-btn">
                    See all
                    <span className="arrow-icon">➔</span>
                </button>
            </div>

            {/* Grid Layout */}
            <div className="breeders-grid">
                {doctorsData.map((doc) => (
                    <div key={doc.id} className="card">

                        {/* Top Row: Avatar & Basic Info */}
                        <div className="card-top">
                            <div className="avatar-placeholder">
                                <div className="avatar-circle">
                                    <img
                                        src="https://dvm9jp3urcf0o.cloudfront.net/logo-ideas/agriculture-logo/fish-farm.png"
                                        alt={doc.name}
                                        className="avatar-img"
                                    />
                                </div>
                            </div>
                            <div className="doctor-info">
                                <h3 className="doctor-name">{doc.name}</h3>
                                <p className="doctor-title">{doc.title}</p>
                            </div>
                        </div>

                        {/* Quick Metrics (Rating & Location) */}
                        <div className="metrics-row">
                            <span className={`rating-badge ${parseFloat(doc.rating) >= 4.5 ? 'high' : 'average'}`}>
                                <FaStar className="icon-star" /> {doc.rating}
                            </span>
                            <span className="location-text">
                                <FaMapMarkerAlt className="icon-location" /> {doc.location}
                            </span>
                        </div>

                        {/* Experience & Consultations */}
                        <div className="stats-row">
                            <p>
                                <FaEye className="icon-eye" /> {doc.exp}
                            </p>
                            <p>
                                <FaComment className="icon-comment" /> {doc.consultations}
                            </p>
                        </div>

                        {/* Tags section */}
                        <div className="tags-container">
                            {doc.tags.map((tag, idx) => (
                                <span key={idx} className="tag-item">{tag}</span>
                            ))}
                            <span className="tag-item extra">{doc.extraTags}</span>
                        </div>

                        {/* Divider line */}
                        <hr className="card-divider" />

                        {/* Bottom Row: Pricing & Action Button */}
                        <div className="card-footer">

                            <button className="book-btn">Follow </button>
                            <button className="mess-btn">Contact </button>

                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}