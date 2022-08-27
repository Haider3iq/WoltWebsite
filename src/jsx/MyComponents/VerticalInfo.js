import React, { useEffect, useState } from "react";
import { IoChevronForward , IoChevronBack, IoMap, IoInformationCircle, IoPhonePortrait, IoTime} from "react-icons/io5";

import "../../css/verticalInfo.css"
import PopupWidget from "./smallerCoponents.js/PopupWidget";

import { useSelector } from 'react-redux';



const phoneNumberText = "Note if you change or edit your number you'll be asked to verify it!"
const nameText = "You can change your name as much as it satisfies you"
const emailText = "Note if you change or edit your email you'll be asked to verify it!"
const paymentText = "You can change this anytime or remove it instantly forever"



export default function VerticalInfo({onButtonClick}) {


    const { auth, vendorInfo, vendorCommodities}= useSelector(state => state.AuthReducer)
    const [openingTimes, setOpeningTimes] = useState([])
    const [vendorCategory, setVendorCategory] = useState(vendorCommodities ? vendorCommodities : [])

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
        if(vendorInfo && vendorInfo.openingTimes?.length > 0) {

          const currentFetchedTimes = JSON.parse(vendorInfo.openingTimes)

          const map = {
            'monday': 1,'tuesday': 2,'wednesday': 3,'thursday': 4,'friday': 5,'saturday': 6,
            'sunday': 7
         };
         currentFetchedTimes.sort((a, b) => {
            return map[a.day] - map[b.day];
         });

          setOpeningTimes(currentFetchedTimes)
     
        }
      }, [vendorInfo])



    window.onload = trackWindowScroll();

    function restFunction() {

        setName("");
        setText("");
        setPhoneNumber("");
        setEmail("");
        setPayment("")
    }



    return (
        <div className="verticalInfo">

        {/* <div className="goToPreviousPageDiv">
            <IoChevronBack className="goToPreviousPageIcon"/>
        </div> */}


    
       {/* {text !== null && text.trim() !== ""  && <PopupWidget text={text} name={name} phoneNumber={phoneNumber} email={email} payment={payment} cancel={restFunction}/>} */}

        <div className="verticalInfoInnerDiv">




           


            <div className="firstWidget">

                    <div className="mainTitle">
                            {"Vendor information"}
                    </div>



                    {/* <div className="imageRow">
                        
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
                    </div> */}

                    <div>
                        
                    {/* <div onClick={() => {setName(auth?.name); setText(nameText)}} className="row clickable">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Name"}
                                    </div>
                                    <div className="rowSubTitle">
                                        {auth?.name}
                                    </div>
                            </div>
                        <IoChevronForward className="arrowIcon"/>
                    </div> */}

                    <div className="row clickable">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Address"}
                                    </div>
                                    <div className="rowSubTitle">
                                    {vendorInfo?.address}
                                    </div>

									<div className="rowTitle">
                                    {vendorInfo?.postNumber + " " + vendorInfo?.city}
                                    </div>
                            </div>
                        <IoMap className="arrowIcon"/>
                    </div>

                    <div onClick={() => {setPhoneNumber(auth?.phoneNumber); setText(phoneNumberText)}}  className="row clickable">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"Phone number"}
                                    </div>
                                    <div className="rowSubTitle">
                                    {vendorInfo?.phoneNumber}
                                    </div>
                            </div>
                        <IoPhonePortrait className="arrowIcon"/>
                    </div>


                    <div className="mainTitle">
                            {"Note"}
                    </div>

                    <div className="row clickable">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {"If you have any questions about the products, please contact the store for more information"}
                                    </div>
                                 
                            </div>
                        {/* <IoChevronForward className="arrowIcon"/> */}
                    </div>



					
                    <div onClick={() => onButtonClick()} className="buttonRow">
                            <div className="rowTitlesDiv">
                                    <div className="rowTitle">
                                        {""}
                                    </div>
                                    <div className="buttonRowSubTitle">
                                        {"All vendor info"}
                                    </div>
                            </div>
                        <IoInformationCircle className="arrowIcon"/>
                    </div>


					<div className="mainTitle">
                            {"Opening times"}
                    </div>


                    {openingTimes.length > 0 && openingTimes?.filter((value, index, self) =>
                    index === self.findIndex((it) => (
                    it.time === value.time
                    ))).map((item, index) => {


                        let toDay = openingTimes.filter((it) => it.time === item.time && it.day !== item.day)
                        toDay = toDay[toDay.length -1]

                        return (
                        <div key={index} className="row-time clickable">
                        <div className="rowTitlesDiv">
                                <div className="rowTitle">
                                {`${item.day} ${toDay ? `${"- " +toDay.day}` : ""}`}
                                </div>
                                <div className="rowSubTitle">
                                    {item.time}
                                </div>
                        </div>

                        <IoTime className="arrowIcon"/>
                        </div>

                        )
                        })}

                 


                    <div className="mainTitle">
                            {"Categories"}
                    </div>

                    <div className="rowWords">
                
                {vendorCommodities.length > 0 && vendorCommodities?.filter((value, index, self) =>
                index === self.findIndex((it) => (
                it.category === value.category
                ))).map((item, index) => {

                  return(
                  <div key={index} className="categoriesDiv">
                    <div className="categoryRowSubTitle">
                    {item?.category}
                    </div>
                  </div>
                  )
                })}
							
                    </div>




                </div>
        </div>

    </div>
    </div>
    )
}