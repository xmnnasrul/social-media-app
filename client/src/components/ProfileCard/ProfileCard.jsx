import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import './Profilecard.css'


const ProfileCard = () => {
    return (

        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src="{Cover}" alt="" />
                <img src="{Profile}" alt="" />
            </div>
            <div className="ProfileName">
                <span>test</span>
                <span>student</span>
            </div>

            <div className="FollowStatus">
                <hr />
                <div>
                    <div className="Follow">
                        <span>1</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="Follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )

}

export default ProfileCard