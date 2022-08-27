import React, { useEffect,useState } from "react";
import {uid} from 'react-uid';


import "../../css/multiSelctionItems.css"

import { IoCheckbox, IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import IncreaseMenusWidget from "./smallerCoponents.js/IncreaseMinusWidget";
import SmallerIncreaseMenusWidget from "./smallerCoponents.js/SmallerIncreaseMinusWidget";

export default function MultiSelectionItems({data, setPrice, price}) {
  



  const fakeProfileImage = "https://burgerking.fi/wp-content/uploads/BK_Pride_kadet_1200x800-1024x683.jpg";

  const testData = {
    "itemId": "1",
    "itemTitle": "burger",
    "itemCount": "3",
  }
  
	const [activeIcon, setActiveIcon] = useState([{}]);
  const [additionalItems, setAdditionalItems] = useState([{}]);
	const [iconOnMount, setIconOnMount] = useState(false);
  const [initialPrice, setInitialPrice] = useState(price)


	useEffect(() => {

	}, [])

	const onClick =  (data, index, ID)  => {
    // const num = i.toString();
    const element = document.getElementById(`item${ID}`)
    // element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    
    
    

    if(!data?.increasable) {
        if(activeIcon.includes(data.itemId)) {
          setActiveIcon(activeIcon.filter(it => it !== data.itemId))
          setAdditionalItems(additionalItems.filter(it => it.itemId !== data.itemId))
        } else {
          activeIcon.push(data.itemId)
          setActiveIcon(activeIcon)
          const countData = {
            "itemId": data.itemId,
            "itemName": data.name,
            "itemCount": "0",
          }
          additionalItems.push(countData)
          setAdditionalItems(additionalItems)
        
         
        }
    } 
    if(!!data?.increasable) {
      // if(activeIcon.includes(data.itemId)) {
      //   setActiveIcon(activeIcon.filter(it => it !== data.itemId))
      // } else {
      //   activeIcon.push(data.itemId)
      //   setActiveIcon(activeIcon)
      // }
    }

   
    setIconOnMount(it => !it)
		// console.log("activeIcon", activeIcon)
    
	}











  const onItemPlus =  (data)  => {


  
  
    const currentData = additionalItems.map((element, index) => {
        
      
      if(element.itemId === data.itemId && data.max >= element.itemCount){
        const readySum = parseInt(element.itemCount) + 1;
        element.itemCount = readySum
      }

      if(data.max >= element.itemCount){
        const extra = price + data.itemExtraPrice
        setPrice(extra)
      }
      return element;
    });


  
    setAdditionalItems(currentData)
	}










  const onItemMinus =  (data, number)  => {
 
    const currentData = additionalItems.map((element, index) => {
     
      if(element.itemId === data.itemId && data.max >= element.itemCount && price > initialPrice && parseInt(element.itemCount) >= number){
        // console.log("minus triggered")
        const extra = price - data.itemExtraPrice
        setPrice(extra)
      }

      if(element.itemId === data.itemId && parseInt(element.itemCount) >= number){
        // console.log("minus triggered")
        const readySum = parseInt(element.itemCount) - 1;
        element.itemCount = readySum
      }

    
      return element;
    });
    setAdditionalItems(currentData)
	}
  
	  
  useEffect(() => {
    // console.log("activeIcon", activeIcon)    
    setActiveIcon(activeIcon)
    const xCount = additionalItems?.filter(it => it.itemId === "/dashboard").map(it => it.itemCount)[0];
    // console.log("itemCont", xCount)
  }, [iconOnMount])
  



  const selectItem = (item) => {
    const objectIndex = data.findIndex((it) => it.itemId === item.itemId)

    // console.log("index; ", objectIndex)

    data[objectIndex].selected = !data[objectIndex].selected

    // console.log(data[objectIndex])
  }
			 

          const onItemParentDiv = (data, index, ID) => {
            if(!activeIcon.includes(data.itemId)) {
              onClick(data, index, ID)
              selectItem(data)
              onItemPlus(data)
            }
          }

          const onSiblingsDiv = (data, index, ID) => {
            if(activeIcon.includes(data.itemId)) {
              onClick(data, index, ID)
              selectItem(data)
              onItemMinus(data, 1)
            }
          }



        

        if(data && data.length > 0) {

          return (
            <>
            <div className="multiSelectItems">
           {data.map((item, index) => {
        
                  const alphaBet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!', '#', '$', '%', '&', '(',')','*','+']
        
                                const price = index * 3.333
                                const num = index.toString();
                                const one =  alphaBet[Math.floor(Math.random() * alphaBet.length)]
                                const tow =  alphaBet[Math.floor(Math.random() * alphaBet.length)]
                                const three =  alphaBet[Math.floor(Math.random() * alphaBet.length)]
                                const four =  alphaBet[Math.floor(Math.random() * alphaBet.length)]
        
                                const ID = one + tow + three + four
                                
        
                                const xCount = additionalItems?.filter(it => it.itemId === item.itemId).map(it => it.itemCount)[0];
                                
                                
                              return (
                                  <div onClick={() => onItemParentDiv(item, index, ID)} id={`item${ID}`} key={index} 
                                  className={activeIcon.includes(item.itemId) ? "activeNavLink" : "customNavLink"}>
                                  {/* <i className={`la la-angle-left`} /> */}
        
                                  
                                  
                                 {
                                //  !activeIcon.includes(item.itemId) 
                                !item.selected
                                 && 
                                 <i className="un-active">
                              
                                  <div  className="navigationIconDiv" >
                                    
                                    <div id="iconDiv" className="unAcitveIcon">
                                       <IoCheckbox/> 
                                    </div>
                                    <div   className="navigationTitle">
                                        {item?.itemName}
                                        {item?.itemExtraPrice && <div className="unActivePrice">
                                          {`+${item.itemExtraPrice.toFixed(2)} €`}
                                        </div>}
                                        </div>
                                  </div>
                                  </i>}
                          
                                  {
                                  // activeIcon.includes(item.itemId) 
                                  item.selected
                                  && <i className="active">
                                 
                                  <div className="navigationIconDiv">
                                      <div className="acitveIcon">
                                       <IoCheckbox/> 
                                    </div>
                                    <div className="acitveIconClose">
                                       <IoCloseCircle/> 
                                    </div> 
                                          <strong className="navigationTitle">
                                            <div className="itemAndTitleDiv">
                                             {!item?.increasable && <i className="itemCount">
                                              {`${xCount} X  `}
                                              </i>}
                                              
                                              <i>
                                                  {item?.itemName}
                                              </i>
                                            </div>
        
                                         
        
                                        
                                        {<div>
                                            <div className="increaseAndPriceDiv">
                                              <div onClick={() => onSiblingsDiv(item, index, ID)} className="sbilings"/>
        
                                              <i className="smallIncreasingWidgetDiv">
                                                 <SmallerIncreaseMenusWidget setIncrease={() => onItemPlus(item)} setReduce={() => onItemMinus(item, 2)} minusIconSize={"200%"} plusIconSize={"200%"}/>
                                              </i>
                                              <i className="priceText">
                                              {`+${item.itemExtraPrice.toFixed(2)} €`}
                                              </i>
                                            
                                            </div>
        
                                        
                                        </div>}
                                        </strong>
                                   
                                  </div>
                                  </i>}
                          
                                  </div>
                            )})}
                 </div>
            </>
          );
        } else return null
 
}

