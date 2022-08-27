import React, {useState} from "react";
import { Dropdown, Nav, Tab, } from "react-bootstrap";
import ActivityLineChart from "../Sego/Home/ActivityLineChart";
import ActivityLineChart2 from "../Sego/Home/ActivityLineChart2";
import ActivityLineChart3 from "../Sego/Home/ActivityLineChart3";



export default function RevenueWidget({title, discription}) {

    const [session, setSession] = useState('Monthly');


    return(
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header d-sm-flex d-block pb-0 border-0">
              <div className="mr-auto pr-3">
                <h4 className="text-black fs-20">{title ? title : "put a title"}</h4>
                <p className="fs-13 mb-0 text-black">
                  {discription ? discription : "offline Lorem ipsum dolor sit amet, consectetur"}
                </p>
              </div>
               <Dropdown className="dropdown mt-sm-0 mt-3">
					<Dropdown.Toggle type="button" className="btn btn-primary light btn-rounded dropdown-toggle">{session}</Dropdown.Toggle>
					<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
						<Dropdown.Item onClick={()=>setSession("Month")} to="/">Month</Dropdown.Item>
						<Dropdown.Item onClick={()=>setSession("Day")} to="/">Day</Dropdown.Item>
						<Dropdown.Item onClick={()=>setSession("Week")} to="/">Week</Dropdown.Item>
						<Dropdown.Item onClick={()=>setSession("Year")} to="/">Year</Dropdown.Item>
					</Dropdown.Menu>
               </Dropdown>
            </div>
            <div className="card-body" id="user-activity">
              <Tab.Container defaultActiveKey="all-food">
                <div className="d-flex flex-wrap mb-4">
                  <div className="mr-auto mb-2 pr-3 d-flex align-items-center">
                    <svg
                      width={25}
                      height={26}
                      viewBox="0 0 25 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="3.54545"
                        height={26}
                        rx="1.77273"
                        fill="#6043D5"
                      />
                      <rect
                        x="7.09088"
                        y="7.09082"
                        width="3.54545"
                        height="18.9091"
                        rx="1.77273"
                        fill="#6043D5"
                      />
                      <rect
                        x="14.1819"
                        y="17.7271"
                        width="3.54545"
                        height="8.27273"
                        rx="1.77273"
                        fill="#6043D5"
                      />
                      <rect
                        x="21.2727"
                        y="3.54541"
                        width="3.54545"
                        height="22.4545"
                        rx="1.77273"
                        fill="#6043D5"
                      />
                    </svg>
                    <div className="ml-3">
                      <p className="fs-12 mb-1">Income</p>
                      <span className="fs-22 text-black font-w600">
                        $126,000
                      </span>
                    </div>
                  </div>
                  <div className="card-action revenue-tabs">
                    <Nav as="ul" className="nav nav-tabs" role="tablist">
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="all-food"
                          role="tab"
                        >
                          All Food
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="food"
                          role="tab"
                        >
                          Food
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="beverages"
                          role="tab"
                        >
                          Beverages
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                <Tab.Content className="tab-content" id="myTabContent">
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="all-food"
                    id="user"
                    role="tabpanel"
                  >
                    <ActivityLineChart />
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="food"
                    id="user"
                    role="tabpanel"
                  >
                    <ActivityLineChart2 />
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="beverages"
                    id="user"
                    role="tabpanel"
                  >
                    <ActivityLineChart3 />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
    )
}