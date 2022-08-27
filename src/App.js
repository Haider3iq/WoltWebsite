import { lazy, Suspense, useEffect } from 'react';
/// Components
import Index from './jsx/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import {  Route, Switch, withRouter } from 'react-router-dom';
// action
import { checkAutoLogin, runLogoutTimer } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

import "./css/style.css";
import "./css/publicStyle.css";
import "./css/cridetCard.css";


// const SignUp = lazy(() => import('./jsx/pages/Registration'));
// const ForgotPassword = lazy(() => import('./jsx/pages/ForgotPassword'));
// const Login = lazy(() => {
//     return new Promise(resolve => {
// 		setTimeout(() => resolve(import('./jsx/pages/Login')), 500);
// 	});
// });







function App (props) {

        const PATH = window.location.pathname


    useEffect(() => {
        if(!PATH.includes("restaurant-profile") ) {
            document.body.style.overflow="initial"; 
        }
    }, [PATH])
    

    




  
    
    // let routes = (  
    //     <Switch>
    //         <Route path='/login' component={Login} />
    //         <Route path='/page-register' component={SignUp} />
    //         <Route path='/page-forgot-password' component={ForgotPassword} />
    //     </Switch>
    // );

		return (
			<>
                    <Index />
                
            </>
        );
	
	
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(App)); 
