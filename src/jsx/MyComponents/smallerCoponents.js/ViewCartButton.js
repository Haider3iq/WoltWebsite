import React from "react";

import { 
	IoCloseCircle,
    IoCart,
  } from "react-icons/io5";

  import "../../../css/viewCartButton.css"


export default function ViewCartButton() {


    return (
        <div id="viewCartButtonDiv" className="viewCartButtonDiv">
            <div className="viewCartButtonChildDiv">

                <div className="iconAndNumberDiv">
                    <IoCart/>
                    <div className="numberDiv">
                        {1}
                    </div>

                    <div className="numberDiv">
                        {"View order"}
                    </div>
                </div>

                <div className="priceDiv">
                    {/* <IoCart/>
                    <div className="numberDiv">
                        {1}
                    </div> */}

                    <div className="numberDiv">
                        {`$${"32.00"}`}
                    </div>
                </div>

            </div>
        </div>
    )
}