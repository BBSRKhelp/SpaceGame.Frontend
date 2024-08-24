import React from "react";

const IconOre = ({ oreList }) => {
    return(
        oreList.map((el) => (
            <div key={el} className={`viewOre${el}`}>
                <div className={`iconOre${el}`}></div>
                <div className={`amountOre${el}`}>000</div>
            </div>
        ))
    );
}

export default IconOre