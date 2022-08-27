import React from "react";

import ChartDonught3 from "../Sego/Home/donught3";

import { FAST_FOOD} from "../SVGComponent/SVGICON";


export default function SquareWidget({heading, IconName, amount, circleAmount, svgWidth, svgHeight}) {


    return(
              <div className="col-xl-3 col-xxl-6 col-sm-6">
              <div  className="card grd-card">
                <div  className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-2">
                      <h2 className="text-white font-w600">{amount ? amount : "number value"}</h2>
                      <span className="text-white">{heading ? heading : "Put a value here"}</span>
                    </div>
                    <div className="d-inline-block position-relative donut-chart-sale">
                      <ChartDonught3
                        backgroundColor="#FFFFFF"
                        backgroundColor2="#B200D1"
                        height="100"
                        width="100"
                        value={circleAmount}
                      />
                      <small className="text-primary">
                       {IconName ? <IconName width={svgWidth} height={svgHeight}/> : <FAST_FOOD/>}
                      </small>
                      <span className="circle bg-white" />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
    )
}