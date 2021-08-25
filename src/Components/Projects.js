import React from 'react'
import Carousal from './Carousal'
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'

function Projects() {
    return (
        <div class="projects">
            <img className="arrow" height="40px" src={leftArrow} />
            <Carousal />
            <Carousal />
            <Carousal />
            <img className="arrow" height="40px" src={rightArrow} />
        </div>
    )
}

export default Projects
