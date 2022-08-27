import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";


import card1 from '../../images/task/img1.jpg';
import card2 from '../../images/task/img2.jpg';
import card3 from '../../images/task/img3.jpg';
import card4 from '../../images/task/img4.jpg';
import card5 from '../../images/task/img5.jpg';
import card6 from '../../images/task/img6.jpg';
import card7 from '../../images/task/img7.jpg';
import card8 from '../../images/task/img8.jpg';




// import RadialBarChart from "../Sego/Home/RadialBarChart";



// // Map
// import World from "@svg-maps/world";
// import { SVGMap } from "react-svg-map";
// //** Import Image */



import HorizontalMealList from "./HorizontalMenuList";


import "../../css/restaurantsPage.css"

import HorizontalFoodList from "./HorizontalFoodList";



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { Pagination, Navigation } from "swiper";
import VerticalMultipleRowList from "./VerticalMultipleRowList";






const data = [
	{ 
		id:1, image: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/9bd5d94c-9643-11ec-a6e4-323bd1f29963_24210ad5_e7bd_4c6e_99f1_61df96bb69e0.jpg-md?w=600",
	},
	{ 
		id:2, image: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/c0dbbbdc-c607-11ec-8b98-42875cc14cb2_e0051d70_ea8c_49ad_ab84_f0d7aebf56c1.jpg-md?w=600", 
	},
	{ 
		id:3, image: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/ef0e3b6e-9642-11ec-9aed-c2f43b5322ee_249c49d4_ea02_478e_aab1_0007476194a1.jpg-md?w=600",
	},
	{ 
		id:4, image: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/6ddb0f5e-f083-11ec-a917-facf9aa16594_aefd4e70_0ec6_4441_9f6e_60579ff5f1e8.jpg-md?w=600",
	},
	{ 
		id:5, image: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/41cdcf04-9643-11ec-a6a2-02d38734db6a_884a6094_1189_4725_ac85_289c37a77f41.png-md?w=600",
	},
	{ 
		id:6, image: "https://imageproxy.wolt.com/wolt-frontpage-images/categories/b708276a-9643-11ec-93f7-323bd1f29963_182fdb4b_17a9_492a_8921_15c93b8c0f80.jpg-md?w=600",
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











export default function Stores() {
  
  const [contacts, setContacts] = useState(data);


  

  const Title = ({title}) => {

    return(
      <div className="titleDiv">
        <div className="titleText">{title}</div>
      </div>
    )
  } 

  const PageFirstTextWidget = ({pageTitle, description}) => {

    return (
      <div>
          <div className="pageTitle">{pageTitle}</div>
          <div className="pageDescription">{description}</div>
      </div>
    )
    

  }






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
    <div className="RestaurantsDiv" id="testtestsets">


             {/* // Horizontal add list #111*/}


             <div>
             <PageFirstTextWidget pageTitle={"Stores Near Me"} description={"Looks like delivery in your area is closed for the night. You can still schedule a delivery for a later date, or pick up an order yourself."}/>
             </div>
             


              {/* // Horizontal meal list #222*/}
              <Title title={"Menu"}/>
              <HorizontalMealList data={contacts}/>





              
              {/* // Horizontal meal list #444*/}
              <Title title={"Random meals"}/>
              <VerticalMultipleRowList/>


      

              


             
    </div>
  );
}

