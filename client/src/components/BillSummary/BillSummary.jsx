import React from 'react';
import { useCart } from '../../context/CartContext';
import styles from './styles.module.css'
function BillSummary({ storeId }) {
  const { cart } = useCart();
  const storeCart = cart[storeId] || {};

  const items = Object.values(storeCart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
  if(items.length<=0){
    return(
        <div className={styles.container}>
            <h3>No items so far</h3>
        </div>
    )
  }
  
  return (
    <div className={styles.container}>
      <h3>Bill Summary</h3>
      <ul>
        { items.map(item => (
          <li className={styles.list} key={item.id}>
            {item.name} - <span> {item.quantity} × ₹{item.price} = ₹{item.quantity * item.price}</span>
          </li>
        ))
        }
      </ul>
      <div className={styles.footer}>
        <h4>Total: ₹{total}</h4>
        <button className={styles.button}>Place Order</button>
      </div>
    </div>
  );
}

export default BillSummary;
