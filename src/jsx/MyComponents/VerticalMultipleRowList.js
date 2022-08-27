import React, { useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import {Dropdown, Modal} from 'react-bootstrap';
import swal from "sweetalert";
import {nanoid} from 'nanoid';
//Images
import card1 from '../../../src/images/task/img1.jpg';
import card2 from '../../../src/images/task/img2.jpg';
import card3 from '../../../src/images/task/img3.jpg';
import card4 from '../../../src/images/task/img4.jpg';
import card5 from '../../../src/images/task/img5.jpg';
import card6 from '../../../src/images/task/img6.jpg';
import card7 from '../../../src/images/task/img7.jpg';
import card8 from '../../../src/images/task/img8.jpg';
import user from '../../../src/images/task/user.jpg';

import "../../../src/css/VerticalMultipleRowList.css"



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const CardListBlog = [
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

 

			

    








export default function VerticalMultipleRowList () {



       
    const [contacts, setContacts] = useState(CardListBlog);

	const [rightPressed, setRightPressed] = useState(false);
	const [leftPressed, setLeftPressed] = useState(false);

	const [size, setSize] = useState(4);

	

			// useEffect(() => {
			// 	if (window.matchMedia('(max-width: 1250px)').matches) {
			// 		setSize(3);
			// 	} else {
			// 		setSize(2);
			// 	}
			// 	console.log("window", window)
			// },[window])
			useEffect(() => {
				setSize(4);
				// console.log("size is",size)
				if (window.matchMedia('(max-width: 640px)').matches) {
					setSize(2);
				} else
				if (window.matchMedia('(max-width: 1200px)').matches) {
					setSize(3);
				}
			}, [])


			useEffect(() => {
				const handleResize = () => {
					setSize(4);
					if (window.matchMedia('(max-width: 640px)').matches) {
						setSize(2);
					} else
					if (window.matchMedia('(max-width: 1200px)').matches) {
						setSize(3);
					}
					else {
						setSize(4)
					}
					console.log("window", window)
				}
				window.addEventListener('resize', handleResize)

				return _ => {
					window.removeEventListener('resize', handleResize)
			  }
			})
		




    return (
		<div className='VerticalMultipleRowList'>
                    
                    {contacts.map((contact, index)=>(

						
					<div className="swiperImageDiv" key={index}>
					<Link to={"/restaurant-profile"}>
					
							<div className="swiperImgBx">
								<img className='swiperImage' src={contact.image} alt="" />
							</div>	
							{/* <div className="d-flex pb-3 align-items-center">
								<img src={contact.image} alt="" className="rounded mr-3 card-list-img" width="130" /> 
								
							</div> */}
							<div className='swiperTextDiv'>
								<div className='textDiv'>
									<div className="title">Burger</div>
		
									<div className="subTitle">
										{`${index > 0 ? index * 9 : "22"} places`}
									</div>
								</div>

								
								<div className='priceTextDiv'>
									<div className="title">{`${index > 0 ? index * 9 : "22"} km 🚴‍♀️`} </div>
		
									<div className="subTitle">
										{`${index > 0 ? index * 9 : "22"} 🌟`}
									</div>
								</div>
								
							</div>
							</Link>
					</div>            
				
				))}  
                    
            </div>
    )
}