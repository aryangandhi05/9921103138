import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
 const [products, setProducts] = useState([]);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/categories/Electronics/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
 }, []);

 return (
    <div>
      <h1>Top Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
 );
}

export default App;
