import React, { useEffect,useState } from "react";
import { Link, useHistory } from "react-router-dom";


import card1 from '../../images/task/img1.jpg';
import card2 from '../../images/task/img2.jpg';
import card3 from '../../images/task/img3.jpg';
import card4 from '../../images/task/img4.jpg';
import card5 from '../../images/task/img5.jpg';
import card6 from '../../images/task/img6.jpg';
import card7 from '../../images/task/img7.jpg';
import card8 from '../../images/task/img8.jpg';



import "../../css/restaurantsProfile.css"
import "../../css/customHeader.css"
import "../../css/scrollbar.css"

import HorizontalFoodList from "./HorizontalFoodList";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProfileMenu from "./ProfileMenu";
import VerticalFoodList from "./VerticalFoodList";
import AddToOrderModal from "./AddToOrderModal";

import { IoInformation, IoTime, IoFastFood, IoChevronBack} from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import SearchComponent from "./SearchComponent";
import VerticalInfo from "./VerticalInfo";
import RestaurantInfo from "./RestaurantInfo";

import { useSelector } from 'react-redux';
import { fetch_vendor_request } from "../Functions/functions";
import ViewCartButton from "./smallerCoponents.js/ViewCartButton";
import { setOrderInfo } from "../../store/actions/AuthActions";
import CheckoutModal from "./Checkout/CheckoutModal";
import CheckoutWidget from "./CheckoutWidget";


const fakeBackgroundImage = "https://imageproxy.wolt.com/wolt-frontpage-images/cities/helsinki/sections/85766f8c-af33-11ec-b32b-3a49145f92e5_giftcard.jpg?w=960"

const fakeProfileImage = "https://burgerking.fi/wp-content/uploads/BK_Pride_kadet_1200x800-1024x683.jpg";





const commodities1 = [
	{
		itemName: 'Stores',
		icon: 'phone',
		path: '/Stores',
		category: "meals",
		content:
		  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
	  },
	  {
		  itemName: 'Stores',
		  icon: 'phone',
		  path: '/Stores',
		  category: "meals",
		  content:
			'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
		},
		{
		  itemName: 'Stores',
		  icon: 'phone',
		  path: '/Stores',
		  category: "meals",
		  content:
			'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
		},
	{
	  itemName: 'Home',
	  activeIcon: 'IoRestaurantOutline',
	  path:  '/' || '/dashboard',
	  category: "burgers",
	  content:
		'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
	 },
	 {
		itemName: 'Home',
		activeIcon: 'IoRestaurantOutline',
		path:  '/' || '/dashboard',
		category: "burgers",
		content:
		  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
	   },
	   {
		itemName: 'Home',
		activeIcon: 'IoRestaurantOutline',
		path:  '/' || '/dashboard',
		category: "burgers",
		content:
		  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
	   },
	{
	  itemName: 'Restaurants alskdjf ',
	  icon: 'user',
	  path: '/restaurants',
	  category: "pizzas",
	  content:
		"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	},
	{
		itemName: 'Restaurants alskdjf ',
		icon: 'user',
		path: '/restaurants',
		category: "pizzas",
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Restaurants alskdjf ',
		icon: 'user',
		path: '/restaurants',
		category: "pizzas",
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },

	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "Sandwiches",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "Sandwiches",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "Sandwiches",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "garnish",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "garnish",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "garnish",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "desserts",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "desserts",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "desserts",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "sides",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "sides",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "sides",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "drinks",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "drinks",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "drinks",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
	  {
		itemName: 'Nearby',
		icon: 'envelope',
		category: "drinks",
		path: '/task',
		content:
		  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	  },
  ]

const menuData = [
	{ 
		id:1, image: card1, Cust_Id:"01234",  Date_Join:"19/02/2021", 
		Cust_Name: "Munaroh Steffani", Location:"India"
	},
	{ 
		id:2, image: card2, Cust_Id:"01235", Date_Join:"20/03/2021", 
		Cust_Name: "Geovanny Anderson", 	Location:"London " 
	},
	{ 
		id:3, image: card3, Cust_Id:"01236", Date_Join:"21/04/2021", 
		Cust_Name: "Louis Ali", Location:"Afghanistan" 
	},
	{ 
		id:4, image: card4, Cust_Id:"01237", Date_Join:"22/05/2021", 
		Cust_Name: "Marquezz", Location:"Belgium" 
	},
	{ 
		id:5, image: card5, Cust_Id:"01238", Date_Join:"23/06/2021", 
		Cust_Name: "Richard ", Location:"Colombia" 
	},
	{ 
		id:6, image: card6, Cust_Id:"01239", Date_Join:"24/07/2021", 
		Cust_Name: "Andrew Stevano",  	Location:"Czechia"
	},
	{ 
		id:7, image: card7, Cust_Id:"01240", Date_Join:"25/08/2021", 
		Cust_Name: "Cathenna ",  Location:"El Salvador"
	},
	{ 
		id:8, image: card8, Cust_Id:"01241", Date_Join:"26/09/2021", 
		Cust_Name: "Hrisovalantis ",  	Location:"Guatemala"
	} 
];





export default function RestaurantProfile () {
	
	
	const { vendorCommodities, vendorInfo, orderInfo  }= useSelector(state => state.AuthReducer)
	
	
	
	const [commodities, setCommodities] = useState();
	const [showProductModal, setShowProductModal] = useState(false);
	const [showInfoModal, setShowInfoModal] = useState(false);
	const [choosenOrderData,setChoosenOrderData] = useState({});
	const [sectionID, setSectionID] = useState(null);
	const [scrollToElement, setScrollToElement] = useState(null)
	const [vendorInformation, setVendorInformation] = useState(null);
	const [stopMenuChangeOnScroll, setStopMenuChangeOnScroll] = useState(false)
	const [cartButtonTop, setCartButtonTop] = useState(false);

    const [activeIcon, setActiveIcon] = useState(0)

	const [today, setToday] = useState(0)

	const history = useHistory();





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

			const d = new Date();
          setToday(currentFetchedTimes[0])

        }
      }, [vendorInfo])

	
    


  

	// useEffect(() => {
	//     // console.log("choosen data: ", choosenOrderData);
	// 	const div = document.getElementById('restaurantProfileDiv');
	// 	if(showProductModal) {
			
	// 		div.style.position= "fixed";
	// 	} else {
	// 		div.style.position= "relative";
	// 		div.style.height= "auto";
	// 	}
	// }, [showProductModal])


	useEffect(() => {
		if(vendorInfo) {
			// console.log("vendorInfo", vendorInfo)
			setVendorInformation(vendorInfo);
		} 
		if(vendorCommodities) {
			// console.log("vendor commodities", vendorCommodities)
			setCommodities(vendorCommodities)
		}
		
	}, [vendorCommodities, vendorInfo])



	useEffect(() => {
		fetch_vendor_request(null)
	}, [])

	let backgroundColor = "";
	const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
	if (darkThemeMq.matches) {
	backgroundColor = "#393F48"
	} else {
	backgroundColor = "#F9F9F9"
	}


	// const test = commodities?.filter((value, index, self) =>
	// index === self.findIndex((it) => (
	// it.category === value.category
	// ))).map((it) => it.category)


	useEffect(() => {
		
	}, [])



	let testData = []

	useEffect(() => {

		if(commodities) {
			// console.log("commodities", commodities)
			for(let i = 0; i <= commodities?.length; i++ ) {
				const section = document.getElementById(`${commodities[i]?.category}`);
				
				if(section) {
				  
					if(i < 0){
						// testData.push(section.clientHeight)
						testData.push(section.offsetTop - section.offsetHeight)
						
					} else {
						// testData.push(section.clientHeight * (i + 1))
						testData.push((section.offsetTop - section.offsetHeight) * (i + 1) )
					}
				   
				//    console.log("clinet Height",  testData)
				// console.log("here", testData[i])
				//    console.log("clinet Height2",  testData[0])
				}
				// console.log("section", testData[3])
			}
		}
	},[commodities])
	





	// useEffect(() => {
		
		
	
	// }, [section])



	useEffect(() => {
		if(orderInfo && orderInfo.length > 0  && !showProductModal) {
			setCartButtonTop(true)
		} else if(showProductModal) {
			setCartButtonTop(true)
		}
	}, [orderInfo])




	
		
	const [scrollValue, setScrollValue] = useState(0)
	
	function trackWindowScroll () {
		
	const section = document.getElementById(`${"Shawarma"}`)
		if(section){
			// console.log("item over here",section.clientHeight *(3 + 1))
			// window.scroll({top: section.clientHeight * (2 + 1), behavior: 'smooth' })
		}

		const imageDiv = document.getElementById('profileImage');

		if(imageDiv !== null) {
			imageDiv.style.backgroundImage = `url("${vendorInfo?.logo}")`
			// console.log("image: ", imageDiv)
		}


		const addToOrderModalDiv = document.getElementById("addToOrderModalDiv")
		const parentScroll = document.getElementById("parentScroll");

	
	
		const viewCartButtonDiv = document.querySelector(".bottomViewCartButton .viewCartButtonDiv")
		

		if(viewCartButtonDiv && orderInfo && orderInfo.length > 0 && !showProductModal) {
			// setCartButtonTop(true)
			viewCartButtonDiv.style.transform ="translate(-50%, 0)"
		} else if(showProductModal) {
			viewCartButtonDiv.style.transform ="translate(-50%, 130%)"
		}
	

		// if(showProductModal && addToOrderModalDiv && parentScroll) {
		// 	addToOrderModalDiv.style.display = "flex"
		// 	parentScroll.style.transform = "translateY(0)"
		// } else if(!showProductModal && addToOrderModalDiv && parentScroll) {
			
		// 	parentScroll.style.transform = "translateY(100%)"
		// 	if(parentScroll.style.transform = "translateY(100%)") {
		// 		addToOrderModalDiv.style.display = "none"
		// 	}
		// }



		
		


		window.addEventListener("scroll", function(event) {

			const el = event.target.documentElement;


			

			

			var top = this.scrollY,
				left =this.scrollX;
				// setScrollValue(top)

				
				// console.log("top: ", top)
				
				const stikcyHeader = this.document.getElementById('stickyHeader')
				const profileMenu = this.document.getElementById('profileMenuDiv')
				const profileStickInfo = this.document.getElementById('profileStickInfo')
				const belowTextDiv = this.document.getElementById("belowTextDiv");
				const searchComponent = this.document.getElementById("searchComponent");

				
				
				

				const paddingTop = stikcyHeader.offsetHeight + 
					stikcyHeader.offsetHeight / 10;

					profileMenu.style.top =  `${stikcyHeader.clientHeight}px`; 
					profileStickInfo.style.top =  `${stikcyHeader.clientHeight}px`; 
				
				if(top >= 96) {
					
					stikcyHeader.style.transform =  "translateY(0)";
					// stikcyHeader.style.opacity =  "1";
					belowTextDiv.style.opacity = "1";
					searchComponent.style.opacity = "1"
					stikcyHeader.style.backgroundColor =  backgroundColor;
					

					const number = 0
				if(!stopMenuChangeOnScroll){

				
				if(testData[0] && top <= testData[0]) {
						setScrollToElement(0)
						// console.log("top: ", top)
						//  console.log("top value", testData[0])	
					} 
				  if(testData[0] && top >= testData[0] && top <= testData[1]) {
					setScrollToElement(0)
					//  console.log("top value", testData[0])	
				  } 
				  if(testData[1] && top >= testData[1] && top <= testData[2]) {
					setScrollToElement(testData.indexOf(testData[1]))
					// console.log("top value1", testData[1])	
				  }
				  if(testData[2] && top >= testData[2] && top <= testData[3]) {
					setScrollToElement(testData.indexOf(testData[2]))
					// console.log("top value1", testData[2])	
				  }
				  if(testData[3] && top >= testData[3] && top <= testData[4]) {
					setScrollToElement(testData.indexOf(testData[3]))
					// console.log("top value1", testData[3])	
				  }
				  if(testData[4] && top >= testData[4] && top <= testData[5]) {
					setScrollToElement(testData.indexOf(testData[4]))
					//console.log("top value4", testData[4])	
				  }
				  if(testData[5] && top >= testData[5] && top <= testData[6]) {
					setScrollToElement(testData.indexOf(testData[5]))
					// console.log("top value5", testData[5])	
				  }
				  if(testData[6] && top >= testData[6] && top <= testData[7]) {
					setScrollToElement(testData.indexOf(testData[6]))
					// console.log("top value6", testData[6])	
				  }
				  if(testData[7] && top >= testData[7] && top <= testData[8]) {
					setScrollToElement(testData.indexOf(testData[7]))
					// console.log("top value7", testData[7])	
				  }
				  if(testData[8] && top >= testData[8] && top <= testData[9]) {
					setScrollToElement(testData.indexOf(testData[8]))
					// console.log("top value8", testData[8])	
				  }
				  if(testData[9] && top >= testData[9] && top <= testData[10]) {
					setScrollToElement(testData.indexOf(testData[9]))
					// console.log("top value9", testData[9])	
				  }
				  if(testData[10] && top >= testData[10] && top <= testData[11]) {
					setScrollToElement(testData.indexOf(testData[10]))
					// console.log("top value10", testData[10])	
				  }
				  if(testData[11] && top >= testData[11] && top <= testData[12]) {
					setScrollToElement(testData.indexOf(testData[11]))
					// console.log("top value11", testData[11])	
				  } if(testData[12] && top >= testData[12] && top <= testData[13]) {
					setScrollToElement(testData.indexOf(testData[12]))
					// console.log("top value12", testData[12])	
				  } if(testData[13] && top >= testData[13] && top <= testData[14]) {
					setScrollToElement(testData.indexOf(testData[13]))
					// console.log("top value13", testData[13])	
				  } if(testData[14] && top >= testData[14] && top <= testData[15]) {
					setScrollToElement(testData.indexOf(testData[14]))
					// console.log("top value14", testData[14])	
				  }if(testData[15] && top >= testData[15] && top <= testData[16]) {
					setScrollToElement(testData.indexOf(testData[15]))
					//console.log("top value15", testData[15])	
				  } if(testData[16] && top >= testData[16] && top <= testData[17]) {
					setScrollToElement(testData.indexOf(testData[16]))
					//console.log("top value16", testData[16])	
				  } if(testData[17] && top >= testData[17] && top <= testData[18]) {
					setScrollToElement(testData.indexOf(testData[17]))
					//console.log("top value17", testData[17])	
				  } if(testData[18] && top >= testData[18] && top <= testData[19]) {
					setScrollToElement(testData.indexOf(testData[18]))
					//console.log("top value18", testData[18])	
				  } if(testData[19] && top >= testData[19] && top <= testData[20]) {
					setScrollToElement(testData.indexOf(testData[19]))
					//console.log("top value19", testData[19])	
				  } if(testData[20] && top >= testData[20] && top <= testData[21]) {
					setScrollToElement(testData.indexOf(testData[20]))
					//console.log("top value20", testData[20])	
				  } if(testData[21] && top >= testData[21] && top <= testData[22]) {
					setScrollToElement(testData.indexOf(testData[21]))
					//console.log("top value21", testData[21])	
				  } if(testData[22] && top >= testData[22] && top <= testData[23]) {
					setScrollToElement(testData.indexOf(testData[22]))
					//console.log("top value22", testData[22])	
				  } if(testData[23] && top >= testData[23] && top <= testData[24]) {
					setScrollToElement(testData.indexOf(testData[23]))
					//console.log("top value23", testData[23])	
				  } if(testData[24] && top >= testData[24] && top <= testData[25]) {
					setScrollToElement(testData.indexOf(testData[24]))
					//console.log("top value24", testData[24])	
				  } if(testData[25] && top >= testData[25] && top <= testData[26]) {
					setScrollToElement(testData.indexOf(testData[25]))
					//console.log("top value25", testData[25])	
				  } if(testData[26] && top >= testData[26] && top <= testData[27]) {
					setScrollToElement(testData.indexOf(testData[26]))
					//console.log("top value26", testData[26])	
				  } if(testData[27] && top >= testData[27] && top <= testData[28]) {
					setScrollToElement(testData.indexOf(testData[27]))
					//console.log("top value27", testData[27])	
				  } 
				  if(testData[28] && top >= testData[28] && top <= testData[29]) {
					setScrollToElement(testData.indexOf(testData[28]))
					//console.log("top value28", testData[28])	
				  }
				  if(testData[29] && top >= testData[29] && top <= testData[30]) {
					setScrollToElement(testData.indexOf(testData[29]))
					//console.log("top value29", testData[29])	
				  }
				  if(testData[30] && top >= testData[30] && top <= testData[31]) {
					setScrollToElement(testData.indexOf(testData[30]))
					//console.log("top value30", testData[30])	
				  }
				}

	

				  
					// setScrollToElement(testData.indexOf(testData[0]))


					// for(let i = 0; i <= testData.length; i++ ) {
					// 	// console.log("top value", testData[i])
					// 	if(testData[i] && top >= testData[i]) {
					// 		console.log("scroll data", scrollToElement)
					// 		if(scrollToElement !== testData[i]){
					// 			setScrollToElement(testData.indexOf(testData[i]))
					// 		// console.log(testData[0])
					// 		console.log("top value", top)
					// 		}
					// 	}
					// }
					
					
				} else {
					
					// stikcyHeader.style.transform =  "translateY(-150px)";
					// stikcyHeader.style.opacity =  "0";
					stikcyHeader.style.backgroundColor =  "transparent";
					belowTextDiv.style.opacity = "0";
					searchComponent.style.opacity = "0";

				}
				
				// else if(
				// 	top >= 691 && !window.matchMedia('(max-width: 550px)').matches
				//   ) {
				// 	stikcyHeader.style.display = "flex";
				// 	stikcyHeader.style.webkitBoxShadow = "0";
				// 	stikcyHeader.style.mozBoxShadow = "0";
				// 	stikcyHeader.style.boxShadow = "0px 0px 0px transparent";
	
					
				// 	profileMenu.style.webkitBoxShadow = "0";
				// 	profileMenu.style.mozBoxShadow = "0";
				// 	profileMenu.style.boxShadow = "0";
					
	
				// }
				// else {
				// 	stikcyHeader.style.display = "none";
				// }
		}, stopMenuChangeOnScroll);
	}
	
	window.onload = trackWindowScroll();
	

	useEffect(() => {
		// trackWindowScroll()
		console.log("stopMenu", stopMenuChangeOnScroll)
	}, [stopMenuChangeOnScroll])
	
	
	window.onload = function() {
		
	};




	useEffect(() => {
	    // console.log("choosen data: ", choosenOrderData);
		if(showProductModal || showInfoModal) {
			// document.body.classList.add("no-scroll")
			document.body.style.overflow="hidden"; 
		} else {
			document.body.style.overflow="initial"; 
		}
	}, [showProductModal, showInfoModal])

	

	
		
  
  
	return (

		<div  className="restaurantProfileMainDiv" >

		
		
		{/* ////////////////////////////////////////////////////// */}

		{/* {<CheckoutModal/>} */}

		{showInfoModal && <RestaurantInfo data={choosenOrderData}  setShowInfoModal={() => setShowInfoModal(it => !it)} showInfoModal={showInfoModal}/>}
		
		{showProductModal && <AddToOrderModal data={choosenOrderData}  setShowProductModal={() => setShowProductModal(it => !it)} showProductModal={showProductModal}/>}
		
	  	<div id="websiteBody" className="restaurantProfileDiv" >

			<header id="stickyHeader" className="stickyHeader">
				
				<div className="belowStickyHeaderDiv">

					{/* <div className="itemTitle">
								{"Macdonald's restaurant"}
					</div> */}

					

					{/* <div className="averageTimeDiv">
						<span className="carIcon">
						<FaShippingFast/>
						</span>

						<span className="averageTimeSpan">{"delivery 20–30 min"}</span>
					</div> */}
					<div onClick={() => history.goBack()} className="goBackIcon" >
					<IoChevronBack />
					</div>
					

					<div id="searchComponent" className="searchComponent">
					<SearchComponent searchText={"Search this vendor..."}/>
					</div>

				


					<div id="belowTextDiv" className="belowTextDiv">
					<div className="belowSubTitle">
					{"Schdual order"}
					</div>
					
					<div className="openText">
						{"OPEN"}
					</div>
			</div>

						{cartButtonTop &&
						// window.matchMedia('(min-width: 1020px)').matches && 
						<div className="headerViewCartButton">
						<ViewCartButton/>
						</div>}
				</div>

			
			</header>

		<div className="backgroundImageDiv">
			<div className="averageTimeDiv">
				<span className="averageTimeSpan">{" The average delivery time is 20–30 min"}</span>
				<span className="carIcon">
				<FaShippingFast/>
				</span>
				
			</div>
		

			<img className='backgroundImage' src={vendorInfo.picture} alt="" >
				
			</img>
			<div className="profileImageDiv">
				
			<div id="profileImage" className='profileImage'/>
			
						<div className="openingTimeDiv">
							<span className="openingTimeText">{"Min. Order: €"} {vendorInformation?.minOrder}</span>
							<span className="timeIcon">
							<IoFastFood/>
						</span>
							
							
						</div>
						<div className="openingTimeDiv">
							<span className="openingTimeText">{"€1.99 delivery"}</span>
							<span className="timeIcon">
							<FaShippingFast/>
							</span>
							
							
						</div>
				
			</div>
			
			</div>
			<div className="itemsOnBackgroundDiv">

				<div className="titleAndIconDiv">
						<div className="itemTitle">
							{vendorInformation?.name}
						</div>
						<span onClick={() => setShowInfoModal(it => !it)} className="infoIcon">
							<IoInformation/>
						</span>
				</div>

			<div className="itemSubTitle">
					{vendorInformation?.description}
			</div>
		

		<div className="rateAndminMoneyDiv">

			<div className="belowTextDiv">
					<div className="belowSubTitle">
					{"Today "}{today?.time?.replaceAll(":00", "")} 
					</div>
					
					<div className="openText">
						{"OPEN"}
					</div>
			</div>

			<div className="rateDiv">
				<span>
				{vendorInformation?.rate ? "⭐ " + vendorInformation?.rate : "No rating yet 🙂" }  
				</span>
			</div>
		</div>
				

				
			

			
			
		</div>  
			   
		<div className="menuAndVerticalFood">

			<div id="profileMenuDiv" className="profileMenuDiv">
				<ProfileMenu 
				commodities={commodities} 
				activeIcon={activeIcon} 
				setActiveIcon={setActiveIcon}
				setSectionID={setSectionID}
				scrollToElement={scrollToElement}
				setStopMenuChangeOnScroll={setStopMenuChangeOnScroll}
				/>
			</div>


			<div>
				<VerticalFoodList
				commodities={commodities} 
				activeIcon={activeIcon} 
				setActiveIcon={setActiveIcon}
				onItemChoose={() => setShowProductModal(true)}
				setChoosenOrderData={setChoosenOrderData}
				sectionID={sectionID}
				/>
			</div>


			<div id="profileStickInfo" className="profileStickInfo">
				<VerticalInfo 
				onButtonClick={() => {setShowInfoModal(it => !it)}}
				commodities={commodities} 
				activeIcon={activeIcon} 
				setActiveIcon={setActiveIcon}
	
				/>
			</div>
		
					


		</div>
		 
	  </div>

	
	  {<div id="bottomViewCartButton" className="bottomViewCartButton">
		<ViewCartButton/>
	   </div>}
	  
	  </div>

	);
  }

