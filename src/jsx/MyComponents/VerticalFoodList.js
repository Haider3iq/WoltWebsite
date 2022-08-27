import React, {useEffect, useState} from "react";
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

  import "../../css/verticalFoodList.css"

  // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


  







 export default function VerticalFoodList({commodities, activeIcon, setActiveIcon, onItemChoose, setChoosenOrderData, sectionID}){


	const [iconArray, setIconArray] = useState({})
	const [iconOnMount, setIconOnMount] = useState("Home")


	useEffect(() => {

	}, [])

	const onClick = (iconName) => {
		setActiveIcon(iconName)
		console.log("activeIcon", activeIcon)
	}



  useEffect(() => {
      if(sectionID) {
        console.log(sectionID)
        // moveToSection(sectionID)
      }
  },[sectionID])

  const moveToSection = (categoryIndex) => {

    const element = document.getElementById(`${categoryIndex} category`)
    if(element){
      element.scrollIntoView({behavior: "smooth", block: "center"});

    }
   
  }





    const fakeImage = "https://imageproxy.wolt.com/menu/menu-images/6167cfed6f8ec3f3f538d0dd/d4591a34-cbdd-11ec-ab67-7e1fc6f02280_fd_fi_6523_55.png?w=600"
	

    const itemChooseFunction = (data) => {
      onItemChoose();
      setChoosenOrderData(data) 
    } 





    if(commodities && commodities?.length){

      return (
        <>
              {/* <!-- Nav tabs --> */}
            <div className={'verticalFoodList'}>
      
           {/* {commodities?.map((data, i) => { */}
                    
            {commodities?.filter((value, index, self) =>
              index === self.findIndex((it) => (
                it.category === value.category
              ))).map((data, categoryIndex) => {
            return (
             <div  
             id={data.category}
             key={categoryIndex}>
              
               <div 
              //  id={`${categoryIndex + 1} category`} 
                onScroll={() => console.log("scrolling")} className="categoryDiv">
             {data.category}
             </div>
  
             {commodities?.map((product, i) => {
                      
                        if(product.category === data.category)
                              return (
                                <div className="listDiv" key={i} onClick={() => itemChooseFunction(product)}>
                                        <div className="imageAndTextsDiv">
                                            <img className="image" src={product.picture} alt=""/>
                      
                                            <div className="textDiv">
                                                    <div className="title">
                                                        {product.itemName}
                                                    </div>
                                                    <div className="subTitle">
                                                      {product.itemDescription}
                      
                                                    </div>
                                                    <div className="price">
                                                      {"€ " +product.normalPrice?.toFixed(2) }
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                              )})}
             </div>
            )})}
    
    </div>
    
        </>
    )

     } else {
      return null
     } 

   
  }





//   return (
//     <>
//           {/* <!-- Nav tabs --> */}
//         <div className={'verticalFoodList'}>
  
//        {commodities?.map((data, i) => {
                    
//         return (
//           <div className="listDiv" key={i} onClick={() => itemChooseFunction(data)}>
//                   <div className="imageAndTextsDiv">
//                       <img className="image" src={fakeImage} alt=""/>

//                       <div className="textDiv">
//                               <div className="title">
//                                   {data.name}
//                               </div>
//                               <div className="subTitle">
//                                 {"Tomatos, BBQ suase, French fries, 200 grams beef meat potatos breads with salad asdfja dfasldfjasdf asldf asdfkasdfasd fasdf"}

//                               </div>
//                               <div className="price">
//                                 {"30, 15€"}
//                               </div>
//                       </div>
//                   </div>
//               </div>
//         )})}

// </div>

//     </>
// )

 