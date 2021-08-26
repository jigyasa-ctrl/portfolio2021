import React, { useState } from "react";
import Carousal from "./Carousal";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

function Projects() {
  const projectData = [
    {
      title: "SPOTIFY CLONE",
      desc: "Spotify UI clone using context API",
      live: "",
      source: "https://github.com/jigyasa-ctrl/Spotify-Clone",
    },
    {
      title: "SPOTIFY CLONE",
      desc: "Spotify UI clone using context API",
      live: "https://github.com/jigyasa-ctrl/Spotify-Clone",
      source: "https://github.com/jigyasa-ctrl/Spotify-Clone",
    },
    {
      title: "SPOTIFY CLONE",
      desc: "Spotify UI clone using context API",
      live: "",
      source: "https://github.com/jigyasa-ctrl/Spotify-Clone",
    },
    {
      title: "SPOTIFY CLONEss",
      desc: "Spotify UI clone using context API",
      live: "",
      source: "https://github.com/jigyasa-ctrl/Spotify-Clone",
    },
    {
      title: "SPOTIFY CLONEghfg",
      desc: "Spotify UI clone using context API",
      live: "",
      source: "https://github.com/jigyasa-ctrl/Spotify-Clone",
    },
    {
      title: "SPOTIFY CLONE",
      desc: "Spotify UI clone using context API",
      live: "",
      source: "https://github.com/jigyasa-ctrl/Spotify-Clone",
    },
    {
      title: "SPOTIFY CLONE",
      desc: "Spotify UI clone using context API",
      live: "",
      source: "https://github.com/jigyasa-ctrl/Spotify-Clone",
    },
  ];
  const [stateLeft, setStateLeft] = useState(0);
  const [stateMiddle, setStateMiddle] = useState(1);
  const [stateRight, setStateRight] = useState(2);
  function AniationLeft() {
    document.getElementsByClassName("carousal")[0].classList.add("shiftRight");
    document.getElementsByClassName("carousal")[1].classList.add("shiftRight");
    document.getElementsByClassName("carousal")[2].classList.add("shiftRight");
  }
  function AniationRight() {
    document
      .getElementsByClassName("carousal")[0]
      .classList.remove("shiftRight");
    document
      .getElementsByClassName("carousal")[1]
      .classList.remove("shiftRight");
    document
      .getElementsByClassName("carousal")[2]
      .classList.remove("shiftRight");
  }

  async function rightArrowClick() {
    AniationLeft();
    console.log("hehehe");
    await setStateLeft(stateLeft + 1);
    await setStateMiddle(stateMiddle + 1);
    console.log(stateMiddle);
    await setStateRight(stateRight + 1);
    setTimeout(() => {
      AniationRight();
    }, 500);
  }
  async function leftArrowClick() {
    AniationLeft();
    await setStateLeft(stateLeft - 1);
    await setStateMiddle(stateMiddle - 1);
    console.log(stateMiddle);
    await setStateRight(stateRight - 1);
    setTimeout(() => {
      AniationRight();
    }, 500);
  }

  return (
    <div class="projects">
      <img
        className="arrow"
        height="40px"
        src={leftArrow}
        onClick={leftArrowClick}
      />
      {/*} //projectData.length > 0 &&
         // projectData.map((item) => (*/}
      <Carousal
        title={projectData[stateLeft].title}
        desc={projectData[stateLeft].desc}
        live={projectData[stateLeft].live}
        source={projectData[stateLeft].source}
        height={projectData[stateLeft].height || ""}
      />
      <Carousal
        title={projectData[stateMiddle].title}
        desc={projectData[stateMiddle].desc}
        live={projectData[stateMiddle].live}
        source={projectData[stateMiddle].source}
        height="35rem"
      />
      <Carousal
        title={projectData[stateRight].title}
        desc={projectData[stateRight].desc}
        live={projectData[stateRight].live}
        source={projectData[stateRight].source}
        height={projectData[stateRight].height || ""}
      />
      {/* // ))}
        }*/}

      <img
        className="arrow"
        height="40px"
        src={rightArrow}
        onClick={rightArrowClick}
      />
    </div>
  );
}

export default Projects;
