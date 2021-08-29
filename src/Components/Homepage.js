import React from 'react'
import logo from "../assets/logo.png"

function Homepage() {
    return (
        <div className="homepage-div">
         
            <img className="img" src={logo} />
            <h2 style={{fontWeight: 600, fontSize: '3rem'}}>Jigyasa Upadhyay</h2>
            <h3 style={{fontWeight: 600, fontSize: '1.2rem'}}> Frontend Developer @ Active.Ai</h3>
            <span></span>
            <button><a style={{textDecoration: 'none', color: 'inherit'}} href="mailto: jigyasaupadhyay60@gmail.com">Hire Me</a></button>
            
            <downicon></downicon>
            
        </div>
    )
}

export default Homepage
