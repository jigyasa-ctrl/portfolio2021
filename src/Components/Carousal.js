import React from 'react'

function Carousal({title, desc, height}) {
    return (
        <div class="carousal" style={{height: height}}>
            <img src="https://www.pngkey.com/png/full/249-2492118_web-development-website-maintenance-icon-png.png"></img>
            <h1>{title}</h1>
            <h4>{desc}</h4>
        </div>
    )
}

export default Carousal
