import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../Constants/HomeConstant"


export const listHomeAction = () => async(dispatch) => {
    try{
        dispatch({type: USER_LIST_REQUEST})
        // make api call
        console.log('Home page is loaded ...')
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: 'Loaded successfully'

        })

    } catch(error) {
        dispatch( {
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.message?
            error.response.data.message :
            error.message
        })

    }

}