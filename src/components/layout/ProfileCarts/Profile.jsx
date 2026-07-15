'use client';

import { useState, useEffect } from "react";
import BreederProfile from "./BreederProfile";
import UserProfile from "./UserProfile";

// Pro-tip: Try moving this file into your /src or /app directory if it still fails
import { Breeders } from "../../../../public/data"; 

export function ProfileSection({ profileId }) {
  console.log('profileId',profileId)
  const [profileRole, setProfileRole] = useState(null);
  const [matchedBreeder, setMatchedBreeder] = useState(null);

  useEffect(() => {
    // Debugging: See exactly what profileId is arriving as
    console.log("ProfileSection received profileId:", profileId);
    console.log("Available Breeders Data:", Breeders);

    if (profileId) {
      // Normalize both sides: trim whitespace and convert to lower-case strings
      const foundBreeder = Breeders?.find(
        (b) => String(b.id).trim() === String(profileId).trim()
      );
      
      console.log("Found Breeder result:", foundBreeder);

      if (foundBreeder) {
        setMatchedBreeder(foundBreeder);
        setProfileRole('breeder'); 
      } else {
        setProfileRole('not-found');
      }
      return;
    }

    // --- Standard dynamic role logic (no profileId provided) ---
    const handleProfileChange = () => {
      const currentRole = localStorage.getItem('role') || 'user';
      setProfileRole(currentRole);
    };

    handleProfileChange();

    window.addEventListener("local-storage-update", handleProfileChange);
    window.addEventListener("storage", handleProfileChange); 

    return () => {
      window.removeEventListener("local-storage-update", handleProfileChange);
      window.removeEventListener("storage", handleProfileChange);
    };
  }, [profileId]); 

  // Loading state
  if (profileRole === null) {
    return (
      <div className="loading-spinner" style={{ padding: '2rem', textAlign: 'center' }}>
        Loading Profile...
      </div>
    );
  }

  // Handle data not found
  if (profileRole === 'not-found') {
    return (
      <div className="profile-error" style={{ padding: '2rem', textAlign: 'center' }}>
        Breeder profile not found for ID: {String(profileId)}
      </div>
    );
  }

  return (
    <>
      {profileRole === 'user' ? (
        <UserProfile />
      ) : (
        <BreederProfile breederData={matchedBreeder} />
      )}
    </>
  );
}