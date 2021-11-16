import React from 'react'
import Google from '../img/google.png'
import Facebook from '../img/facebook.png'
import Github from '../img/github.png'

const Login = () => {
    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginBtn google">
                        <img src={Google} alt="" />
                        Google
                    </div>
                    <div className="loginBtn facebook">
                        <img src={Facebook} alt="" />
                        Facebook
                    </div>
                    <div className="loginBtn github">
                        <img src={Github} alt="" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line"></div>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
