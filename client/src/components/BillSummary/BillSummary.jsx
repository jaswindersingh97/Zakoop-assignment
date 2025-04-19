import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './styles.module.css';
import ProductCard from '../ProductCart';

function BillSummary({ storeId }) {
  const { cart } = useCart();
  const storeCart = cart[storeId] || {};
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = Object.values(storeCart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length <= 0) {
    return (
      <div className={styles.container}>
        <h3>No items so far</h3>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3>Bill Summary</h3>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            className={styles.list}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.name} - <span>{item.quantity} × ₹{item.price} = ₹{item.quantity * item.price}</span>
            {hoveredItem?.id === item.id && (
              <div className={styles.tooltip}>
                <ProductCard 
                id ={item.id}
                name ={item.name}
                image ={item.image}
                description ={item.description}
                price  ={item.price}
                storeId ={item.storeId}
                showButton={false}
                 />
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <h4>Total: ₹{total}</h4>
        <button className={styles.button}>Place Order</button>
      </div>
    </div>
  );
}

export default BillSummary;
