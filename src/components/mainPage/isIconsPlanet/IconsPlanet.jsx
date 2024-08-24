import React from "react";
import { ReactComponent as NextPlanet1 } from "../../../assets/Image/nextPlanet/nextPlanet1.svg";
import { ReactComponent as NextPlanet2 } from "../../../assets/Image/nextPlanet/nextPlanet2.svg";
import { ReactComponent as NextPlanet3 } from "../../../assets/Image/nextPlanet/nextPlanet3.svg";
import { ReactComponent as NextPlanet4 } from "../../../assets/Image/nextPlanet/nextPlanet4.svg";
import { ReactComponent as NextPlanet5 } from "../../../assets/Image/nextPlanet/nextPlanet5.svg";
import { ReactComponent as NextPlanet6 } from "../../../assets/Image/nextPlanet/nextPlanet6.svg";
import { ReactComponent as NextPlanet7 } from "../../../assets/Image/nextPlanet/nextPlanet7.svg";

const planets = {
    NextPlanet1,
    NextPlanet2,
    NextPlanet3,
    NextPlanet4,
    NextPlanet5,
    NextPlanet6,
    NextPlanet7,
};

const IconsPlanet = ({ name }) => {
    return planets[name] && React.createElement(planets[name]); 
  };
  
export default IconsPlanet;