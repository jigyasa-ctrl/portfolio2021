import React from 'react'
import logo from "../assets/logo.png"
import Percentage from './Percentage'
import resume from '../assets/Jigyasa_06081998.pdf'

function About() {
    return (
        <div className="about-main">
            <div className="about" style={{width: '70%'}}>
            <img className="img" src={logo}/>
            <div>
                <h1 style={{fontFamily: 'Merienda One', fontSize: '3rem'}} >Who am I ?</h1>
                {/*<p> Hi, I am Jigyasa Upadhyay, Frontend Developer from Uttrakhand, India. I have 1 year experience in web development. Building Projects in ReactJS, Javascript, HTML, CSS, Sass, Redux, RestAPI, React contextAPI </p>*/}
                <p>A Software Engineer with hands on experience developing websites, Frontend web applications. A Bachelor’s Degree holder in Electonics and Communication Engineering from Birla Institute.</p>
                <button style={{borderRadius: '10px'}}><a href={resume} download style={{textDecoration: 'none', color: 'inherit'}}> Download Resume </a></button>
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
