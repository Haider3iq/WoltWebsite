import React, { useEffect } from "react";

import "../../../css/increaseMenusWidget.css"

import {IoAddCircle, IoRemoveCircle, IoRemove, IoAdd} from "react-icons/io5";


export default function IncreaseMinusWidget({
    number, 
    minusIconSize, 
    plusIconSize, 
    numberSize, 
    circle,
    onPlusClick,
    onMinusClick
}) {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");


    // const minusIcon = document.getElementById('minusDivID');
   
    // const plusIcon = document.getElementById('plusDivID');

    // const numberDiv = document.getElementById('numberText');
  
    // useEffect(() => {
    //     if(minusIcon) {
    //         minusIcon.style.fontSize = minusIconSize
    //         plusIcon.style.fontSize = plusIconSize
    //         numberDiv.style.fontSize = numberSize
    //     }
    // }, [minusIcon])

    // useEffect(() => {
    //     if(numberDiv) {
    //         console.log("number",numberDiv)
    //         numberDiv.style.fontSize = numberSize
    //     }
    // }, [numberDiv])

    

    return(
        <div className="increaseMenusWidget">

                <div id="plusDivID" onClick={() => onPlusClick()} style={{fontSize: plusIconSize}} className="plusIcon">
                   {circle && <IoAddCircle/>}
                   {!circle && <IoAdd/>}
                </div>

                {number && <div  id="numberText" style={{fontSize: numberSize}} className="numberText">
                    {number ? number : 0}
                </div>}

                <div id="minusDivID" style={{fontSize: minusIconSize}} className="minusIcon"  onClick={() => onMinusClick()} >
                {circle && <IoRemoveCircle/>}
                {!circle && <IoRemove/>}
                </div>
        </div>
    )
}