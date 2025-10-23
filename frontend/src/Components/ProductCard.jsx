import React from 'react';
import axios from 'axios';
import "./ProductCard.css";

const ProductCard = ({ product }) => {

  const handleAddToCart = () => {
    axios.post("http://127.0.0.1:5000/api/cart", { id: product.id, quantity: 1 })
      .then(res => {
        alert("Added to cart!");
      })
      .catch(err => {console.log(err);
        alert("Failed to add to cart");
      });
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.isNew && <span className="new-badge">New</span>}
        {product.discount && <span className="discount-badge">{product.discount}% OFF</span>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        {product.shades && (
          <p className="product-variants">{product.shades} Shades</p>
        )}
        {product.size && (
          <p className="product-size">{product.size}</p>
        )}
        
        <div className="product-rating">
          <span className="rating-stars">★★★★☆</span>
          <span className="rating-count">({product.ratingCount})</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
        </div>
        
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;