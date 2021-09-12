import React, { useState } from "react";
import Carousal from "./Carousal";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import Ekart from "../assets/e-kart.png"
import spotify from "../assets/spotify.png"
import puppygram from "../assets/puppygram.png"
import creditcard from "../assets/creditcard.png"
import tinder from "../assets/tinder.png"
import bot from "../assets/bot.png"


function Projects() {
  const projectData = [
    {
        title: "E-Kart",
        desc: "E-commerce Website with HTML, CSS and Javascript",
        live: "https://jigyasa-ctrl.github.io/E-Cart/",
        source: "https://github.com/jigyasa-ctrl/E-Cart",
        image: Ekart
      },
    {
      title: "SPOTIFY CLONE",
      desc: "Spotify Clone using Spotify-context API to fetch data from your Spotify account.",
      live: "",
      source: "https://github.com/jigyasa-ctrl/Spotify-Clone",
      image: spotify
    },
    {
      title: "PUPPYGRAM",
      desc: "Puppygram is a Place to add amazing and cute memories of your pets!",
      live: "",
      source: "https://github.com/jigyasa-ctrl/PuppyGram",
      image: puppygram
    },
    {
      title: "Credit-Card UI",
      desc: "Credit Card React UI Application for fun.",
      live: "https://adoring-mirzakhani-6406d2.netlify.app/",
      source: "https://github.com/jigyasa-ctrl/React-CreditCard",
      image: creditcard
    },
    {
        title: "AI-BOT",
        desc: "AI-BOT : your personal Virtual assistant build with React and Redux",
        live: "https://personal-talker.herokuapp.com/",
        source: "https://github.com/jigyasa-ctrl/ai-bot",
        image: bot
      },
    {
      title: "TINDER CLONE",
      desc: "Basic MERN Stack tinder-clone A MERN Stack Tinder-Clone with database connected to MongoDB.",
      live: "",
      source: "https://github.com/jigyasa-ctrl/Tinder-Clone",
      image: tinder
    },
    {
      title: "E-Commerce",
      desc: "E-commerce Website created using ReactJS, react-router and React-redux.",
      live: "https://frosty-lumiere-9b9ee9.netlify.app/",
      source: "https://github.com/jigyasa-ctrl/E-commerce-react",
      image: Ekart
    },
   
    {
      title: "Realtime-chat",
      desc: "A Realtime Chat Application using NodeJS and Socket.io.",
      live: "",
      source: "https://github.com/jigyasa-ctrl/Realtime-Chat",
      image: bot
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
     if(stateRight !== projectData.length-1){
        AniationLeft();
        await setStateLeft(stateLeft + 1);
        await setStateMiddle(stateMiddle + 1);
        await setStateRight(stateRight + 1);
        setTimeout(() => {
          AniationRight();
        }, 500);    
     }  
    
  }
  async function leftArrowClick() {
    if(stateLeft !== 0){
    AniationLeft();
    await setStateLeft(stateLeft - 1);
    await setStateMiddle(stateMiddle - 1);
    console.log(stateMiddle);
    await setStateRight(stateRight - 1);
    setTimeout(() => {
      AniationRight();
    }, 500);
}
  }

  return (
      <>
       <h1 id="project-h1">Recent Works</h1>
    <div class="projects">
      <img
        className="arrow"
        height="40px"
        src={leftArrow}
        onClick={leftArrowClick}
      />
     
      <Carousal
        title={projectData[stateLeft].title}
        desc={projectData[stateLeft].desc}
        live={projectData[stateLeft].live}
        source={projectData[stateLeft].source}
        height={projectData[stateLeft].height || ""}
        image={projectData[stateLeft].image}
      />
      <Carousal
        title={projectData[stateMiddle].title}
        desc={projectData[stateMiddle].desc}
        live={projectData[stateMiddle].live}
        source={projectData[stateMiddle].source}
        image={projectData[stateMiddle].image}
        height="35rem"
      />
      <Carousal
      className="test"
        title={projectData[stateRight].title}
        desc={projectData[stateRight].desc}
        live={projectData[stateRight].live}
        source={projectData[stateRight].source}
        height={projectData[stateRight].height || ""}
        image={projectData[stateRight].image}
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
    </>
  );
}

export default Projects;
