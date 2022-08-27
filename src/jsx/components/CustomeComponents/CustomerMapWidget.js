import React from "react";

import { Link } from "react-router-dom";
import { Dropdown, Nav, Tab } from "react-bootstrap";

import TimeLineChart from "../Sego/Home/TimeLineChart";
import TimeLineChart2 from "../Sego/Home/TimeLineChart2";
import TimeLineChart3 from "../Sego/Home/TimeLineChart3";


export default function CustomerMapWidget({title, discription}) {

    return (
        <div className="col-xl-9 col-xxl-8">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <Tab.Container defaultActiveKey="monthly">
                <div className="card-header d-sm-flex d-block pb-0 border-0">
                  <div className="mr-auto pr-3">
                    <h4 className="text-black fs-20">{title ? title : "Customer Map offline"}</h4>
                    <p className="fs-13 mb-0 text-black">
                      {discription ? discription : "offline Lorem ipsum dolor sit amet, consectetur"}
                    </p>
                  </div>
                  <div className="card-action card-tabs mt-3 mt-sm-0 mt-3 mb-sm-0 mb-3 mt-sm-0">
                    <Nav as="ul" className="nav nav-tabs" role="tablist">
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                          className="nav-link"
                          eventKey="monthly"
                          role="tab"
                        >
                          Monthly
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                          className="nav-link"
                          eventKey="weekly"
                          role="tab"
                        >
                          Weekly
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                          className="nav-link"
                          eventKey="today"
                          role="tab"
                        >
                          Today
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <Tab.Content className="tab-content" id="myTabContent">
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="monthly"
                      id="tab1"
                    >
                      <TimeLineChart />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="weekly"
                      id="tab2"
                    >
                      <TimeLineChart2 />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="today"
                      id="tab3"
                    >
                      <TimeLineChart3 />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        
            </div>
          </div>
    )
}