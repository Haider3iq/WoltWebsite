import React, { useEffect, useState } from 'react'
/// React router dom
import {Switch, Route } from 'react-router-dom'
/// Css



/// Layout
import Footer from './MyComponents/Footer/Footer'

/// Dashboard
import Home from "./MyComponents/Home";
import CheckoutPage from "./MyComponents/Checkout/CheckoutPage";
import SettingsPage from "./MyComponents/Settings/SettingsPage";



/// Widget


//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';
import Header from './MyComponents/Header'


import "./indexStyles.css"
import Restaurants from './MyComponents/Restaurants'
import Stores from './MyComponents/Stores'
import RestaurantProfile from './MyComponents/RestaurantProfile'
import Chat from './MyComponents/Chat/Chat'



//redux
import { useSelector , useDispatch} from 'react-redux';
import { store } from "../../src/store/store"
import {setCustomerData} from "../../src/store/actions/AuthActions"
import ViewCartButton from './MyComponents/smallerCoponents.js/ViewCartButton';














const addresses = [
  {
    address: 'Olympiakatu C 33',
    id: '/dashboard',
  },
  {
    address: 'Vaasanpuistikko 13 F 40',
    id: '/restaurants',
  },
  {
    address: 'ALkulanPolku 7 F 62',
    id: '/Stores',
  },

  {
    address: 'Vanhanvaasankatu 67',
    id: '/dashboard',
  },
  {
    address: 'Ratatie 43 as 30 ',
    id: '/restaurants',
  
  },
  {
    address: 'Porinkatu 20 D 31',
    id: '/Stores',
  },
   
  ];



  const customerData = {
      id: 'testId',
      name: 'Al-Tameemi Hayder',
      email: 'haider@gmail.com',
      password: 'haider123456',
      sessionTime: '',
      refreshToken: '',
      profilePicture: "",
      prefferedPayment: "paypal",
      phoneNumber: "469697687",
      addresses: addresses,
  }








const Markup = () => {
  let path = window.location.pathname
  path = path.split('/')
  path = path[path.length - 1]
  let pagePath = path.split('-').includes('page')
  const [activeEvent, setActiveEvent] = useState(!path)

  useEffect(() => {
    // console.log("page path: ", pagePath)
  }, [])

  const routes = [
    /// Dashboard
    { url: "", component: Home },
  
    //custom
    { url:"restaurants", component: Restaurants },
    { url:"stores", component: Stores },
    { url:"restaurant-profile", component: RestaurantProfile },
    { url:"checkout", component: CheckoutPage },
    { url:"settings", component: SettingsPage},
    { url:"chat", component: Chat},
    

    /// Apps
  ]

  const PATH = window.location.pathname



  const preventNotches = () => {
    document.body.style.paddingRight= "env(safe-area-inset-right)";
    document.body.style.height = "100vh"
  }

  window.onload = preventNotches;




  let backgroundColor = "";
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  backgroundColor = "#393F48"
} else {
  backgroundColor = "#F9F9F9"
}


useEffect(() => {
  console.log("nothing: ", pagePath)
}, [])















const { auth } = useSelector(state => state.AuthReducer)




useEffect(() => {
    store.dispatch(setCustomerData(customerData))
}, [])


useEffect(() => {
    // console.log("auth from index",auth)
}, [auth])







  return (
       <> 
        
          <div
            // id={`${!pagePath ? 'main-wrapper' : ''}`}
           
            // className={`${!pagePath ? 'show' : 'mh100vh'}`}
            style={{backgroundColor: backgroundColor,}}
          >
            {!pagePath &&  !PATH.includes("settings") && !PATH.includes("restaurant-profile")&& (
              <Header/>
            )}
            <div
              className='websiteBody'
            >

              
             <div
                className={'indexPageContainer'}
                style={{ minHeight: "100vh", }}
              >
                
                <Switch>
                  {routes.map((data, i) => (
                    <Route
                      key={i}
                      exact
                      path={`/${data.url}`}
                      component={data.component}
                    />
                  ))}
                </Switch>

               
              </div>
            </div>


            {!PATH.includes("settings") && !PATH.includes("restaurant-profile")&& !pagePath && <Footer />}

          
          
          </div>

          
         <ScrollToTop />
       </>
  )
}

export default Markup


