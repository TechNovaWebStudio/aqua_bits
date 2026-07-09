'use client';
import { useState, useEffect } from "react";
import BreederProfile from "./BreederProfile";
import UserProfile from "./UserProfile";

export function ProfileSection() {
  // 1. Initialize with null or a safe default ('user' or 'breeder') to prevent SSR errors
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Function to read the current role from localStorage
    const handleProfileChange = () => {
      setProfile(localStorage.getItem('role'));
    };

    // Run once on initial client-side mount
    handleProfileChange();

    // 2. Listen for changes triggered by your login/signup buttons
    window.addEventListener("local-storage-update", handleProfileChange);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("local-storage-update", handleProfileChange);
    };
  }, []);

  // 3. Prevent rendering anything until we know the role on the client side
  if (profile === null) {
    return <div className="loading-spinner">Loading...</div>; // Or return null; for a blank skeleton
  }

  return (
    <>
      {profile === 'user' ? <UserProfile /> : <BreederProfile />}
    </>
  );
}