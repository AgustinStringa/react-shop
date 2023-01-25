import React, { useState, useEffect } from 'react'

const useReactShop = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // console.log(cart)
    }, [cart])

    return {
        cart,
        setCart
    }
}

export default useReactShop