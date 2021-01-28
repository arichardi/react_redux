import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {buyIcecream, makeIceCream} from '../redux'


function IceCreamContainer() {

    const numOfIceCreams = useSelector( (state) => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of IceCreams - {numOfIceCreams}</h2>
            <button
                onClick={ () => dispatch(buyIcecream())}
            >Buy IceCream</button>
                        <button
                onClick={ () => dispatch(makeIceCream())}
            >make an IceCream</button>
        </div>
    )
}

export default IceCreamContainer
