"use client"
import Marketplace from "./marketplace/page"
import Profile from "./profile/page"
import React, { useState } from "react";

export default function Page() {
    const [isProfile, setIsProfile] = useState(false);
    return (
        <div>
            <Marketplace isProfile={isProfile} setIsProfile={setIsProfile} />
            {isProfile && <Profile setIsProfile={setIsProfile} />}
        </div>
    )
}
