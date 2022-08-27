import React, { useEffect, useState } from "react";
import { IoChevronForward , IoChevronBack} from "react-icons/io5";

import "../../../css/settingsPage.css"
import PopupWidget from "../smallerCoponents.js/PopupWidget";

import { useSelector } from 'react-redux';



const phoneNumberText = "Note if you change or edit your number you'll be asked to verify it!"
const nameText = "You can change your name as much as it satisfies you"
const emailText = "Note if you change or edit your email you'll be asked to verify it!"
const paymentText = "You can change this anytime or remove it instantly forever"



export default function SettingsPage() {

    const { auth }= useSelector(state => state.AuthReducer)

    const fakeProfileImage = "https://burgerking.fi/wp-content/uploads/BK_Pride_kadet_1200x800-1024x683.jpg";

    const [text, setText] = useState("");
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [payment, setPayment] = useState("");



    function trackWindowScroll () {

		const imageDiv = document.getElementById('profileImage');

		if(imageDiv !== null) {
			imageDiv.style.backgroundImage = `url("${fakeProfileImage}")`
			// console.log("image: ", imageDiv)
		}
    }



    useEffect(() => {
        document.body.style.overflow ="hidden"
    }, [])


    window.onload = trackWindowScroll();

    function restFunction() {

        setName("");
        setText("");
        setPhoneNumber("");
        setEmail("");
        setPayment("")
    }



    return (
        <div className="SettingsMain">

        {/* <div className="goToPreviousPageDiv">
            <IoChevronBack className="goToPreviousPageIcon"/>
        </div> */}


    
       {text !== null && text.trim() !== ""  && <PopupWidget text={text} name={name} phoneNumber={phoneNumber} email={email} payment={payment} cancel={restFunction}/>}

        <div className="settingsPageMainDiv">




           


            <div className="firstWidget">

                    <div className="mainTitle">
                            {"Settings"}
                    </div>



                    <div className="imageRow">
                        
                        <div id="profileImage" className='profileImage'/>
                            <div className="nameRow" >
                                    <div className="nameTitle">
                                        {auth?.name}
                                    </div>
                                    <div className="nameSub">
                                        {`23 orders`}
                                    </div>
                            </div>
                            <IoChevronForward className="arrowIcon"/>
                    </div>

                    <div>
                        
                    <div onClick={() => {setName(auth?.name); setText(nameText)}} className="row">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Name"}
                                    </div>
                                    <div className="rowSubTitle">
                                        {auth?.name}
                                    </div>
                            </div>
                        <IoChevronForward className="arrowIcon"/>
                    </div>

                    <div className="row">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Addresses"}
                                    </div>
                                    <div className="rowSubTitle">
                                        {auth?.addresses[0]?.address}
                                    </div>
                            </div>
                        <IoChevronForward className="arrowIcon"/>
                    </div>

                    <div onClick={() => {setPhoneNumber(auth?.phoneNumber); setText(phoneNumberText)}}  className="row">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Phone number"}
                                    </div>
                                    <div className="rowSubTitle">
                                        {"0" + auth?.phoneNumber}
                                    </div>
                            </div>
                        <IoChevronForward className="arrowIcon"/>
                    </div>


                    <div onClick={() => {setEmail(auth?.email); setText(emailText)}}   className="row">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Email address"}
                                    </div>
                                    <div className="rowSubTitle">
                                        {auth?.email}
                                    </div>
                            </div>
                        <IoChevronForward className="arrowIcon"/>
                    </div>



                    <div className="mainTitle">
                            {"Payment"}
                    </div>

                    <div onClick={() => {setPayment("default payment method"); setText(paymentText)}} className="row">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Payment methods"}
                                    </div>
                                    <div className="rowSubTitle">
                                        {"Set a default payment method or add a new one"}
                                    </div>
                            </div>
                        <IoChevronForward className="arrowIcon"/>
                    </div>




                    <div className="mainTitle">
                            {"Other"}
                    </div>

                    <div className="row">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Support"}
                                    </div>
                                    <div className="rowSubTitle">
                                        {"Chat with our live support"}
                                    </div>
                            </div>
                        <IoChevronForward className="arrowIcon"/>
                    </div>


                    <div className="row">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Terms of use"}
                                    </div>
                                    <div className="rowSubTitle">
                                        {"Read our terms of use"}
                                    </div>
                            </div>
                        <IoChevronForward className="arrowIcon"/>
                    </div>

                </div>
        </div>

    </div>
    </div>
    )
}