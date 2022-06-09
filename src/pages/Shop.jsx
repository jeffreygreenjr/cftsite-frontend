import React from 'react';
import { useState, useEffect } from "react";

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
            <div className="ProductList" key={idx}>
                <h2>{product.name}</h2>
                <img className="product-images" src={product.image} alt={product.name}></img>
                <h4>{`$${product.price}`}</h4>
                
            </div>
        )
    })

  return (
    <div>
        <h1>Shop</h1>
        {loadProducts}
    </div>
  )
}

export default Shop