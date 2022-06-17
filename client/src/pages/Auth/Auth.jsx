import React from "react";
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="WebName">
                    <h1>lorem ipsum</h1>
                    <h6>Explore the ideas throughout thr word</h6>
                </div>
            </div>
            <SignUp />
        </div>
    )
}

function SignUp() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder="First Name" className="InfoInput" name="firstname" autoComplete="off" />

                    <input type="text" placeholder="Last Name" className="InfoInput" name="lastname" autoComplete="off" />
                </div>
                <div>
                    <input type="text" autoComplete="off" className="InfoInput" name="username" placeholder="Username" />
                </div>
                <div>
                    <input type="text" className="InfoInput" autoComplete="off" name="password" placeholder="Password" />

                    <input type="text" className="InfoInput" autoComplete="off" name="confrimpass" placeholder="Confrim Password" />
                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>
                        Already have an account. Login!
                    </span>
                </div>
                <button className="button infoButton" type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default Auth