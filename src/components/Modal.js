import React from 'react';
import ReactModal from 'react-modal';

const reactModalStyles = {
  overlay: {
    position: 'fixed',
    top: '80px',
    backgroundColor: 'rgb(78 78 78 / 75%)',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '30px',
    margin: 'auto',
  },
};

export const Modal = ({ children, title, opened, setOpened }) => {
  return (
    <ReactModal isOpen={opened} style={reactModalStyles} ariaHideApp={false}>
      <div>
        <h4
          style={{
            fontSize: '25px',
            color: '#1C1E21',
          }}
        >
          {title}
        </h4>
        <button
          onClick={() => setOpened(false)}
          className="modal__close__btn"
          aria-label="Close"
          style={{
            color: '#1C1E21',
          }}
        >
          x
        </button>
        {children}
      </div>
    </ReactModal>
  );
};
