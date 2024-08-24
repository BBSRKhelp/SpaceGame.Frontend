import React from "react";

const ButtonMenu = ({ activeBtn, setActiveBtn }) => {
    const classNameBtn = ["mainButton", "upgradeButton",
    "resourceStoreButton", "tasksButton", "walletButton"]
    
    return(
        <div className="buttonMenu">
            {classNameBtn.map((el, index) => (
                <div onClick={() => setActiveBtn(index)} className={`${el}${index === activeBtn ? " active" : ''}`} key={index} >
                </div>
            ))}
        </div>
    )
}

export default ButtonMenu;