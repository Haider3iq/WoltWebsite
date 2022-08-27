import React, { useEffect } from "react";

import "../../../css/popUpWidget.css"

import {IoAddCircle, IoRemoveCircle, IoRemove, IoAdd, IoCheckmark, IoClose} from "react-icons/io5";


export default function PopupWidget({
    name,text, phoneNumber
}) {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");


    

    return(
        <div className="popUpWidgetMainDiv">

                <dvi className="widget">
                        <div className="title">
                            {"Edit or change your name"}
                        </div>

                        <div>
                            <div
                            className="customTextInput"
                            ></div>
                        <input
                        type="text"
                        className="customTextInput"
                        placeholder={name ? name :  "Al-Tameemi Hayder"}
                        />
                        </div>


                        <div className="subText">
                        {text ? text : "you can change your name as much as you like as far as you are online."}
                        </div>

                        <div className="buttons">

                                <div className="buttonDiv">
                                    {"Save changes"}
                                    <IoCheckmark className="icon"/>
                                </div>

                                <div className="buttonDivClose">
                                    {"Cancel"}
                                    <IoClose className="icon"/>
                                </div>
                        </div>
                </dvi>
                
        </div>
    )
}