import React, {useState, useEffect} from "react";
import "../../../css/checkoutItems.css"

import { useSelector } from 'react-redux';
import { store } from "../../../store/store";
import { setOrderInfo } from "../../../store/actions/AuthActions";




import IncreaseMenusWidget from "../smallerCoponents.js/IncreaseMinusWidget";
import {IoAddCircle, IoRemoveCircle, IoRemove, IoAdd, IoTrash} from "react-icons/io5";

const fakeProfileImage = "https://burgerking.fi/wp-content/uploads/BK_Pride_kadet_1200x800-1024x683.jpg";
export default function CheckoutItems({data}) {

    const { vendorCommodities, vendorInfo, orderInfo  }= useSelector(state => state.AuthReducer)

    const [numberOfOrders, setNumberOfOrders] = useState(1)
    const [price, setPrice] = useState(vendorCommodities[0]?.normalPrice)
    const [itemsSelections, setItemsSelections] = useState();


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


    useEffect(() => {
       
          if(vendorCommodities[0] && vendorCommodities[0].addExtraOptions) {
            const additionlData = JSON.parse(vendorCommodities[0].addExtraOptions);

            setItemsSelections(additionlData);
            console.log("currentData: ",itemsSelections)
            // console.log("currentData: ", additionlData)
          }
      }, [vendorCommodities[0]])


    return(
        <div className="checkoutItems">
            
                <div className="childDiv">

                        <div className="numberAndTitleDiv">


                            <div className="increaseMenusWidget">

                                <div id="plusDivID" onClick={() => onPlusClick()} style={{fontSize: "1rem"}} className="plusIcon">
                                {/* {circle && <IoAddCircle className="plusIcon"/>} */}
                                {<IoAdd className="minusIcon"/>}
                                </div>

                                {numberOfOrders && <div  id="numberText" style={{fontSize: "1rem"}} className="numberText">
                                    {numberOfOrders ? numberOfOrders : 0}
                                </div>}

                                <div id="minusDivID" style={{fontSize: "1rem"}} className="minusIcon"  onClick={() => onMinusClick()} >
                                {/* {circle && <IoRemoveCircle className="minusIcon"/>} */}
                                { <IoRemove className="minusIcon"/>}

                                </div>

                                <IoTrash className="trashIcon"/>



                            </div>



                            
                            
                               {null && <div className="number">
                                    {"1"}
                                </div>}
                                
                               <div className="orderDetailsInfoDiv">
                                 
                                    <div className="title">
                                        {vendorCommodities[0]?.itemName}
                                    </div>


                                {itemsSelections?.map((item, index) => {
                                    return(
                                        <div key={index} className="itemOptionAndDetailDiv">
                                        <div className="itemOptionTitle">
                                       {`${item?.title}:`}
                                        </div>

                                        <div className="itemOptionDetail">
                                            {``}
                                        </div>
                                    </div>
                                    )
                                         
                                })}
                                   
                                   
                                   
                                    <div className="price">
                                        {`€${price?.toFixed(2)}`}
                                    </div>


                               </div>
                               </div>

              
                        <img className='orderImage' src={fakeProfileImage} alt="" />
                
                </div>

        </div>
    )
}