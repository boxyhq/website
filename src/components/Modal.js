import React from 'react';

import styles from './Modal.module.css';

const Modal = ({ title, setOpened, children }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setOpened(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h4 className={styles.heading}>{title || 'Contact Us'}</h4>
          </div>
          <button className={styles.closeBtn} onClick={() => setOpened(false)}>
            x
          </button>
          <div className={styles.modalContent}>{children}</div>
          {/* <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
