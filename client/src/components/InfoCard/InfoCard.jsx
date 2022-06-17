import React, { useState } from "react";
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'

// CSS
import './InfoCard.css'
const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);




    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4> Your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
                    <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>in Relationship</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives In </b>
                </span>
                <span>Indonesia</span>
            </div>
            <div className="info">
                <span>
                    <b>Work at </b>
                </span>
                <span>Home</span>
            </div>

            <button className="button logout-btn">Logout</button>
        </div>
    )
}
export default InfoCard