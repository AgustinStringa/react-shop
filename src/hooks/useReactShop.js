import React, { useState, useEffect } from 'react'

const useReactShop = () => {
    const [cart, setCart] = useState([]);
    let INITIAL_USER = {}
    if (localStorage.getItem("react-shop-user")) {
        INITIAL_USER = JSON.parse(localStorage.getItem("react-shop-user"));
    }
    const [user, setUser] = useState(INITIAL_USER);
    const [products, setProducts] = useState([]);
    useEffect(() => { }, [user]);
    return {
        cart,
        setCart,
        user,
        setUser,
        products,
        setProducts
    }
}

export default useReactShop