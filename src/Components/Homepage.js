import React from 'react'
import logo from "../assets/logo.png"

function Homepage() {
    return (
        <div className="homepage-div">
         
            <img className="img" src={logo} />
            <h2 style={{fontWeight: 600}}>Jigyasa Upadhyay</h2>
            <h3>I am a Frontend Developer @ Active.Ai</h3>
            <span></span>
            <button>Hire Me</button>
            <downicon></downicon>
            
        </div>
    )
}

export default Homepage
