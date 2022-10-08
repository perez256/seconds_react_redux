import axios from "axios"
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

import { URLData } from '../../CONSTANTS/urlConstants';

// Login action
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;',
            }
        }
        
        const {data} = await axios.post(
            `${URLData}/api/users/login/`,
            {email: email, password: password},
            config
            )

            dispatch({
                        type: USER_LOGIN_SUCCESS,
                        payload: data
                        })
                
            localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch( {
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message?
            error.response.data.message :
            error.message
        })
    }
}


// logout action
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: USER_LOGOUT
    })
}


// User Details
export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAIL_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config ={
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;',
                'Authorization': `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `${URLData}/api/users/profile/`,
            config
            )

            console.log(JSON.stringify(data));

            dispatch({
                type: USER_DETAIL_SUCCESS,
                payload: data
            })
    
    }catch(error){
        dispatch( {
            type: USER_DETAIL_FAIL,
            payload: error.response && error.response.data.message?
            error.response.data.message :
            error.message
        })
    }
}



// update user profile
export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config ={
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;',
                'Authorization': `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `${URLData}/api/users/profile/update/`,
            user,
            config
            )

            dispatch({
                type: USER_UPDATE_PROFILE__SUCCESS,
                payload: data
            })

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })

            localStorage.setItem('userInfo', JSON.stringify(data))
    
    

    }catch(error){
        dispatch( {
            type: USER_UPDATE_PROFILE__FAIL,
            payload: error.response && error.response.data.message?
            error.response.data.message :
            error.message
        })
    }
}

// Passenger register
export const passenger_register = (first_name, last_name, email,contact,  password) => async (dispatch) => {
    try {
        dispatch({
            type: PASSENGER_REGISTER_REQUEST
        })
        const config ={
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;',
            }
        }
        const {data} = await axios.post(
            `${URLData}/api/register_passenger/`,
            {first_name: first_name, last_name: last_name, name: first_name + ' - ' + last_name ,  email: email, contact: contact, password: password},
            config
            )

            console.log(JSON.stringify(data));
        dispatch({
            type: PASSENGER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch( {
            type: PASSENGER_REGISTER_FAIL,
            payload: error.response && error.response.data.message?
            error.response.data.message :
            error.message
        })
    }
}



// driver register
export const driver_register = (first_name, last_name, email,contact,  password) => async (dispatch) => {
    try {
        dispatch({
            type: DRIVER_REGISTER_REQUEST
        })
        const config ={
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;',
            }
        }
        const {data} = await axios.post(
            `${URLData}/api/register_driver/`,
            {first_name: first_name, last_name: last_name, name: first_name + ' - ' + last_name ,  email: email, contact: contact, password: password},
            config
            )
            console.log(JSON.stringify(data));
        dispatch({
            type: DRIVER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch( {
            type: DRIVER_REGISTER_FAIL,
            payload: error.response && error.response.data.message?
            error.response.data.message :
            error.message
        })
    }
}
