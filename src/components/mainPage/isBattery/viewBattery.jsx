import React from "react";

const Battery = () => {
return(
    <div className="viewBattery">
        <div id="progressbar">
            <div className="countCharge">5/10</div>
            <div className="interactiveCharge"></div>
            <div className="iconBattery"></div>
        </div>
        <div id="tipOfBattery"></div>
    </div>
)
}

export default Battery;