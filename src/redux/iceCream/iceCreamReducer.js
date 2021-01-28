import { BUY_ICECREAM, MAKE_ICECREAM } from './iceCreamTypes'

const initialIceCreamState = {
    numOfIceCreams: 20
}

const IceCreamReducer = ( state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state, numOfIceCreams: state.numOfIceCreams - 1
        }
        case MAKE_ICECREAM: return {
            ...state, numOfIceCreams: state.numOfIceCreams + 1
        }
        default: return state
    }
}

export default IceCreamReducer
