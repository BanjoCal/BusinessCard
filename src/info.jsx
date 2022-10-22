import React from "react"
import profile from "./profile.jpg"
import email from "./email-icon.png"
import linkedin from "./linkedin.png"

export default function Info(){
    return(
        <div className="info-container">
            <img className="profile-picture" src={profile} alt="Calum McKinlay smiling" />
            <h1 className="info-title">Calum McKinlay</h1>
            <h3 className="info-job">Banjo Player</h3>
            <p className="info-site">calMcK.website</p>
            <div className="button-box">
                <a href="mailto:">
                <button className="email-btn"><img src={email} alt="email icon" />Email</button></a>
                <a href="https://gb.linkedin.com/">
                <button className="linkedin-btn"><img src={linkedin} alt="linked in icon" />LinkedIn</button></a>
            </div>
        </div>
    )
}