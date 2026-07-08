import React from 'react';
import Image from 'next/image';
import { 
  User, 
  MapPin, 
  Heart, 
  FileText, 
  Bell, 
  CreditCard,
  Plus,
  ChevronRight
} from 'lucide-react';
import styles from './UserProfile.module.css';

export default function UserProfile() {
  const menuItems = [
    { id: 'edit', label: 'Edit Profile', icon: <User size={20} /> },
    { id: 'address', label: 'Shopping Address', icon: <MapPin size={20} /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart size={20} /> },
    { id: 'history', label: 'Convert To Seller / Breeder Account', icon: <FileText size={20} /> },
    
    
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Avatar & Status Section */}
        <section className={styles.avatarSection}>
          {/* <div className={styles.avatarWrapper}> */}
            <div className={styles.avatarContainer}>
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Darlene Robertson"
                width={110}
                height={110}
                className={styles.avatarImage}
                priority
              />
            {/* </div> */}
            {/* Add Avatar Action Button */}
            <button className={styles.addAvatarBtn} aria-label="Upload new photo">
              <Plus size={16} strokeWidth={3} />
            </button>
          </div>
          
          <h2 className={styles.name}>Muhammed Shibil</h2>
          <p className={styles.userName}>@Shibil__c0</p>
          {/* <div className={styles.statusContainer}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Active status</span>
          </div> */}
        </section>

        {/* Action Menu List */}
        <nav className={styles.menuList}>
          {menuItems.map((item) => (
            <button key={item.id} className={styles.menuItem}>
              <div className={styles.menuItemLeft}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <span className={styles.menuLabel}>{item.label}</span>
              </div>
              <div className={styles.arrowWrapper}>
                <ChevronRight size={18} />
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}