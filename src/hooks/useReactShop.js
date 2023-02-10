import React, { useState, useEffect } from 'react'

const useReactShop = () => {
    const [cart, setCart] = useState([]);
    let INITIAL_USER = {}
    if (localStorage.getItem("react-shop-user")) {
        INITIAL_USER = JSON.parse(localStorage.getItem("react-shop-user"));
    }
    const [user, setUser] = useState(INITIAL_USER);
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const API = "https://api.escuelajs.co/api/v1/products?limit=10&offset=10";
        if (products.length == 0) {
            async function fetchData() {
                const res = await fetch(API);
                const data = await res.json();
                setProducts([...products, ...data]);
            }
            fetchData();
        }
    }
    useEffect(() => { }, [user]);
    return {
        cart,
        setCart,
        user,
        setUser,
        products,
        setProducts,
        getProducts
    }
}

export default useReactShop