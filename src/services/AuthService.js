import axios from 'axios';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    logout,
} from '../store/actions/AuthActions';








export function signUp(email, password) {
    //axios call

    const postData = {
        email,
        password,
        returnSecureToken: true,
    };

    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        postData,
    );
}






export function login(email, password) {

    const function_name = "login function of AuthService";

    const postData = {
        email,
        password,
        returnSecureToken: true,
    };


    
        
        try {
            // return axios.post('http://192.168.0.6:5000/vendorLogin', postData)
            
            return fetch('http://192.168.0.6:5000/vendorLogin', {
            method: "POST", 
            headers: {
              "Content-Type": "application/json"
            },
            

            body: JSON.stringify({
                 "email": email,
                 "password" : password,
             })
    
          })
        } catch (error) {
            console.log(`errro in ${function_name}: ${error}`)
        }
            
    // return axios.post(
    //     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
    //     postData,
    // );

}






export function formatError(errorResponse) {
    console.log("errorMessage: ",errorResponse);
    switch (errorResponse.empty) {
        case 'EMAIL_EXISTS':
            //return 'Email already exists';
            swal("Oops", "Email already exists", "error");
            break;
        case 'EMAIL_NOT_FOUND':
            //return 'Email not found';
           swal("Oops", "Email or password either wrong or not found. Please make sure that you already have an active account", "error",{ button: "Try Again!",});
           break;
        case 'INVALID_PASSWORD':
            //return 'Invalid Password';
            swal("Oops", "Invalid Password", "error",{ button: "Try Again!",});
            break;
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return '';
    }
}






export function saveTokenInLocalStorage(tokenDetails) {
    // tokenDetails.expireDate = new Date(
    //     new Date().getTime() + tokenDdispatchlogoutetails.expiresIn * 1000,
    // );

    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.sessionTime * 1000,
    );


    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}






export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}






export function checkAutoLogin(dispatch, history) {


    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        console.log("tokenDetails unvaild expiredate: ", tokenDetails.expireDate)
        dispatch(logout(history));
        return;
    }
    console.log("tokenDetails: ", tokenDetails)
    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, history);

}















const login_request = async (email_key, password_key) => {
        
    // // console.log("here we got")
    // const function_name = "login_request"
    // setLoading(true)

    // try{
    //     await fetch('http://192.168.0.6:5000/vendorLogin', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     //  body: JSON.stringify({
    //     //   "name": "jae"
    //     // }),
         
    //     body: JSON.stringify({
    //          "email": email_key,
    //          "password" : password_key,
    //      })

    //   })
    // //   .then((response) => response.json())
    // //   .then((responseJson) => {
        
    // //     if(responseJson.empty) {
    // //         setEmailLine(responseJson.empty)
    // //         setShowSplashScreen(false);
    // //         setLoading(false);
    // //     } else {
    // //         // console.log("email", typeof responseJson[0].email, "password", typeof responseJson[0].password)
    // //         // saveCredentails("email", responseJson.riderData.email, "password", responseJson.riderData.password)
    // //         // navigation.navigate("Home", {
    // //         //     data: responseJson[0],
    // //         //     riderName: `${responseJson[0]?.firstName} ${responseJson[0]?.lastName}`,
    // //         // })
    // //         // console.log("messages", responseJson.riderMessages)


           
    // //         const riderID = responseJson.riderData?.id 


    // //         //live update rider login 
    // //         const socket = socketIOClient(ENDPOINT); 
    // //         const data = newDevice ? newDevice : [];
    // //         data.push(code)
    // //         Store.dispatch(setNewDevice(data));
    // //         // console.log("code: ", code)
    // //         // console.log("new device code: ", newDevice);
    // //         // console.log("current device code and new device code match: ", newDevice == code ? "true" : "false")
    // //         // console.log("login mounting times")
    // //         // socket.emit("riderLogin", {riderID, code});

    // //         // Store.dispatch(setRiderData(responseJson.riderData))
    // //         // Store.dispatch(setRiderTasks(responseJson.activeDeliveries))
    // //         // Store.dispatch(setRiderMessages(responseJson.riderMessages))
    // //         // Store.dispatch(setRiderLastDelivery(responseJson.lastDelivery))
    // //         // dispatch(setRider(responseJson.riderData))
    // //         // dispatch(setRider(responseJson.riderData))
    // //         setEmailLine("");
    // //         setPasswordLine("");
    // //         navigation.navigate("WorkingScreen", {
    // //             data: responseJson.riderData,
    // //             riderMessages: responseJson.riderMessages,
    // //             riderName: `${responseJson?.riderData.firstName} ${responseJson?.riderData.lastName}`,
    // //             deliveries: responseJson.activeDeliveries,
    // //             lastDelivery: responseJson.lastDelivery,
    // //             deviceCode: code
    // //         })
            
    // //         // navigation.navigate("WorkingScreen", {data: responseJson[0]})
            
    // //         setPassword("");
    // //         setEmail("");
    // //         setLoading(false);
    // //         // console.log(`responsejson: ${JSON.stringify(responseJson[0])}`);
    // //         setShowSplashScreen(false);
    // //     }
    // //     // console.log(`here is the response: ${responseJson}`)
    // //   })

    // } catch(error){
    //     console.log(`error in ${function_name}, ${error}`)
    // } 
    
}
