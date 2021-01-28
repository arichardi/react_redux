export const buyIcecream = (number = 1) => {
    return {
        type: "BUY_ICECREAM",
        payload: number,
        info: 'consume a icecream of store'
    }
}

export const makeIceCream = (number = 1) => {
    return {
        type: 'MAKE_ICECREAM',
        payload:number,
        info: 'insert new icecream in the store'
    }
}