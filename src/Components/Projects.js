import React, {useState} from 'react'
import Carousal from './Carousal'
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'

function Projects() {
    const projectData = [{
        title: "SPOTIFY CLONE",
        desc: "Spotify UI clone using context API",
        live: "",
        source: "https://github.com/jigyasa-ctrl/Spotify-Clone"
    },
    {
        title: "SPOTIFY CLONE",
        desc: "Spotify UI clone using context API",
        live: "https://github.com/jigyasa-ctrl/Spotify-Clone",
        source: "https://github.com/jigyasa-ctrl/Spotify-Clone",
        height: "35rem"
    },
    {
        title: "SPOTIFY CLONE",
        desc: "Spotify UI clone using context API",
        live: "",
        source: "https://github.com/jigyasa-ctrl/Spotify-Clone"
    }]
   // const [data, setData] = useState(projectData)
    return (
      <div class="projects">
        <img className="arrow" height="40px" src={leftArrow} />
        {projectData.length > 0 &&
          projectData.map((item) => (
            <Carousal
              title={item.title}
              desc={item.desc}
              live={item.live}
              source={item.source}
              height={item.height || ""}
            />
          ))}

        <img className="arrow" height="40px" src={rightArrow} />
      </div>
    );
}

export default Projects
