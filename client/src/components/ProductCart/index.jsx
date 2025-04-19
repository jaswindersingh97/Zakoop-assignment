import React, { useState } from "react";
import styles from "./styles.module.css";
import productImage from './../../assets/images/productImage.jpg'
function ProductCard({ id, name, image, description, price }) {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  return (
    <div className={styles.container}>
      <img className={styles.productImage} 
      src={image} 
      alt={name}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = productImage; // use your fallback image path
      }}
       />
      <div className={styles.productDetails}>
        <h5 className={styles.productTitle}>{name}</h5>
        <p className={styles.productDescription}>{description}</p>
        <span className={styles.productPrice}>₹{price}</span>

        <div className={styles.cartActions}>
          {quantity === 0 ? (
            <button className={styles.addToCartBtn} onClick={increaseQuantity}>
              Add to Cart
            </button>
          ) : (
            <div className={styles.quantityControls}>
              <button onClick={decreaseQuantity} className={styles.controlBtn}>
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button onClick={increaseQuantity} className={styles.controlBtn}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
