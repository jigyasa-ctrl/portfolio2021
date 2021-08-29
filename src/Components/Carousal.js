import React from 'react'

function Carousal({title, desc, live, source, height, image}) {
    const redirect = (link )=> {
        
      window.location.href=link
    }
    return (
      <div id="carousal" class="carousal" style={{ height: height }}>
        <img src={image} />
        <h1>{title}</h1>
        <h4>{desc}</h4>
        <div className="buttons">
          {live !== "" && (
            <button className="live" onClick={() => redirect(live)}>
              Live Demo
            </button>
          )}
          {source !== "" && (
            <button className="source" onClick={() => redirect(source)}>
              Source Code
            </button>
          )}
        </div>
      </div>
    );
}

export default Carousal
