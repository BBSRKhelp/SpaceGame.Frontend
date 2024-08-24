import React from "react";
import IconsPlanet from "./IconsPlanet";

const ViewNextPlanets = () => {
    const partNamePlanets = ["1", "2", "3", "4", "5", "6", "7"];
    
    return(
        <div className="nextPlanets">
            {partNamePlanets.map((el) => (
                <div key={el} className={`planet${el} planetMainPage`}>
                    <IconsPlanet name={`NextPlanet${el}`} /> 
                </div>
            ))}
        </div>
)}

export default ViewNextPlanets;