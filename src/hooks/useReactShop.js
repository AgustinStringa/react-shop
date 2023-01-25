import React, { useState, useEffect } from 'react'

const useReactShop = () => {
    const [cart, setCart] = useState([]);


    return {
        cart,
        setCart
    }
}

export default useReactShop