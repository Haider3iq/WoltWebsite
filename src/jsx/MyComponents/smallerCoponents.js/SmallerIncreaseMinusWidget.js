import React, { useEffect } from "react";

import "../../../css/smallerIncreaseMenusWidget.css"

import {IoAddCircle, IoRemoveCircle, IoRemove, IoAdd} from "react-icons/io5";


export default function SmallerIncreaseMinusWidget({number, setIncrease, setReduce, minusIconSize, plusIconSize, numberSize, circle}) {
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
        <div className="smallerIncreaseMenusWidget">

                <div id="plusDivID" style={{fontSize: plusIconSize}} onClick={() => setIncrease()} className="plusIcon">
                   {circle && <IoAddCircle/>}
                   {!circle && <IoAdd/>}
                </div>

                {number && <div  id="numberText" style={{fontSize: numberSize}} className="numberText">
                    {number ? number : 0}
                </div>}

               {!number && <i className="verticalLineBetween"/>}

                <div id="minusDivID" style={{fontSize: minusIconSize}} className="minusIcon" onClick={() => setReduce()} >
                {circle && <IoRemoveCircle/>}
                {!circle && <IoRemove/>}
                </div>
        </div>
    )
}