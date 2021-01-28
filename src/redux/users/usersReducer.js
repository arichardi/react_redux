import { USERS_FAILURE, USERS_SUCCESS, USERS_REQUEST} from './usersTypes'

const userInitialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = userInitialState, action) => {
    switch (action.type){
        case USERS_REQUEST: return{
            ...state,
            loading: true
        }
        case USERS_SUCCESS: return{
            loading: false,
            users: action.payload,
            error: ''
        }
        case USERS_FAILURE: return{
            loading: true,
            users: [],
            error: action.payload
        }
        default: return state
    }
}