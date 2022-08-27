import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Modal} from 'react-bootstrap';
import swal from "sweetalert";

import "../../../src/css/horizontalMenuList.css"



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


const HorizontalMenuList = ({data}) => {

    
    const [contacts, setContacts] = useState(data);

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
				setSize(6.2);
				if (window.matchMedia('(max-width: 640px)').matches) {
					setSize(3.8);
				} else if (window.matchMedia('(max-width: 850px)').matches) {
					setSize(3.9);
				}  else if (window.matchMedia('(max-width: 1000px)').matches) {
					setSize(4.4);
				} else if (window.matchMedia('(max-width: 1200px)').matches) {
					setSize(4.9);
				} else if (window.matchMedia('(max-width: 1300px)').matches) {
					setSize(5.6);
				}else if (window.matchMedia('(max-width: 1400px)').matches) {
					setSize(5.8);
				} else{
					setSize(6.3)
				}
			}, [])


			useEffect(() => {
				const handleResize = () => {
				setSize(6.2);
				if (window.matchMedia('(max-width: 640px)').matches) {
					setSize(3.4);
				} else
				if (window.matchMedia('(max-width: 640px)').matches) {
					setSize(3.8);
				} else if (window.matchMedia('(max-width: 850px)').matches) {
					setSize(3.9);
				}  else if (window.matchMedia('(max-width: 1000px)').matches) {
					setSize(4.4);
				} else if (window.matchMedia('(max-width: 1200px)').matches) {
					setSize(4.9);
				} else if (window.matchMedia('(max-width: 1300px)').matches) {
					setSize(5.6);
				}else if (window.matchMedia('(max-width: 1400px)').matches) {
					setSize(5.8);
				} else{
					setSize(6.3)
				}
					console.log("window", window)
				}
				window.addEventListener('resize', handleResize)

				return _ => {
					window.removeEventListener('resize', handleResize)
			  }
			})
		


			

    

    
return(
		<Link to={"/restaurant-profile"} className='horizontalMenuList'>
		 
			  <Swiper
				slidesPerView={size}
				spaceBetween={11}
				slidesPerGroup={1}
				navigation
				
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
				  clickable: true,
				}}
				
				
				
				modules={[Pagination, Navigation]}
				className="mySwiper"

				
				
				
				>
					
				  {contacts.map((contact, index)=>(
					  <SwiperSlide key={index}>
					  
					<div  className="swiperImageDiv" key={index}>
					
							<div className="sqiperImgBx">
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
							</div>
					</div>            
					</SwiperSlide>
				))}  
				
				</Swiper>
		
			 
			</Link>
		
				
			);     
		}


export default HorizontalMenuList;

const contacts = [];

        <>
            <div className="HorizontalFoodListMainDiv">
                {contacts.map((contact, index)=>(
                    <div  className="posterDiv" key={index}>
                       
							<div className="img-bx">
								<img className='image' src={contact.image} alt="" />
                            </div>	
							  {/* <div className="d-flex pb-3 align-items-center">
								<img src={contact.image} alt="" className="rounded mr-3 card-list-img" width="130" /> 
								
							</div> */}
                                <div className='textDiv'>
                                    <div className="title">Burger</div>

                                    <div className="subTitle">
                                        {`${index > 0 ? index * 9 : "22"} places`}
                                    </div>
                                </div>
                    </div>            
                ))}  
            </div>

        </>


