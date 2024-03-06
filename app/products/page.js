"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductPage(){

    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://65e8a31c4bb72f0a9c4ffc6f.mockapi.io/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name}  />
            {/* No need to display the description */}
          </li>
        ))}
      </ul>
    </div>
  );
}