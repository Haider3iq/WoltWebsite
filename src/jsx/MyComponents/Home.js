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



import "../../css/homePage.css"
import AdHorizontalList from "./AdHorizontalList";
import HorizontalFoodList from "./HorizontalFoodList";
import AdCarousel from "./AdCarousel";

import { useSelector , useDispatch} from 'react-redux';




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

export default function Home() {
  const [contacts, setContacts] = useState(menuData);




  const PageFirstTextWidget = ({pageTitle, description}) => {

    return (
      <div>
          <div className="pageTitle">{pageTitle}</div>
          <div className="pageDescription">{description}</div>
      </div>
    )
    

  }










  

  const Title = ({title}) => {

    return(
      <div className="titleDiv">
        <div className="titleText">{title}</div>
      </div>
    )
  } 




  const { auth }= useSelector(state => state.AuthReducer)




  useEffect(() => {
      console.log("auth: ", auth)
  },[auth])






  return (
    <div className="HomeDiv" id="testtestsets">



				<div>
             <PageFirstTextWidget pageTitle={"Home page"} description={"Looks like delivery in your area is closed for the night. You can still schedule a delivery for a later date, or pick up an order yourself."}/>
             </div>


             {/* // Horizontal add list #111*/}
             <Title title={"Deals and discounts"}/>
              <AdHorizontalList/>


              {/* // Horizontal meal list #222*/}
              <Title title={"Menu"}/>
              <HorizontalMealList data={menuData}/>




              {/* //Ad carsol #333 */}
              {/* <AdCarousel/> */}












              <Title title={"Deals and discounts"}/>
              <AdHorizontalList/>









              {/* // Horizontal meal list #444*/}
              <Title title={"Random meals"}/>
              <HorizontalFoodList/>


      

              


             
    </div>
  );
}

