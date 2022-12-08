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
    <ReactModal isOpen={opened} style={reactModalStyles}>
      <div>
        <h4
          style={{
            fontSize: '25px',
          }}
        >
          {title}
        </h4>
        <button
          onClick={() => setOpened(false)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: 'none',
            background: 'transparent',
            fontSize: '25px',
            cursor: 'pointer',
          }}
        >
          x
        </button>
        {children}
      </div>
    </ReactModal>
  );
};
