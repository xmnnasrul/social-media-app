import React from "react";
import { PostData } from "../../Data/PostData";
import Post from "../Post/Post";



// CSS
import './Posts.css'
const Posts = () => {
    return (
        <div className="Posts">
            {PostData.map((post, id) => {
                return <Post data={post} id={id} />
            })}
        </div>
    )
}


export default Posts