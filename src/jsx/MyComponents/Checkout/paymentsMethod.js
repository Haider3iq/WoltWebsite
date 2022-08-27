import React, { useEffect,useState } from "react";


import "../../../css/selectableItems.css"

import { IoEllipse, IoCheckmarkCircle, IoCloseCircle, IoEllipseOutline  } from "react-icons/io5";


const data = [
	{
	  name: 'Visa Payment',
	  activeIcon: 'IoRestaurantOutline',
	  id: 'visa',
	  xlinkHref:
		"#icon-visa",
	},
	{
	  name: 'PayPal',
	  icon: 'user',
	  id: 'paypal',
	  xlinkHref:
		"#icon-paypal",
	},
	{
	  name: 'Master Card',
	  icon: 'phone',
	  id: 'mastercard',
	  xlinkHref:
		"#icon-mastercard",
	},
	 
  ];


export default function PaymentMethodList({rest,aditionalCosts, }) {



  const fakeProfileImage = "https://burgerking.fi/wp-content/uploads/BK_Pride_kadet_1200x800-1024x683.jpg";


  
	const [activeIcon, setActiveIcon] = useState(0)
	const [iconOnMount, setIconOnMount] = useState(0)


	useEffect(() => {
        
        if(rest) {
            setActiveIcon(0)
        }
    }, [rest])

	const onClick = (i) => {
		setActiveIcon(i)
		console.log("activeIcon", activeIcon)
	}
  
	  
  
			 

			  const onItemClick = (index) => {
				
	
						const element = document.getElementById(`item${index}`)
						element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
						onClick(index)
      
	

			  }
	


  




  return (
    <div className="paymentMethodListDiv">


    
   {data.map((data, index) => {
                      const price = index * 3.333
                      return (
                        <div onClick={() => onClick(index + 1)} class={activeIcon === index + 1?"activeDiv" : "unActiveDiv"} key={index}>
                            <div class="form__radio">
                                <div className="formUnderDiv" for={data.id}>
                                    {activeIcon === index +1 ? <IoEllipse/> : <IoCheckmarkCircle/> }
									<span className="formItemTitle">
									{data.name}
									</span>
                                    
                                </div>
                            <div checked id={data.id} className="paymentMethod">
									{ activeIcon === index + 1 ? <IoCheckmarkCircle/> : <IoEllipseOutline/>}
							</div>
                            </div>
                        </div>
                )})}
    </div>
  );
}

