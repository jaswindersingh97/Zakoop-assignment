import React, { useState } from 'react';
import styles from './OrderCard.module.css'; // Modular CSS
import productImage from './../../assets/images/Image-not-found.png'
import StoreImage from './../../assets/images/storeimage.jpg'

function OrderCard({ order }) {
  const [expanded, setExpanded] = useState(false);

  // Calculate total amount of the order
  const totalAmount = order.items.reduce((sum, item) => sum + item.Product.Price * item.qty, 0);

  // Format the order creation date
  const formattedDate = new Date(order.createdAt).toLocaleString();

  const toggle = () => setExpanded(prev => !prev);

  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={toggle}>
        <img 
        src={order.storeId.image} 
        alt={order.storeId.name} 
        className={styles.storeImage} 
        onError={(e) => {
                e.target.onerror = null;
                e.target.src = StoreImage; // use your fallback image path
              }} />
        <div>
          <h3>{order.storeId.name}</h3>
          <p>{order.storeId.location}</p>
        </div>
        <span className={styles.toggleIcon}>{expanded ? '-' : '+'}</span>
      </div>

      <div className={styles.orderInfo}>
        <p>Order ID:<span> {order._id}</span></p>
        <p>Created At:<span> {formattedDate}</span></p>
        <p>Total:<span> ₹{totalAmount}</span></p>
      </div>

      {expanded && (
        <div className={styles.content}>
          {order.items.map((item, idx) => (
            <div key={idx} className={styles.product}>
              {/* Replace this with <ProductCard product={item.Product} quantity={item.qty} /> if needed */}
              <img 
              src={item.Product.image} 
              alt={item.Product.name} 
              className={styles.productImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = productImage; // use your fallback image path
              }}
               />
              <div>
                <h4>{item.Product.name}</h4>
                <p>Qty: {item.qty}</p>
                <p>₹{item.Product.Price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderCard;
