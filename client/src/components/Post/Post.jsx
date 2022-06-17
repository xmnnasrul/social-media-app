import React from "react";
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import Notlike from '../../img/notlike.png'




// CSS
import './Post.css'

const Post = ({ data }) => {
    return (
        <div className="Post">
            <img src={data.img} alt="img" />
            <div className="postReact">
                <img src={data.liked ? Heart : Notlike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} Likes</span>
            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>

    )
}


export default Post