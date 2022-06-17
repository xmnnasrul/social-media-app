import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch"
import InfoCard from "../InfoCard/InfoCard";
import FollowersCard from '../FollowersCard/FollowersCard'
// CSS


const ProfileLeft = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}
export default ProfileLeft