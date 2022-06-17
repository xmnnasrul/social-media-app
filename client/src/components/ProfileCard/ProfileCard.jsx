import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

// CSS
import './Profilecard.css'


const ProfileCard = () => {


    const ProfilePage = true;
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
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
                    {ProfilePage && (
                        <>
                            <div className="vl">

                            </div>
                            <div className="Follow">
                                <span>3</span>
                                <span>Post</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {ProfilePage ? '' :
                <span>My Profile</span>}
        </div>
    )

}

export default ProfileCard