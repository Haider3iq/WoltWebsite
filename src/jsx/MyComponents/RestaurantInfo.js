import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

import {	IoCloseCircle, IoChevronForward , IoChevronBack, IoMap, IoInformationCircle, IoPhonePortrait, IoTime} from "react-icons/io5";

import "../../css/restaurantInfo.css"

import { useSelector } from 'react-redux';



export default function RestaurantInfo({setShowInfoModal, data, showInfoModal}) {

  const { auth, vendorInfo, vendorCommodities}= useSelector(state => state.AuthReducer)
  const [openingTimes, setOpeningTimes] = useState([])
  const [vendorCategory, setVendorCategory] = useState(vendorCommodities ? vendorCommodities : [])








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

        //  let test = []
        //  let speacialTest = []

        //   for(let i = 0; i < currentFetchedTimes.length; i++) {

        //     if(!test.includes(currentFetchedTimes[i].time)) {
        //       test.push(currentFetchedTimes[i])
        //     } else {
        //      speacialTest.push(currentFetchedTimes[i])
        //     }
        //     console.log("test", test)
        //     console.log("speacial test", speacialTest)
        //   }
          setOpeningTimes(currentFetchedTimes)
          // let monday = currentFetchedTimes.monday
          // let tuesday = currentFetchedTimes.tuesday
          // let wednesday = currentFetchedTimes.wednesday
          // let thursday = currentFetchedTimes.thursday
          // let friday = currentFetchedTimes.friday
          // let saturday = currentFetchedTimes.saturday
          // let sunday = currentFetchedTimes.sunday; 

          // const timesArray = [
          //  monday, tuesday, wednesday, thursday, friday, saturday, sunday,
          // ]


        //   const tofindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item.time) !== index)
        //   const duplicateElementa = tofindDuplicates(currentFetchedTimes);
        // const test = currentFetchedTimes?.filter((value, index, self) =>
        //  index === self.findIndex((it) => (
        //  it.time === value.time
        //  )))

        //  console.log("test: ",duplicateElementa)
          // if(monday === sunday) {

          // } else if(monday){

          // }
        }
      }, [vendorInfo])


      const [numberOfOrders, setNumberOfOrders] = useState(1)
      const [price, setPrice] = useState(12)
      
      const defaultPrice = 12;




      const InfoComponent = () => {


        return (
          <div className="infoWidgetDiv">

     
  
          <div className="verticalInfoInnerDiv">
  
  
  
  
             
  
  
              <div className="firstWidget">
  
                      <div className="mainTitle">
                              {"Vendor information"}
                      </div>
  
  
  
  
                      <div>
                        
                      <div className="row clickable">
                              <div className="rowTitlesDiv">
                                      <div className="rowTitle">
                                          {"Address"}
                                      </div>
                                      <div className="rowSubTitle">
                                          {vendorInfo?.address}
                                      </div>


                                      
  
                    <div className="rowSubTitle">
                                          {vendorInfo?.postNumber + " " + vendorInfo?.city}
                                      </div>
                              </div>
                          <IoMap className="arrowIcon"/>
                      </div>

  
                      <div className="row clickable">
                              <div className="rowTitlesDiv">
                                      <div className="rowTitle">
                                          {"Phone number"}
                                      </div>
                                      <div className="rowSubTitle">
                                          {vendorInfo?.phoneNumber}
                                      </div>
                              </div>
                          <IoPhonePortrait className="arrowIcon"/>
                      </div>
  
  
             
  
  
  
                      <div className="mainTitle">
                              {"Note"}
                      </div>
  
                      <div className="row clickable">
                              <div className="rowTitlesDiv">
                                      <div className="rowTitle">
                                          {"If you have any questions about the products, please contact the store for more information"}
                                      </div>
                                   
                              </div>
                          {/* <IoChevronForward className="arrowIcon"/> */}
                      </div>
  
  
  
            
                     
  
  
            <div className="mainTitle">
                              {"Opening times"}
                      </div>
                {openingTimes.length > 0 && openingTimes?.filter((value, index, self) =>
                index === self.findIndex((it) => (
                it.time === value.time
                ))).map((item, index) => {

                 let toDay = openingTimes.filter((it) => it.time === item.time && it.day !== item.day)
                 toDay = toDay[toDay.length -1]

                    return (
                      <div key={index} className="row-time clickable">
                      <div className="rowTitlesDiv">
                              <div className="rowTitle">
                                  {`${item.day} ${toDay ? `${"- " +toDay.day}` : ""}`}
                              </div>
                              <div className="rowSubTitle">
                                  {item.time}
                              </div>
                      </div>

                    <IoTime className="arrowIcon"/>
                    </div>

                    )
                  })}
                    
  
                      <div className="mainTitle">
                              {"Categories"}
                      </div>
  
                      <div className="rowWords">

                {vendorCommodities.length > 0 && vendorCommodities?.filter((value, index, self) =>
                index === self.findIndex((it) => (
                it.category === value.category
                ))).map((item, index) => {

                  return(
                  <div key={index} className="categoriesDiv">
                    <div className="categoryRowSubTitle">
                    {item?.category}
                    </div>
                  </div>
                  )
                })}
               
              
                
                      </div>
  
  
  
  
                  </div>
          </div>
  
      </div>
      </div>
        )
      }






  const fakeProfileImage = "https://imageproxy.wolt.com/wolt-frontpage-images/cities/helsinki/sections/85766f8c-af33-11ec-b32b-3a49145f92e5_giftcard.jpg?w=960"
  ;






  useEffect(() => {
    if(showInfoModal) {
      const div = document.getElementById("belowMainDiv")
      div.style.transform = "translate(0)"
    }
  }, [showInfoModal])


  useEffect(() => {


  },[])


    const onScrollFunction = () => {

     
      const parentView = document.getElementById("parentScroll")
 
      if(parentView.scrollTop >= 319.3333435058594) {
        document.getElementById("stickyTitle").style.transform = "translate(0)"
        document.getElementById("stickyTitle").style.display = "flex"
      } else {
        document.getElementById("stickyTitle").style.transform = "translate(0, -100px)"
        
      }
    }
  




  return (
    <>
   
<div className="restaurantInfoDiv"  >

        <div id="belowMainDiv" className="belowMainDiv">
       
        
        <div id="parentScroll" className="parent" onScroll={onScrollFunction} >
                <div>
                <img className='orderImage' src={fakeProfileImage} alt="" />

                      <div id="stickyTitle" className="stickyTitle">
                        <span>
                        {"Macdonald's restaurant"}
                        </span>
                      
                      </div>  

                          
                      
                          <div className="closeDiv" onClick={setShowInfoModal}>
                          <IoCloseCircle/>
                          </div>
                </div>
               

                <div className="itemsOnBackgroundDiv">
                    
                        <div className="itemTitle">
                            {vendorInfo?.name}
                        </div>

                        <div className="itemSubTitle">
                                {vendorInfo?.description}
                        </div>

                        <div className="belowTextDiv">
                        {/* <div className="belowSubTitle">
                            {"€10.00"}
                        </div> */}
                        <div className="belowDivider"/>
                        </div>
                </div>  

                <div className="selectMultiplesDiv">

                    <InfoComponent/>
                </div>

               

        </div>

    </div>
        
      
</div>
    </>
  );
}

