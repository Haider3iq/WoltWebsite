import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { 
    IoHomeOutline, IoHome, 
    IoRestaurantOutline, IoRestaurant,
    IoStorefrontOutline, IoStorefront,
    IoSearchOutline, IoSearch,
    IoSettingsOutline, IoSettings,
    IoPersonOutline, IoPerson
  
  } from "react-icons/io5";

import "../../../css/mobileCss.css"
  
import { 
    RiUserLocationFill, RiUserLocationLine 
  } from "react-icons/ri";




export default function MobileNavigation({}) {


    
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
      path: '/stores',
      content:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    },

    {
      name: 'Nearby',
      icon: 'envelope',
      path: '/stores',
      content:
        "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
    },
  ]


  const PATH = window.location.pathname

  const [iconArray, setIconArray] = useState({})
  

  useEffect(() => {
    // console.log("testPath: ", PATH)
    if(tabData.filter(item => PATH.endsWith(item.path))[0]) {
      setIconArray(tabData.filter(item => PATH.endsWith(item.path))[0])

    } else if(PATH.endsWith("dashboard")) {
      setIconArray(tabData[0])
    }
    
   
    // console.log("test: ", iconArray?.icon)

  }, [PATH])



  const Navgiation = ({}) => {
    return (
      <>
            {/* <!-- Nav tabs --> */}
          <div className={'mobileNavigation'}>
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









    return(
      <>
       {<div className="mobileNavigationDiv">
          <Navgiation/>
        </div>}
        </>
    )
}