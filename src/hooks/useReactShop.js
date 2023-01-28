import React, { useState, useEffect } from 'react'

const useReactShop = () => {
    const [cart, setCart] = useState([]);
    let INITIAL_USER = {}
    if (localStorage.getItem("react-shop-user")) {
        INITIAL_USER = JSON.parse(localStorage.getItem("react-shop-user"));
    }
    const [user, setUser] = useState(INITIAL_USER);
    return {
        cart,
        setCart,
        user,
        setUser
    }
}

export default useReactShop