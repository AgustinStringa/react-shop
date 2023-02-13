import React, { useState, useEffect } from 'react'

const useReactShop = () => {
    const [cart, setCart] = useState([]);
    const [filters, setFilters] = useState({
        text: "",
        price: false,
        recent: false,
    });
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

    const sortByPrice = (products) => {
        return products.sort(function (a, b) {
            if (a.price > b.price) {
                return 1
            }
            if (a.price < b.price) {
                return -1
            }
        })
    }

    const sortByRecent = (products) => {
        return products.sort(function (a, b) {
            if (a.creationAt > b.creationAt) {
                return 1
            }
            if (a.creationAt < b.creationAt) {
                return -1
            }
        });
    }

    const filterProductByName = (products, name) => {
        return products.filter((el) => {
            return el.title.toLowerCase().includes(name.toLowerCase())
        });
    }
    return {
        cart,
        setCart,
        user,
        setUser,
        products,
        setProducts,
        getProducts,
        filters,
        setFilters,
        sortByPrice,
        sortByRecent,
        filterProductByName
    }
}

export default useReactShop