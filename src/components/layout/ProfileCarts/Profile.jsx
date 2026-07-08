'use client';
import { useState } from "react";
import BreederProfile from "./BreederProfile";
import UserProfile from "./UserProfile";

export function ProfileSection() {
    const [profile,setProfile]=useState('breeder')
    return (
        <>
        {/* {profile == 'breeder'&& <BreederProfile />} */}
        {profile == 'user' ? <UserProfile/>: <BreederProfile />}

            
            
        </>
    )
}