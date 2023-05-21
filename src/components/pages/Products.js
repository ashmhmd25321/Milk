import React from 'react';
import './Products.css';
import Navbar from '../Navbar';

const products = [
  {
    name: 'Product 1',
    description: 'Description of Product 1',
    src: 'images/straw.jpg'
  },
  {
    name: 'Product 2',
    description: 'Description of Product 2',
    src: 'images/straw.jpg'
  },
  {
    name: 'Product 3',
    description: 'Description of Product 3',
    src: 'images/straw.jpg'
  },
  {
    name: 'Product 4',
    description: 'Description of Product 3',
    src: 'images/straw.jpg'
  },
  {
    name: 'Product 5',
    description: 'Description of Product 3',
    src: 'images/straw.jpg'
  },
  {
    name: 'Product 6',
    description: 'Description of Product 3',
    src: 'images/straw.jpg'
  },
];

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <h2 className="product-name">{product.name}</h2>
            <img className="product-image" src={product.src} alt={product.name} />
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;