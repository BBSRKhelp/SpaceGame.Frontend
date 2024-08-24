import React from "react";

const AmountCoin = ({ coinValue }) => {
    return(
        <div className="coinCounter"><div className="nfoCoin"></div>{coinValue}</div>
    )
}

export default AmountCoin;