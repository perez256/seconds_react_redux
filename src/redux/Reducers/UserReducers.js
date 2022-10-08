import { 
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    
    USER_LOGOUT,

    PASSENGER_REGISTER_REQUEST,
    PASSENGER_REGISTER_SUCCESS,
    PASSENGER_REGISTER_FAIL,

    USER_DETAIL_REQUEST,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE__SUCCESS,
    USER_UPDATE_PROFILE__FAIL,
    USER_UPDATE_PROFILE__RESET,

    DRIVER_REGISTER_REQUEST,
    DRIVER_REGISTER_SUCCESS,
    DRIVER_REGISTER_FAIL,

 } from "../Constants/UserConstants"


// Login users
export const   userLoginReducer =  (state = {}, action) => {

    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}

        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}

        case USER_LOGOUT:
            return {}

        default:
            return state
    }

}

// User Deatails
export const   userDetailReducer =  (state = {user: {}}, action) => {

    switch(action.type) {
        case USER_DETAIL_REQUEST:
            return {...state, loading: true}

        case USER_DETAIL_SUCCESS:
            return {loading: false, user: action.payload}

        case USER_DETAIL_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }

}


// User Update
export const   userUpdateProfileReducer =  (state = {}, action) => {

    switch(action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true}

        case USER_UPDATE_PROFILE__SUCCESS:
            return {loading: false, success: true, userInfo: action.payload}

        case USER_UPDATE_PROFILE__FAIL:
            return {loading: false, error: action.payload}

        case USER_UPDATE_PROFILE__RESET:
            return {}

        default:
            return state
    }

}

// Register Passengers
export const   passengerRegisterReducer =  (state = {}, action) => {

    switch(action.type) {
        case PASSENGER_REGISTER_REQUEST:
            return {loading: true}

        case PASSENGER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case PASSENGER_REGISTER_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }

}


// Register Driver
export const   driverRegisterReducer =  (state = {}, action) => {

    switch(action.type) {
        case DRIVER_REGISTER_REQUEST:
            return {loading: true}

        case DRIVER_REGISTER_SUCCESS:
            return {loading: false, driverInfo: action.payload}

        case DRIVER_REGISTER_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}