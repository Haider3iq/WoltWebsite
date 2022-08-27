import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";





import "../../../css/restaurantsProfile.css"
import "../../../css/customHeader.css"
import "../../../css/scrollbar.css"
import "../../../css/checkoutPage.css"



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CheckoutModal from "./CheckoutModal";









export default function RestaurantProfile () {

	const [showModal, setShowModal] = useState(false);
	const [choosenOrderData,setChoosenOrderData] = useState({});
	const [cridetCardInfo, setCridetCardInfo] = useState({});


	// const PaymentMethodsList = () => {

	// 	return (
	// 		<div class="form__radios">
	// 			<div class="form__radio">
	// 			<label for="visa"><svg class="icon">
	// 				<use xlinkHref="#icon-visa" />
	// 				</svg>Visa Payment</label>
	// 			<input checked id="visa" name="payment-method" type="radio" />
	// 			</div>

	// 			<div class="form__radio">
	// 			<label for="paypal"><svg class="icon">
	// 				<use xlinkHref="#icon-paypal" />
	// 				</svg>PayPal</label>
	// 			<input id="paypal" name="payment-method" type="radio" />
	// 			</div>

	// 			<div class="form__radio">
	// 			<label for="mastercard"><svg class="icon">
	// 				<use xlinkHref="#icon-mastercard" />
	// 				</svg>Master Card</label>
	// 			<input id="mastercard" name="payment-method" type="radio" />
	// 			</div>
	// 		</div>
	// 	)
	// }

    
		
	
  
	

	
		
  
  
	return (
		<>
			<CheckoutModal data={choosenOrderData}  setShowModal={() => setShowModal(it => !it)} showModal={true}/>
		</>
	);
  }

