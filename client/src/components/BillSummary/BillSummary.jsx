import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './styles.module.css';
import ProductCard from '../ProductCart';
import Modal from '../Modal';
import ConfirmOrderModal from '../Modal/ConfirmOrderModal';
import { useNavigate } from 'react-router-dom';
function BillSummary({ storeId }) {
  const { cart } = useCart();
  const storeCart = cart[storeId] || {};
  const [hoveredItem, setHoveredItem] = useState(null);

  const [modal,setModal] = useState(false);

  const token = localStorage.getItem("token")
  const navigate = useNavigate();

  const placeOrder = () =>{
    setModal(true)
  }
  const closeModal = () =>{
    setModal(false)
  }

  const items = Object.values(storeCart);
  const total = items.reduce((sum, item) => sum + item.Price * item.quantity, 0);

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
            key={item._id}
            className={styles.list}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.name} - <span>{item.quantity} × ₹{item.Price} = ₹{item.quantity * item.Price}</span>
            {hoveredItem?._id === item._id && (
              <div className={styles.tooltip}>
                <ProductCard 
                id ={item._id}
                name ={item.name}
                image ={item.image}
                description ={item.description}
                price  ={item.Price}
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
        <button onClick={token? placeOrder :navigate("/login")} className={styles.button}>Place Order</button>
      </div>
      <Modal isOpen={modal} onClose={closeModal} children={<ConfirmOrderModal items={items} closeModal={closeModal} storeId={storeId} />}/>
    </div>
  );
}

export default BillSummary;
