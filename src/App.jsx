import React from "react"
import About from "./about.jsx"
import Info from "./info.jsx"
import Interests from "./interests.jsx"
import Footer from "./footer.jsx"

export default function App(){
    return(
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
