import React, { useState, useRef } from 'react'
import ProfileImg from '../../img/profileImg.jpg'


// icon
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'


// CSS
import './PostShare.css'

const PostShare = () => {

    const [Image, setImage] = useState(null);
    const ImageRef = useRef();
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                Image: URL.createObjectURL(img),
            });
        }
    }


    return (
        <div className="PostShare">
            <img src={ProfileImg} alt="profile img" />
            <div>
                <input type="text" placeholder="What's Happening ?" />
                <div className="postOption">
                    <div className="option" style={{ color: "var(--photo )" }} onClick={() => ImageRef.current.click()}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video )" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location )" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--shedule )" }}>
                        <UilSchedule />
                        Shedule
                    </div>
                    <button className='button ps-button'>
                        Share
                    </button>
                    <div style={{ display: "none" }}>
                        <input type="file" name='myImage' ref={ImageRef} onChange={onImageChange} />
                    </div>
                </div>

                {Image && (
                    <div className="previewImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={Image.Image} alt="" />
                    </div>
                )}

            </div>
        </div>
    )
}

export default PostShare