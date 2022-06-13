import "../styles/Shop.css"
import React from 'react';
import { useState, useEffect } from "react";
import ShopForm from '../components/ShopForm'

function Shop(props) {

    // CREATE STATE TO HOLD SHOP DATA
    const [products, setProducts] = useState([])

    const getShopData = async () => {
        const response = await fetch(props.URL + "shop")
        const data = await response.json()
        setProducts(data);
        console.log(data)
    }

    useEffect(() => {
        getShopData()
    }, [props.URL]);

    const loadProducts = products.map((product, idx) => {
        return (
            <div className="ProductCard" key={idx}>
                <div className="ProductName">
                    <h2>{product.name}</h2>
                </div>
                <img className="product-images" src={product.image} alt={product.name}></img>
                <h4>{`$${product.price}`}</h4>
                
            </div>
        )
    })

  return (
    <div className="ShopPage">
        <h1>SHOP</h1>
        <div className="ShopContainer">
            {loadProducts}
        </div>
        <div className="ShopFormContainer">
            <ShopForm />
        </div>
        
    </div>
  )
}

export default Shop