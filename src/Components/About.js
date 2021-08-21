import React from 'react'
import logo from "../assets/logo.png"
import Percentage from './Percentage'

function About() {
    return (
        <div className="about-main">
            <div className="about" style={{width: '70%'}}>
            <img className="img" src={logo}/>
            <div>
                <p> Hi, I am Jigyasa Upadhyay, Frontend Developer from Uttrakhand, India. I have 1 year experience in web development. Building Projects in ReactJS, Javascript, HTML, CSS, Sass, Redux, RestAPI, React contextAPI </p>
                <button style={{borderRadius: '10px'}}> Download Resume</button>
            </div>
            </div>
           <div className="percent-div">
            <Percentage title="React" percent="75%" color="yellow" width="40rem" />
            <Percentage title="Javascript" percent="80%" color="orange" width="45rem" />
            <Percentage title="HTML" percent="80%" color="purple" width="45rem" />
            <Percentage title="CSS" percent="80%" color="#add8e6" width="45rem" />
            <Percentage title="Redux" percent="60%" color="pink" width="35rem" />
            <Percentage title="ContextAPI" percent="60%" color="white" width="35rem" />
            
            
            </div>
            

            
            
        </div>
    )
}

export default About
