import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import medium from "../assets/medium.png";

function Contact() {
  return (
    <>
      <h1 id="contact-h1">Contact</h1>
      <div className="contact-div">
        <img
          onClick={() =>
            (window.location.href =
              " https://www.linkedin.com/in/jigyasa-upadhyay-24963515b/")
          }
          src={linkedin}
        ></img>
        <img
          onClick={() =>
            (window.location.href = "https://github.com/jigyasa-ctrl")
          }
          src={github}
        ></img>
        <img
          onClick={() =>
            (window.location.href = "https://medium.com/@jigyasaupadhyay60/")
          }
          src={medium}
        ></img>
      </div>
    </>
  );
}

export default Contact;
