import React, { useState, useEffect } from 'react'

const useReactShop = () => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    return {
        cart,
        setCart,
        user,
        setUser
    }
}

export default useReactShop