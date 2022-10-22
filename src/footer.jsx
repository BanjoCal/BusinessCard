import React from "react"
import twitter from "./twitter-icon.png"
import facebook from "./fb-icon.png"
import insta from "./insta-icon.png"
import github from "./github-icon.png"


export default function Footer(){
    return(
        <div className="footer-container">
            <a className="footer-img" href="https://twitter.com/"><img src={twitter} alt="twitter icon" /></a>
            <a className="footer-img" href="https://www.facebook.com/"><img src={facebook} alt="facebook icon" /></a>
            <a className="footer-img" href="https://www.instagram.com/banjocal"><img src={insta} alt="instagram icon" /></a>
            <a className="footer-img" href="https://github.com/"><img src={github} alt="github icon" /></a>
        </div>
    )
}