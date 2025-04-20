import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ThankYouModal.module.css';

function ThankYouModal() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h1>🎉 Thank You!</h1>
        <p>Your order has been placed successfully.</p>
        <Link to="/" className={styles.confirmBtn}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default ThankYouModal;
