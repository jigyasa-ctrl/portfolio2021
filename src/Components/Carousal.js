import React from 'react'

function Carousal({title, desc, live, source, height}) {
    const redirect = (link )=> {
        
      window.location.href=link
    }
    return (
      <div id="carousal" class="carousal" style={{ height: height }}>
        <img src="https://www.pngkey.com/png/full/249-2492118_web-development-website-maintenance-icon-png.png" />
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
