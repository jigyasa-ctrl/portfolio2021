import React from 'react'
import Carousal from './Carousal'
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'

function Projects() {
    return (
        <div class="projects">
            <img className="arrow" height="40px" src={leftArrow} />
            <Carousal title="Spotify Clone" desc="Spotify UI clone using context API" />
            <Carousal title="credit card" desc="Spotify UI clone using context API Spotify UI clone using context API" height="35rem" />
            <Carousal title="Puppygram" desc="Spotify UI clone using context API" />
            <img className="arrow" height="40px" src={rightArrow} />
        </div>
    )
}

export default Projects
