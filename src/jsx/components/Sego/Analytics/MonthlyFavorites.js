import React, { useState } from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

//Images
//Card
// import card_pic2 from "../../../images/card/pic2.jpg";
// import card_pic4 from "../../../images/card/pic4.jpg";
// import card_pic8 from "../../../images/card/pic8.jpg";
// import card_pic9 from "../../../images/card/pic9.jpg";
// import card_pic11 from "../../../images/card/pic11.jpg";

// Menus
// import menu9 from "../../../images/menus/9.png";
// import menu10 from "../../../images/menus/10.png";
// import menu11 from "../../../images/menus/11.png";
// import menu12 from "../../../images/menus/12.png";

// Dish
// import dish_pic1 from "../../../images/dish/pic1.jpg";
// import dish_pic2 from "../../../images/dish/pic2.jpg";
// import dish_pic3 from "../../../images/dish/pic3.jpg";
// import dish_pic4 from "../../../images/dish/pic4.jpg";
// import dish_pic5 from "../../../images/dish/pic5.jpg";
import dish_pic6 from "../../../../images/dish/pic6.jpg";
import dish_pic7 from "../../../../images/dish/pic7.jpg";
import dish_pic8 from "../../../../images/dish/pic8.jpg";
import dish_pic9 from "../../../../images/dish/pic9.jpg";
// import dish_pic10 from "../../../images/dish/pic10.jpg";
// import dish_pic11 from "../../../images/dish/pic11.jpg";

const MonthlyFavorites = () => {
  const [refreshToggle, setRefreshToggle] = useState(false);
  const [datas, setDatas] = useState([
    {
      img: dish_pic6,
      details: "Meidum Spicy Spagethi Italiano",
      reviews: "451",
      likes: "256k",
    },
    {
      img: dish_pic7,
      details: "Pizza Meal for Kids (Small size)",
      reviews: "451",
      likes: "256k",
    },
    {
      img: dish_pic8,
      details: "Meidum Spicy Spagethi Italiano",
      reviews: "451",
      likes: "256k",
    },
    {
      img: dish_pic9,
      details: "Medium Spicy Pizza with Kemangi Leaf",
      reviews: "451",
      likes: "256k",
    },
  ]);

  //Load more Function
  const hendelClick = () => {
    setRefreshToggle(true);
    setTimeout(() => {
      setDatas([
        ...datas,
        datas[Math.floor(Math.random() * Math.floor(datas.length - 1))],
        datas[Math.floor(Math.random() * Math.floor(datas.length - 1))],
      ]);
      setRefreshToggle(false);
    }, 1000);
  };
  return (
    <div>
      <PerfectScrollbar
        className="row height750 dz-scroll loadmore-content"
        id="favourite-itemsContent"
      >
        {datas &&
          datas.map((data, index) => (
            <div
              key={index}
              className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5"
            >
              <div className="media mb-4">
                <Link to="ecom-product-detail">
                  <img
                    src={data.img}
                    className="rounded w-100"
                    alt="dish_pic6"
                  />
                </Link>
              </div>
              <div className="info">
                <h5 className="mb-3">
                  <Link className="text-black" to="ecom-product-detail">
                    {data.details}
                  </Link>
                </h5>
                <div className="star-review fs-14 mb-3">
                  <i className="fa fa-star text-orange" />
                  <i className="fa fa-star text-orange" />
                  <i className="fa fa-star text-orange" />
                  <i className="fa fa-star text-gray" />
                  <i className="fa fa-star text-gray" />
                  <span className="ml-3 text-dark">{data.reviews} reviews</span>
                </div>
                <Link
                  to="#;"
                  className="btn btn-primary light btn-sm btn-rounded px-4"
                >
                  <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                  <strong>{data.likes}</strong> Like it
                </Link>
              </div>
            </div>
          ))}
      </PerfectScrollbar>
      <div className="bg-white pt-3 text-center">
        <Link
          onClick={() => hendelClick()}
          to="#;"
          className="btn-link dz-load-more"
          id="favourite-items"
        >
          View more{" "}
          {refreshToggle && <i className="fa fa-angle-down ml-2 scale-2" />}
        </Link>
      </div>
    </div>
  );
};

export default MonthlyFavorites;
