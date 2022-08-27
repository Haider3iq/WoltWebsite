import {
    SET_CUSTOMER_DATA,
    LOADING_TOGGLE_ACTION,
    LOGIN_CONFIRMED_ACTION,
    LOGIN_FAILED_ACTION,
    LOGOUT_ACTION,
    SIGNUP_CONFIRMED_ACTION,
    SIGNUP_FAILED_ACTION,
    SET_VENDOR_INFO,
    SET_VENDOR_COMMODITIES,
    SET_ORDER_INFO,
} from '../actions/AuthActions';

const initialState = {
    // auth: {
    //     email: '',
    //     idToken: '',
    //     localId: '',
    //     expiresIn: '',
    //     refreshToken: '',
    // },
    auth: {
        id: '',
        name: '',
        email: '',
        password: '',
        sessionTime: '',
        refreshToken: '',
        profilePicture: "",
        preferredPayment: "",
        phoneNumber: "",
        addresses: {},
    },
    vendorCommodities: {},
    vendorInfo: {},
    orderInfo: [],
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

function AuthReducer(state = initialState, action) {
    // switch (action.type) {
    // case SET_VENDOR_DATA: 
    // return {...state, vendorData: action.payload, errorMessage: '',
    // successMessage: 'Login Successfully Completed',
    // showLoading: false,};
    // }




    if (action.type === SET_CUSTOMER_DATA) {
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Signup Successfully Completed',
            showLoading: false,
        };
    }

    if (action.type === SET_VENDOR_INFO) {
        return {
            ...state,
            vendorInfo: action.payload,
        };
    }

    if (action.type === SET_ORDER_INFO) {
        return {
            ...state,
            orderInfo: action.payload,
        };
    }


    if (action.type === SET_VENDOR_COMMODITIES) {
        return {
            ...state,
            vendorCommodities: action.payload,
        };
    }

    if (action.type === SIGNUP_CONFIRMED_ACTION) {
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Signup Successfully Completed',
            showLoading: false,
        };
    }
    if (action.type === LOGIN_CONFIRMED_ACTION) {
        // console.log("action.payload: ", action.payload.expiresDate)
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Login Successfully Completed',
            showLoading: false,
        };
    }

    if (action.type === LOGOUT_ACTION) {
        return {
            ...state,
            errorMessage: '',
            successMessage: '',
            auth: {
                email: '',
                idToken: '',
                localId: '',
                expiresIn: '',
                refreshToken: '',
            },
        };
    }

    if (
        action.type === SIGNUP_FAILED_ACTION ||
        action.type === LOGIN_FAILED_ACTION
    ) {
        return {
            ...state,
            errorMessage: action.payload,
            successMessage: '',
            showLoading: false,
        };
    }

    if (action.type === LOADING_TOGGLE_ACTION) {
        return {
            ...state,
            showLoading: action.payload,
        };
    }


    return state;
}




export default AuthReducer;

    
