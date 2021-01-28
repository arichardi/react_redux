import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {buyIcecream} from '../redux'


function IceCreamItemContainer() {

    const [number, setNumber] = useState(1)

    const numOfIceCream = useSelector( state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>"The number of Icecreams in the store is {numOfIceCream} </h2>
            <input type='text' value={number} onChange={ e => setNumber(e.target.value) } />
            <button onClick={
                () => dispatch(buyIcecream(number))
            }>Buy {number} IceCream</button>
        </div>
    )
}

export default IceCreamItemContainer
