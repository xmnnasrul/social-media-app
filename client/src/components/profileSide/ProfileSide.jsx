import React from "react";
import FolowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";


import './ProfileSide.css'



const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
            <FolowersCard />
        </div>
    )
}
export default ProfileSide;
