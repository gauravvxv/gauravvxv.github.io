import React from 'react';
import styles from '../styles/popup.module.css';

const popup = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup}>
        <h2>Thank you for contacting me!</h2>
        <p>I'll get back to you as soon as possible.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default popup;