import React from "react";
import { Link } from "react-router-dom";
import menu9 from "../../../images/menus/9.png";
import menu10 from "../../../images/menus/10.png";
import menu11 from "../../../images/menus/11.png";
import menu12 from "../../../images/menus/12.png";
// const Data = [{}]

export default function DailylListWidget({title, discription, data}) {

    return (
        <div className="col-xl-3 col-xxl-4">
          <div className="row">
            <div className="col-xl-12">
              <div className="card trending-menus">
                <div className="card-header d-sm-flex d-block pb-0 border-0">
                  <div>
                    <h4 className="text-black fs-20">{title ? title : "Offline Daily Trending Menus"}</h4>
                    <p className="fs-13 mb-0 text-black">{discription ? discription : "Offline Lorem ipsum dolor"}</p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex pb-3 mb-3 border-bottom tr-row align-items-center">
                    <span className="num">#1</span>
                    <div className="mr-auto pr-3">
                      <Link to="post-details">
                        <h2 className="text-black fs-14">
                          Medium Spicy Spagethi Italiano
                        </h2>
                      </Link>
                      <span className="text-black font-w600 d-inline-block mr-3">
                        $5.6{" "}
                      </span>{" "}
                      <span className="fs-14">Order 89x</span>
                    </div>
                    <img
                      src={menu9}
                      alt="menu9"
                      width={60}
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex pb-3 mb-3 border-bottom tr-row align-items-center">
                    <span className="num">#2</span>
                    <div className="mr-auto pr-3">
                      <Link to="post-details">
                        <h2 className="text-black fs-14">
                          Watermelon juice with ice
                        </h2>
                      </Link>
                      <span className="text-black font-w600 d-inline-block mr-3">
                        $5.6{" "}
                      </span>{" "}
                      <span className="fs-14">Order 89x</span>
                    </div>
                    <img
                      src={menu10}
                      alt="menu10"
                      width={60}
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex pb-3 mb-3 border-bottom tr-row align-items-center">
                    <span className="num">#3</span>
                    <div className="mr-auto pr-3">
                      <Link to="post-details">
                        <h2 className="text-black fs-14">
                          Chicken curry special with cucumber
                        </h2>
                      </Link>
                      <span className="text-black font-w600 d-inline-block mr-3">
                        $5.6{" "}
                      </span>{" "}
                      <span className="fs-14">Order 89x</span>
                    </div>
                    <img
                      src={menu11}
                      alt="menu11"
                      width={60}
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex pb-3 mb-3 border-bottom tr-row align-items-center">
                    <span className="num">#4</span>
                    <div className="mr-auto pr-3">
                      <Link to="post-details">
                        <h2 className="text-black fs-14">
                          Italiano Pizza With Garlic
                        </h2>
                      </Link>
                      <span className="text-black font-w600 d-inline-block mr-3">
                        $5.6{" "}
                      </span>{" "}
                      <span className="fs-14">Order 89x</span>
                    </div>
                    <img
                      src={menu12}
                      alt="menu12"
                      width={60}
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex tr-row align-items-center">
                    <span className="num">#5</span>
                    <div className="mr-auto pr-3">
                      <Link to="post-details">
                        <h2 className="text-black fs-14">
                          Tuna Soup spinach with himalaya salt
                        </h2>
                      </Link>
                      <span className="text-black font-w600 d-inline-block mr-3">
                        $5.6{" "}
                      </span>{" "}
                      <span className="fs-14">Order 89x</span>
                    </div>
                    <img
                      src={menu9}
                      alt="menu9"
                      width={60}
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}