import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.css';
import storeImage from './../../assets/images/storeimage.jpg'
function StoreCard({ name, location, image, storeId }) {
  return (
    <Link to={`${storeId}/products`} className={styles.container}>
      <img className={styles.image} 
      src={image} 
      alt={name}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = storeImage;
      }}
      />
      <div className={styles.content}>
        <h5 className={styles.title}>{name}</h5>
        <p className={styles.text}>{location}</p>
        <div className={styles.button}>View Products</div>
      </div>
    </Link>
  );
}

export default StoreCard;
