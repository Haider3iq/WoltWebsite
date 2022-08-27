import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";





import "../../css/checkoutWidget.css"
import SelectableItems from "./SelectableItems";



import { 
	IoCloseCircle,
  } from "react-icons/io5";
import MultiSelectionItems from "./MultiSelctionItems";
import IncreaseMenusWidget from "./smallerCoponents.js/IncreaseMinusWidget";

import { useSelector } from 'react-redux';
import { store } from "../../store/store";
import { setOrderInfo } from "../../store/actions/AuthActions";


const multipleSelectionTitle = "Additional fillings";
const selectableDataTitle = "Additional fillings";
const selectableData = [
	{
	  name: 'BBQ sauce',
	  activeIcon: 'IoRestaurantOutline',
	  id: '/dashboard',
	  content:
		'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
	},
	{
	  name: 'Kitchup sauce ',
	  icon: 'user',
	  id: '/restaurants',
	  content:
		"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
	},
	{
	  name: 'Garlic sauce',
	  icon: 'phone',
	  id: '/Stores',
	  content:
		'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
	},
	 
  ];

export default function CheckoutWidget({setShowProductModal, data, showProductModal, }) {

  const { vendorCommodities, vendorInfo, orderInfo  }= useSelector(state => state.AuthReducer)

      const [numberOfOrders, setNumberOfOrders] = useState(1)
      const [price, setPrice] = useState(vendorCommodities[0]?.normalPrice)
      const [itemsSelections, setItemsSelections] = useState();



      useEffect(() => {
        // console.log("currentData: ", data)
          if(vendorCommodities[0] && vendorCommodities[0]?.addExtraOptions) {
            const additionlData = JSON.parse(vendorCommodities[0]?.addExtraOptions);
            setItemsSelections(additionlData);

            // console.log("currentData: ", additionlData)
          }
      }, [vendorCommodities[0]])
      
      const defaultPrice = 12;




      const onPlusClick = () => {
        setNumberOfOrders(numberOfOrders + 1)
        setPrice(price + defaultPrice)
      }
      const onMinusClick = () => {
        if(numberOfOrders >= 2){
        setPrice(price - defaultPrice)
        setNumberOfOrders(numberOfOrders - 1)
        }
      }






  const fakeProfileImage = "https://burgerking.fi/wp-content/uploads/BK_Pride_kadet_1200x800-1024x683.jpg";







  useEffect(() => {
    if(showProductModal) {
      const div = document.getElementById("belowMainDiv")
      div.style.transform = "translate(0)"
    }
  }, [showProductModal])


  useEffect(() => {


  },[])


      



    const onScrollFunction = () => {

     
      const parentView = document.getElementById("parentScroll")
      const itemsOnBackgroundDiv = document.getElementById("itemsOnBackgroundDiv");
      console.log("itemsOnBackgroundDiv", itemsOnBackgroundDiv.offsetTop)
 
      if(parentView.scrollTop >= itemsOnBackgroundDiv.offsetTop) {
        document.getElementById("stickyTitle").style.transform = "translate(0)"
        document.getElementById("stickyTitle").style.display = "flex"
      } else {
        document.getElementById("stickyTitle").style.transform = "translate(0, -100px)"
        
      }
    }




    const onAddToOrder = () => {

      let orderData = []
      // const objectData =   {
      //   "orderID": null,
      //   "commodityID": vendorCommodities[0]?.id,
      //   "commodityFullName": vendorCommodities[0]?.itemName,
      //   "commodityNormalPrice": vendorCommodities[0]?.normalPrice.toFixed(2),
      //   "commoditySalePrice": vendorCommodities[0]?.salePrice?.toFixed(2),
      //   "commodityChoosenOptions": {},
      //   "vendorID": vendorInfo.id,
      //   "vendorName":vendorInfo.name,
      //   "vendorLatLong": vendorInfo.latLong,
      //   "vendorAddress": vendorInfo.address,
      //   "customerID": null,
      //   "customerName": null,
      //   "customerLatLong": null,
      //   "customerAddress": null,
      //   "customerPhoneNumber": null,
      //   "riderID": null,
      //  };


      //  ordervendorCommodities[0]?.push(objectData)
       

     

      //  store.dispatch(setOrderInfo(orderData))
       setShowProductModal(null)

    }
  



    useEffect(() => {
        if(orderInfo && orderInfo.length > 0) {
          
        }
    }, [orderInfo])




  return (
    <>
   
    <div id="checkoutWidget" className="checkoutWidget"  >

        <div id="belowMainDiv" className="belowMainDiv">
       
        
        <div id="parentScroll" className="parent" onScroll={onScrollFunction} >
                <div>
                <img className='orderImage' src={vendorCommodities[0]?.picture ? vendorCommodities[0]?.picture : fakeProfileImage} alt="" />

                      <div id="stickyTitle" className="stickyTitle">
                        <span>
                        {vendorCommodities[0]?.itemName}
                        </span>
                      
                      </div>  

                          
                      
                          <div className="closeDiv" onClick={setShowProductModal}>
                          <IoCloseCircle/>
                          </div>
                </div>
               

                <div id ="itemsOnBackgroundDiv" className="itemsOnBackgroundDiv">
                    
                        <div id="title" className="title">
                            {vendorCommodities[0]?.itemName}
                        </div>

                        <div className="subTitle">
                                {vendorCommodities[0]?.itemDescription}
                        </div>

                        <div className="belowTextDiv">
                        <div className="belowSubTitle">
                            {`€${vendorCommodities[0]?.normalPrice?.toFixed(2)}`}
                        </div>
                        <div className="belowDivider"/>
                        </div>
                </div>  

                {itemsSelections?.map((item, index) => {
                          
                  return(

                    
                    <div key={index} className="selectMultiplesDiv">

                    {item.select && <div className="selectableItemsDiv">
                    <i className="itemTitle">
                            {item.title}
                        </i>
                        <i className="itemSubTitle">
                            {"Select one of the options"}
                        </i>
                        <SelectableItems data={item.items}  setPrice={setPrice} price={price}
                        setNumber={setPrice} 
                        />
                    </div>}

                    

                    {!item.select &&<div className="multiSelectionItemsDiv">
                        <i className="itemTitle">
                            {item.title}
                            <i className="itemSubTitle">
                           {`Select up to ${item.items.length} options`}
                        </i>
                        </i>
                        <MultiSelectionItems data={item.items} setNumber={setPrice} setPrice={setPrice} price={price}   />
                    </div>}

                
              </div>
                  )
                })}

               

               

        </div>

        <div className="bottomWidget">
          <div className="increasingWidgetDiv">
        <IncreaseMenusWidget minusIconSize={"1.8rem"} plusIconSize={"1.8rem"} numberSize={"1.3rem"} number={numberOfOrders} 
        onPlusClick={onPlusClick}
        onMinusClick={onMinusClick}
        />
        </div>
                <div onClick={onAddToOrder} className="priceButton">
                    <i>
                      {"Add to order"}
                    </i>

                    <i>
                    {"€"}{price?.toFixed(2)}
                    </i>
                    
                  </div>
                </div>
         </div>
        
      
    </div>
    </>
  );
}

