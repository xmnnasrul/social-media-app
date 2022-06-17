import React from "react";
import { Followers } from "../../Data/FollowersData";
// CSS
import './FollowersCard.css'


const FolowersCard = () => {
    return (
        <div className="FollowerCard">
            <h3>Who is following you</h3>
            {Followers.map((follower, id) => {
                return (
                    <div className="follower">
                        <div>
                            <img src={follower.img} className='followerImg' alt="img" />
                            <div className="name">
                                <span>{follower.name}</span><span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className="button fc-button">Follow</button>
                    </div>
                )
            })}
        </div>
    )

}
export default FolowersCard