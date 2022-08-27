import React from "react";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Link } from "react-router-dom";
import { Dropdown, Nav, Tab } from "react-bootstrap";


export default function SummaryWidget({title, discription, }) {

  const RadialBarChart = loadable(() =>
  pMinDelay(import("../Sego/Home/RadialBarChart"), 1000)
);



    return(
        <div className="col-xl-6">
          <div className="card">
            <Tab.Container defaultActiveKey="monthly">
              <div className="card-header d-sm-flex flex-wrap d-block pb-0 border-0">
                <div className="mr-auto pr-3">
                  <h4 className="text-black fs-20">{title ? title : "offline Orders Summary"}</h4>
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
              <div className="card-body">
                <Tab.Content className="tab-content">
                  <Tab.Pane
                    eventKey="monthly"
                    className="tab-pane fade"
                    id="Monthly"
                  >
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <RadialBarChart series={85} />
                      </div>
                      <div className="col-sm-6 mb-sm-0 mb-3 text-center">
                        <h3 className="fs-28 text-black font-w600">
                          $456,005.56
                        </h3>
                        <span className="mb-3 d-block">from $500,000.00</span>
                        <p className="fs-14">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do{" "}
                        </p>
                        <Link
                          to="post-details"
                          className="btn btn-primary light btn-rounded"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-md-0 mb-3">
                        <div className="p-3 border rounded">
                          <h3 className="fs-32 text-black font-w600 mb-1">
                            25
                          </h3>
                          <span className="fs-18">On Delivery</span>
                        </div>
                      </div>
                      <div className="col-sm-4 mb-md-0 mb-3">
                        <div className="p-3 border rounded">
                          <h3 className="fs-32 text-black font-w600 mb-1">
                            60
                          </h3>
                          <span className="fs-18">Delivered</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="p-3 border rounded">
                          <h3 className="fs-32 text-black font-w600 mb-1">7</h3>
                          <span className="fs-18">Canceled</span>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="weekly"
                    className="tab-pane fade"
                    id="Weekly"
                  >
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <RadialBarChart series={40} />
                      </div>
                      <div className="col-sm-6 mb-sm-0 mb-3 text-center">
                        <h3 className="fs-28 text-black font-w600">
                          $150,002.00
                        </h3>
                        <span className="mb-3 d-block">from $400,000.00</span>
                        <p className="fs-14">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do{" "}
                        </p>
                        <Link
                          to="post-details"
                          className="btn btn-primary light btn-rounded"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-md-0 mb-3">
                        <div className="p-3 border rounded">
                          <h3 className="fs-32 text-black font-w600 mb-1">
                            30
                          </h3>
                          <span className="fs-18">On Delivery</span>
                        </div>
                      </div>
                      <div className="col-sm-4 mb-md-0 mb-3">
                        <div className="p-3 border rounded">
                          <h3 className="fs-32 text-black font-w600 mb-1">
                            55
                          </h3>
                          <span className="fs-18">Delivered</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="p-3 border rounded">
                          <h3 className="fs-32 text-black font-w600 mb-1">9</h3>
                          <span className="fs-18">Canceled</span>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="today"
                    className="tab-pane fade"
                    id="Today"
                  >
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <RadialBarChart series={55} />
                      </div>
                      <div className="col-sm-6 mb-sm-0 mb-3 text-center">
                        <h3 className="fs-28 text-black font-w600">
                          $856,005.56
                        </h3>
                        <span className="mb-3 d-block">from $800,000.00</span>
                        <p className="fs-14">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do{" "}
                        </p>
                        <Link
                          to="post-details"
                          className="btn btn-primary light btn-rounded"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-md-0 mb-3">
                        <div className="p-3 border rounded">
                          <h3 className="fs-32 text-black font-w600 mb-1">
                            45
                          </h3>
                          <span className="fs-18">On Delivery</span>
                        </div>
                      </div>
                      <div className="col-sm-4 mb-md-0 mb-3">
                        <div className="p-3 border rounded">
                          <h3 className="fs-32 text-black font-w600 mb-1">
                            90
                          </h3>
                          <span className="fs-18">Delivered</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="p-3 border rounded">
                          <h3 className="fs-32 text-black font-w600 mb-1">3</h3>
                          <span className="fs-18">Canceled</span>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
    )

}