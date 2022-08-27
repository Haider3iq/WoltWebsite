import React, { useEffect,useState } from "react";


import "../../../css/customerAddressesModal.css"

import { IoEllipse, IoCheckmarkCircle, IoCloseCircle, IoLocation } from "react-icons/io5";


const data = [
  {
    address: 'Olympiakatu C 33',
    id: '/dashboard',
  },
  {
    address: 'Vaasanpuistikko 13 F 40',
    id: '/restaurants',
  },
  {
    address: 'ALkulanPolku 7 F 62',
    id: '/Stores',
  },

  {
    address: 'Vanhanvaasankatu 67',
    id: '/dashboard',
  },
  {
    address: 'Ratatie 43 as 30 ',
    id: '/restaurants',
  
  },
  {
    address: 'Porinkatu 20 D 31',
    id: '/Stores',
  },
   
  ];

export default function CustomerAddressesModal({aditionalCosts, setAddress,}) {



  const fakeProfileImage = "https://burgerking.fi/wp-content/uploads/BK_Pride_kadet_1200x800-1024x683.jpg";
  





  
	const [activeIcon, setActiveIcon] = useState(0)
	const [iconOnMount, setIconOnMount] = useState(0)


	useEffect(() => {

	}, [])

	const onClick = (i) => {
		setActiveIcon(i)
		console.log("activeIcon", activeIcon)

	}
  
	  
  
			 

			  const onItemClick = (index, address) => {
				
	
						const element = document.getElementById(`item${index}`)
						element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            setAddress(address)
						onClick(index)
      
	

			  }
	


  




  return (
    <div className="CustomerAddressesModal">

    <div className="customerAddressesDiv">
   {data.map((data, index) => {
                      const price = index * 3.333
                      return (
                          <div id={`item${index}`} onClick={() => onItemClick(index, data.address)} key={index} className={activeIcon === index ? "activeNavLink" : !activeIcon && iconOnMount === index ? "activeNavLink" : "customNavLink"}>
                          {/* <i className={`la la-angle-left`} /> */}
                          
                         {activeIcon !== index && 
                         <i className="un-active">
                      
                          <div className="navigationIconDiv">
                            
                            <div className="unAcitveIcon">
    
                            </div>
                            <strong className="navigationTitle">
                                {data?.address}
                                {/* for real world put additionalCosts without the (!) */}
                                {aditionalCosts &&<div>
                                {`+${price.toFixed(2)} €`}
                                </div>}
                                </strong>
                          </div>
                          </i>}
                  
                          {activeIcon === index && <i className="active">
                         
                          <div className="navigationIconDiv">
                        
                               <IoLocation  className="acitveIcon" /> 
                  
                            {/* <div className="acitveIconClose">
                               <IoCloseCircle/> 
                            </div> */}
                            <strong className="navigationTitle">
                                {data?.address}
                                {/* for real world put additionalCosts without the (!) */}
                                {aditionalCosts &&<div>
                                {`+${price.toFixed(2)} €`}
                                </div>}
                            </strong>
                          </div>
                          </i>}
                  
                          </div>
                    )})}
         </div>
    </div>
  );
}

