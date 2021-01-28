import { USERS_FAILURE, USERS_REQUEST, USERS_SUCCESS } from './usersTypes'
import axios from 'axios'

export const usersRequest = () => {
    return {
        type: USERS_REQUEST
    }
}

export const usersSuccess = (users) => {
    return {
        type: USERS_SUCCESS,
        payload: users
    }
}

export const usersfailure = (error) => {
    return {
        type: USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(usersRequest )
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(usersSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(usersfailure(errorMsg))
        })
    }
}