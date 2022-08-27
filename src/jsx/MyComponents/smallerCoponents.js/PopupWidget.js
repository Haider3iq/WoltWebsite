import React, { useEffect, useState } from "react";

import "../../../css/popUpWidget.css"
import PaymentMethodList from "../Payment/PaymentMethodList";

import { useSelector , useDispatch} from 'react-redux';
import { store } from "../../../store/store"
import {setCustomerData} from "../../../store/actions/AuthActions"

import {IoAddCircle, IoRemoveCircle, IoRemove, IoAdd, IoCheckmark, IoClose} from "react-icons/io5";


export default function PopupWidget({
    text, name, phoneNumber, email, cancel, payment
}) {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");


    const [inputName, setInputName] = useState("")
    const [inputPhoneNumber, setInputPhoneNumber] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [paymentName, setPaymentName] = useState("")


    const { auth }= useSelector(state => state.AuthReducer)


    const data = auth;



    const onSave = () => {

        if(name){
            data.name = inputName
            
        }
        else if(email) {
            data.email = inputEmail
        } else if(phoneNumber) {
            data.phoneNumber = inputPhoneNumber
        } else if(payment) {
            const currentData = auth
			currentData.prefferedPayment = paymentName
			store.dispatch(setCustomerData(currentData))
			console.log("auth", auth)
        } 
        store.dispatch(setCustomerData(data))
        cancel()
    }


    

    return(
        <div className="popUpWidgetMainDiv">

                <div className="widget">
                        <div className="title">
                            {`Edit or change your ${name ? "name" : email ? "email" : phoneNumber ?"phone number" : payment ? payment : "error"}`}
                        </div>

                        {phoneNumber && <div className="inputRow">
                    
                       <div  className="numberText">
                            {"+358"}
                        </div>

                        <input
                        onKeyUp={it => setInputPhoneNumber(it.target.value)}
                        type="text"
                        className="phoneNumberTextInput"
                        placeholder={phoneNumber ? phoneNumber :  "1 2345 6789"}
                        />
                        </div>}

                       {email && <input
                       onKeyUp={it => setInputEmail(it.target.value)}
                        type="text"
                        className="customTextInput"
                        placeholder={email ? email :  "example@eamil.com"}
                        />}

                        {name && <input
                        onKeyUp={it => setInputName(it.target.value)}
                        type="text"
                        className="customTextInput"
                        placeholder={name ? name :  "add a name"}
                        />}


                        {payment && <PaymentMethodList rest={false} setPaymentName={setPaymentName}/>}


                        {text && <div className="subText">
                        {text}
                        </div>}

                        <div  className="buttons">

                                <div onClick={onSave} className="buttonDiv">
                                    {"Save changes"}
                                    <IoCheckmark className="icon"/>
                                </div>

                                <div onClick={() => cancel()} className="buttonDivClose">
                                    {"Cancel"}
                                    <IoClose className="icon"/>
                                </div>
                        </div>
                </div>
                
        </div>
    )
}