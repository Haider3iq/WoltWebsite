import React from "react";
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








 export default function Navgiation({tabData, iconArray}){
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