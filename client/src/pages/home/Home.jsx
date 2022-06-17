import React from 'react'
import PostSide from '../../components/PostSide/Postside'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'


// CSS
import './Home.css'


const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}
export default Home