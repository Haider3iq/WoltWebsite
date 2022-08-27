import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";

import { 
    IoHomeOutline, IoHome, 
    IoRestaurantOutline, IoRestaurant,
    IoStorefrontOutline, IoStorefront,
    IoSearchOutline, IoSearch,
    IoSettingsOutline, IoSettings,
    IoPersonOutline, IoPerson,
    IoLocationOutline, IoLocation
  } from "react-icons/io5";
  
  import { 
    RiUserLocationFill, RiUserLocationLine 
  } from "react-icons/ri";

  import "../../css/profileMenu.css"

  // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


  







 export default function ProfileMenu({commodities, activeIcon, setActiveIcon, setSectionID, scrollToElement,}){


	const [iconArray, setIconArray] = useState({})
	const [iconOnMount, setIconOnMount] = useState(0)
	const [stopMenuChange, setStopMenuChange] = useState(false)


	// useEffect(() => {
		
	// 	setActiveIcon(1)
	// }, [])

	function StopMenuChange() {
		setStopMenuChange(false)
	}

	const onClick = (i) => {
		
		setActiveIcon(i)
		// setStopMenuChange(false)
		// setStopMenuChangeOnScroll(false)
		// console.log("activeIcon", activeIcon)
		StopMenuChange()
	}






	// useEffect(() => {

	// 	if(scrollToElement){
	// 		console.log("this should scroll now", scrollToElement)
	// 		const element = document.getElementById(`item${scrollToElement}`)
			
	// 		if (window.matchMedia('(min-width: 1003px)').matches) {
			
	// 			element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	// 		} else if(!window.matchMedia('(min-width: 1003px)').matches){
	// 			element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
	// 		}
	// 	}
		
		
	

	// }, [scrollToElement])

		useEffect(() => {

			

		if(!stopMenuChange && scrollToElement || scrollToElement === 0){
			const horizontalMenu = document.getElementById(`profileMenu`)
			const element = document.getElementById(`item${scrollToElement + 1}`)
			console.log("element",element)

			setActiveIcon(scrollToElement)

			// console.log("this should scroll now", scrollToElement)
			if (window.matchMedia('(min-width: 1003px)').matches && element) {
			
				// horizontalMenu.scroll({left: element.offsetLeft / 2, behavior: 'smooth' })
			  horizontalMenu.scroll({top: element.offsetTop, behavior: 'smooth' })
			} else if(element && !window.matchMedia('(min-width: 1003px)').matches){
		
				horizontalMenu.scroll({left: element.offsetLeft / 2, behavior: 'smooth' })
			}
		}
		
		
	

	}, [scrollToElement, ])



	// useEffect(() => {
	// 	setSectionID(activeIcon + 1)
	// }, [activeIcon])
			  const prevScrollY = useRef(0);
			  const [goingUp, setGoingUp] = useState(false);
			
			  const onScroll = (e) => {
				alert(`e.target ${e.target}`)
			  };

			  const onItemClick = async (index, item) => {
				setStopMenuChange(true)

				const element = document.getElementById(`item${index + 1}`)
				const section = document.getElementById(`${item.category}`)
				const horizontalMenu = document.getElementById(`profileMenu`)
				
				// console.log("item over here", section.offsetTop - section.offsetHeight)
				window.scroll({top: section.offsetTop - section.offsetHeight, behavior: 'smooth' })
				// window.scroll({top: section.clientHeight * (index +1), behavior: 'smooth' })
				// section.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"});
		
				if (!window.matchMedia('(min-width: 1023px)').matches) {

					
					// section.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"});
						
					// 	 element.scrollIntoView({behavior: "instant", block: "nearest", inline: "center"});
					

					console.log("test",element.offsetLeft)
					// console.log(section.clientHeight)
					// console.log(section.clientHeight)
					
					
					horizontalMenu.scroll({left: element.offsetLeft / 2, behavior: 'smooth' })
					// test.scroll({left: 100, behavior: 'smooth'})
					// element.scrollIntoView({behavior: "instant", block: "nearest", inline: "center"});
						//  console.log("index is here: ", index)
						 onClick(index)
						//  console.log("item", item.category)
						
						//  setInterval(setSectionID(index + 1), 4000);
				} else {
					onClick(index)
					// setInterval(setSectionID(index + 1), 4000);
				}

		
				
				// 	onClick(index)
				
					
				// }
			
			  }
	





			  useEffect(() =>{	
				if(commodities) {
					// console.log("commodities: ", commodities)
				}
			  },[commodities])



	if(commodities && commodities?.length){
		return (
			<>
				  {/* <!-- Nav tabs --> */}
				<div id="profileMenu" className={'profileMenu'}>
	  
	  {commodities?.filter((value, index, self) =>
					  index === self.findIndex((it) => (
					  it.category === value.category
					  ))).map((data, i) => {
							
		  return (
	  
		  
			  <div id={`item${i + 1}`} onScroll={(e) => onScroll(e)} onClick={() => onItemClick(i, data)} key={i} className={activeIcon === i ? "activeNavLink" : !activeIcon === i ? "activeNavLink" : "profilecustomNavLink"}>
			  {/* <i className={`la la-angle-left`} /> */}
			  
			 {activeIcon !== data.category && 
			 <i className="un-active">
			 {i === 0 ? 
			  <div className="navigationIconDiv">
				{/* <IoHomeOutline/> */}
				<strong className="navigationTitle">{data.category}</strong>
			  </div> : 
			  i === 1 ? 
			  <div className="navigationIconDiv">
				{/* <IoRestaurantOutline/> */}
				<strong className="navigationTitle">{data.category}</strong>
			  </div> : 
			  i === 2 ? 
			  <div className="navigationIconDiv">
				{/* <IoStorefrontOutline/> */}
				<strong className="navigationTitle">{data.category}</strong>
			  </div> : 
			  <div className="navigationIconDiv">
				{/* <RiUserLocationLine/> */}
				<strong className="navigationTitle">{data.category}</strong>
			  </div>
			  } 
			  </i>}
	  
			  {activeIcon === data.category && <i className="active">
			  {i === 0 ? 
			  <div className="navigationIconDiv">
				{/* <IoHome/> */}
				<strong className="navigationTitle">{activeIcon}</strong>
			  </div> : 
			  i === 1 ? 
			  <div className="navigationIconDiv">
				{/* <IoRestaurant/> */}
				<strong className="navigationTitle">{activeIcon}</strong>
			  </div> : 
			  i === 2 ? 
			  <div className="navigationIconDiv">
				{/* <IoStorefront/> */}
				<strong className="navigationTitle">{activeIcon}</strong>
			  </div> : 
			  <div className="navigationIconDiv">
				{/* <RiUserLocationFill/> */}
				<strong className="navigationTitle">{activeIcon}</strong>
			  </div>
			  } 
			  </i>}
	  
			  </div>
		)})}
		
		</div>
		
			</>
		)
	} else {
		return null
	}


  }

 