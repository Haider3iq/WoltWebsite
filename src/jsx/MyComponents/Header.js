import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
/// Scroll

import { 
  IoHomeOutline, IoHome, 
  IoRestaurantOutline, IoRestaurant,
  IoStorefrontOutline, IoStorefront,
  IoSearchOutline, IoSearch,
  IoSettingsOutline, IoSettings,
  IoPersonOutline, IoPerson,
  IoLocationOutline, IoLocation

} from "react-icons/io5";





import { useSelector , useDispatch} from 'react-redux';
import { store } from "../../store/store"



/// Image
import profile from "../../images/profile/17.jpg";

import logo from "../../images/logo.png";


import "../../css/customStyles.css"
import "../../css/customHeader.css"
import "../../css/navigation.css"


import SearchComponent from "./SearchComponent";

import Navgiation from "./Navigation";














// import { Navigation } from "swiper";

const Header = ({ onNote }) => {




      
      const tabData = [
        {
          name: 'Home',
          activeIcon: 'IoRestaurantOutline',
          path:  '/',
          content:
            'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
        },
        {
          name: 'Restaurants',
          icon: 'user',
          path: '/restaurants',
          content:
            "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
        },
        {
          name: 'Stores',
          icon: 'phone',
          path: '/Stores',
          content:
            'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
        },
    
        {
          name: 'Nearby',
          icon: 'envelope',
          path: '/Stores',
          content:
            "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
        },
      ]
    














  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;




    const PATH = window.location.pathname

    const [iconArray, setIconArray] = useState({})
    

    useEffect(() => {
      // console.log("testPath: ", PATH)
      if(tabData.filter(item => PATH.endsWith(item.path))[0]) {
        const updatedIcon = tabData.filter(item => PATH.endsWith(item.path))[0];
        // console.log("test icon: ",updatedIcon)
        setIconArray(updatedIcon)

      } else if(PATH.endsWith("dashboard")) {
        setIconArray(tabData[0])
      }
      
     
      // console.log("test: ", iconArray?.icon)

    }, [PATH])



  

















    const userLocation = "unKowon"







  return (
    <>
    <div className="headerMainDiv" style={
      {
      backgroundColor: (PATH.includes("restaurant-profile") && "rgba(0,0,0,0)"), 
      position: (PATH.includes("restaurant-profile") && "relative")
      }}>

   
        <div className="fristRowDiv">
      
                {/* //Header left #111 */}
                  {/* <HeaderLeft/> */}





                  <div className="logoDiv">
                  <Link to="/" className="brand-logo">
                  <img className="logoBar" src={logo} alt="" />
                  
                  </Link>

                  </div>
                  







                  

                  





                <div className="locationIconDiv">
                <IoLocationOutline className="unActiveLocation"/>
                <IoLocation className="activeLocation"/>

                <strong className="locationTitle">Vaasa</strong>
                </div>


                {/* //Navgiation bar #222 */}
                <ul className="searchDiv">

                {/* //header search bar #333 */}
                <SearchComponent/> 


                  {/* //HeaderIcons #444 */}
                  {/* <HeaderIcons onNote={onNote}/> */}

                </ul>




                <div className="headerProfileDropdown" >
                    
                    <div
                      className="profileDropDownToggleDiv"
                    >
                      <img width={40} className="profileImage" src={profile} alt="profile" />

                      <div className="headerInfo">
                        <span className="profileTitle">
                          <strong>Brian Lee</strong>
                        </span>
                        <p className="profileText">Admin</p>
                      </div>
                    </div>


                    
                  </div>


        </div>


        {!PATH.includes("restaurant-profile") && !PATH.includes("checkout") && <div className="secondRowDiv">

              <div className="locationIconDiv">
                      <IoLocationOutline className="unActiveLocation"/>
                      <IoLocation className="activeLocation"/>

                      <strong className="locationTitle">Vaasa</strong>
              </div>

                {/* <TabDesign2 tabData={tabData}/> */}
                <div className="navigationDiv">
                    <Navgiation tabData={tabData} iconArray={iconArray}/>
                    </div>

              {/* <div className="searchDiv">
                  <SearchComponent/> 
              </div> */}
              

        </div> }


        {/* <div className="bottomSpace"/> */}
          
        

    </div> 
    </>
  );
};




export default Header;
