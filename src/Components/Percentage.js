import React from 'react'

function Percentage({title, percent, color, width}) {
    return (
      <div class="percentage">
        <h3>
          {title} - {percent}
        </h3>
        <div className="perc">
          <div style={{ backgroundColor: color, width: width }}></div>
        </div>
      </div>
    );
}

export default Percentage
