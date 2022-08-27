import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";




import { useSelector } from 'react-redux';



import { Row, Col, Card,  Tab, Nav } from 'react-bootstrap'


/// Image
import profile from "../../../images/profile/17.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";
import Logout from './Logout';


import logo from "../../../images/logo.png";
import logoText from "../../../images/logo-text.png";


import "../../../../src/css/customStyles.css"
import "../../../../src/css/customHeader.css"
import "../../../../src/css/navigation.css"

import { CustomSVG, FAST_FOOD } from "../../components/SVGComponent/SVGICON";


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
import NavHader from "./NavHader";
import SearchComponent from "../../MyComponents/SearchComponent";
// import { Navigation } from "swiper";

const HeaderCopy = ({ onNote }) => {

  const { auth }= useSelector(state => state.AuthReducer)


      useEffect(() => {
        // console.log("test: ", auth.id )
      }, [])


      
      const tabData = [
        {
          name: 'Home',
          activeIcon: 'IoRestaurantOutline',
          path:  '/' || '/dashboard',
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
          path: '/general-customers',
          content:
            'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
        },
    
        {
          name: 'Nearby',
          icon: 'envelope',
          path: '/task',
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
      console.log("testPath: ", PATH)
      if(tabData.filter(item => PATH.endsWith(item.path))[0]) {
        setIconArray(tabData.filter(item => PATH.endsWith(item.path))[0])

      } else if(PATH.endsWith("dashboard")) {
        setIconArray(tabData[0])
      }
      
     
      console.log("test: ", iconArray?.icon)

    }, [PATH])



    const Navgiation = ({}) => {
      return (
        <>
              {/* <!-- Nav tabs --> */}
            <div className={'customHeaderNav'}>
                    {tabData.map((data, i) => {
                        
                      return (
                        
                          <Link key={i} className={iconArray?.name == data.name ? "activeNavLink" : "customNavLink"} to={data.path}>
                          {/* <i className={`la la-angle-left`} /> */}
                          
                         {iconArray?.name !== data.name && 
                         <i className="un-active">
                         {i == 0 ? 
                          <div className="navigationIconDiv">
                            <IoHomeOutline/>
                            <strong className="navigationTitle">{data?.name}</strong>
                          </div> : 
                          i == 1 ? 
                          <div className="navigationIconDiv">
                            <IoRestaurantOutline/>
                            <strong className="navigationTitle">{data?.name}</strong>
                          </div> : 
                          i == 2 ? 
                          <div className="navigationIconDiv">
                            <IoStorefrontOutline/>
                            <strong className="navigationTitle">{data?.name}</strong>
                          </div> : 
                          <div className="navigationIconDiv">
                            <RiUserLocationLine/>
                            <strong className="navigationTitle">{data?.name}</strong>
                          </div>
                          } 
                          </i>}
              
                          {iconArray?.name == data.name && <i className="active">
                          {i == 0 ? 
                          <div className="navigationIconDiv">
                            <IoHome/>
                            <strong className="navigationTitle">{iconArray?.name}</strong>
                          </div> : 
                          i == 1 ? 
                          <div className="navigationIconDiv">
                            <IoRestaurant/>
                            <strong className="navigationTitle">{iconArray?.name}</strong>
                          </div> : 
                          i == 2 ? 
                          <div className="navigationIconDiv">
                            <IoStorefront/>
                            <strong className="navigationTitle">{iconArray?.name}</strong>
                          </div> : 
                          <div className="navigationIconDiv">
                            <RiUserLocationFill/>
                            <strong className="navigationTitle">{iconArray?.name}</strong>
                          </div>
                          } 
                          </i>}

                          </Link>
                    )})}
              </div>
    
        </>
    )
    }

















    const userLocation = "unKowon"







  return (
    <div className="headerMainDiv">

   
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




                <Dropdown className="headerProfileDropdown" as="li">
                    
                    <Dropdown.Toggle
                      as="a"
                      to="#"
                      variant=""
                      className="profileDropDownToggleDiv"
                    >
                      <img width={40} className="profileImage" src={profile} alt="profile" />

                      <div className="headerInfo">
                        <span className="profileTitle">
                          <strong>Brian Lee</strong>
                        </span>
                        <p className="profileText">Admin</p>
                      </div>
                    </Dropdown.Toggle>



                    
                    <Dropdown.Menu align="right" className="mt-2">
                      <Link to="/app-profile" className="dropdown-item ai-icon">
                        <svg
                          id="icon-user1"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                        <span className="ml-2">Profile </span>
                      </Link>
                      <Link to="/email-inbox" className="dropdown-item ai-icon">
                        <svg
                          id="icon-inbox"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-success"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span className="ml-2">Inbox </span>
                      </Link>
                      <Logout />
                    </Dropdown.Menu>
                    

                    
                  </Dropdown>


        </div>


        <div className="secondRowDiv">

              <div className="locationIconDiv">
                      <IoLocationOutline className="unActiveLocation"/>
                      <IoLocation className="activeLocation"/>

                      <strong className="locationTitle">Vaasa</strong>
              </div>

                {/* <TabDesign2 tabData={tabData}/> */}
                <div className="navigationDiv">
                    <Navgiation/>
                    </div>

              {/* <div className="searchDiv">
                  <SearchComponent/> 
              </div> */}
              

        </div>


        {/* <div className="bottomSpace"/> */}
          
        

    </div>
  );
};




export default HeaderCopy;
