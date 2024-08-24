import React from "react";
import IconOre from "./iconOre";
const AmountOre = () => {
    const oreList = ["1", "2", "3", "4", "5"];
    return(
        <div className="oreCounter">
            <IconOre oreList={oreList} />
        </div>
        
    )
}

export default AmountOre;