import React, { useEffect,useState } from "react";


import "../../css/selectableItems.css"

import { IoEllipse, IoCheckmarkCircle, IoCloseCircle,  } from "react-icons/io5";

export default function SelectableItems({data, aditionalCosts, price, setPrice, title, setObjectData, objectData}) {



  const fakeProfileImage = "https://burgerking.fi/wp-content/uploads/BK_Pride_kadet_1200x800-1024x683.jpg";


  
	const [activeIcon, setActiveIcon] = useState(0)
	const [iconOnMount, setIconOnMount] = useState(0)
  const [addedPrice, setAddedPrice] = useState([]);


	useEffect(() => {
  
	}, [])

  // useEffect(() => {
  //   console.log("here here", addedPrice)
  //   if(addedPrice.length > 0) {
  //     console.log("here here", addedPrice.length)
  //     addedPrice.map((element, index) => {
  //       if(element.itemId !== activeIcon) {
  //         const extra = price - element.extraPrice;
  //         setPrice(extra)
  //         console.log("here")
  //       }
  //       return element
  //     })
  //   }

  // },[activeIcon])

	const onClick = (data,index) => {

    const updateOrderDeatils = {
      "OptionsTitle": title,
      "optionId": data.itemId,
      "choosenOption": data.itemName,
    }

    //TODO make sure to update the selected option when user change the selection
    objectData.commodityChoosenOptions.push(updateOrderDeatils)
    setObjectData(objectData)
    setActiveIcon(data.itemId)
    
    onItemPlus(data)

		// console.log("activeIcon", activeIcon)
	}


  // useEffect(() => {
  //   console.log("addedPrice",addedPrice)
  // }, [activeIcon])


  const onItemPlus =  (data)  => {

    if(addedPrice.length > 0) {
      
      
        // console.log("here here", activeIcon)
        // console.log("item: ", data.itemId)
        addedPrice.map((element, index) => {
  
          const objectIndex = element.findIndex((it) => it.itemId !== data.itemId)
          if(objectIndex >= 0 && element[objectIndex].itemId !== data.itemId) {
            const extra = price - element[objectIndex].extraPrice;
            setPrice(extra)
            // console.log("here", element.extraPrice)
            addedPrice.splice(objectIndex,1);
          }
          
          return element
        })
    } else

      if(data.itemExtraPrice && addedPrice[0]?.itemId !== data.itemId && data.itemId !== activeIcon){
        console.log("data.itemId", data.itemId)
        console.log("addedPrice[0]?.itemId", addedPrice[0]?.itemId)
        const extra = price + data.itemExtraPrice
        const updatedData = {
          "itemId": data.itemId,
          "extraPrice": data.itemExtraPrice  
        }
        addedPrice.push(updatedData)
        setAddedPrice([addedPrice])
        setPrice(extra)
      }
  
	}










  const onItemMinus =  (data)  => {
 
   
    if(addedPrice.length > 0) {
      
      // console.log("here here", activeIcon)
      // console.log("item: ", data.itemId)
      addedPrice.map((element, index) => {

        const objectIndex = element.findIndex((it) => it.itemId !== data.itemId)
        if(objectIndex >= 0 && element[objectIndex].itemId !== data.itemId) {
          const extra = price - element[objectIndex].extraPrice;
          setPrice(extra)
          // console.log("here", element.extraPrice)
        }
        // console.log("activeIcon: ", activeIcon, ",", "element: ", typeof element.itemId, element[objectIndex].itemId)

        // console.log("items: ",  element.filter((it) => it.itemId !== element[objectIndex].itemId))
        addedPrice.splice(objectIndex,1);
        return element
      })
    }

	}
  
	  
  
			 

			  const onItemClick = (data, index) => {

						const element = document.getElementById(`item${index}`)
						// element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
						onClick(data, index)

			  }
	


  


        if(data && data.length > 0) {
          return (
            <>
            <div className="selectableItems">
        
            
           {data.map((item, index) => {
                              const price = index * 3.333

                              // console.log("item", item)

                              return (
                                  <div id={`item${index}`} onClick={() => onItemClick(item, index)} key={index} className={activeIcon === item.itemId ? "activeNavLink" : !activeIcon && iconOnMount === index ? "activeNavLink" : "customNavLink"}>
                                  {/* <i className={`la la-angle-left`} /> */}
                                  
                                 {activeIcon !== item.itemId && 
                                 <i className="un-active">
                              
                                  <div className="navigationIconDiv">
                                    
                                    <div className="unAcitveIcon">
                                       <IoCheckmarkCircle/> 
                                    </div>
                                    <strong className="navigationTitle">
                                        {item?.itemName}
                                        {/* for real world put additionalCosts without the (!) */}
                                        {item.itemExtraPrice !== "" && item.itemExtraPrice != null &&<div>
                                        {`+${item.itemExtraPrice.toFixed(2)} €`}
                                        </div>}
                                        </strong>
                                  </div>
                                  </i>}
                          
                                  {activeIcon === item.itemId && <i className="active">
                                 
                                  <div className="navigationIconDiv">
                                      <div className="acitveIcon">
                                       <IoCheckmarkCircle/> 
                                    </div>
                                    {/* <div className="acitveIconClose">
                                       <IoCloseCircle/> 
                                    </div> */}
                                    <strong className="navigationTitle">
                                        {item?.itemName}
                                        {/* for real world put additionalCosts without the (!) */}
                                        {item.itemExtraPrice !== "" && item.itemExtraPrice != null &&<div>
                                        {`+${item.itemExtraPrice.toFixed(2)} €`}
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

