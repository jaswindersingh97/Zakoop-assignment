import styles from './index.module.css';
import React from 'react'

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    const light = {background:'white', color:'#18181B'}
  return (
    <div  className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={light} className={styles.modalClose} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );

}

export default Modal