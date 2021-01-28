export const buyIcecream = () => {
    return {
        type: "BUY_ICECREAM",
        info: 'consume a icecream of store'
    }
}

export const makeIceCream = () => {
    return {
        type: 'MAKE_ICECREAM',
        info: 'insert new icecream in the store'
    }
}