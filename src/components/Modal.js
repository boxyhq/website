import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ children, title, opened }) => {
  return (
    <ReactModal
      isOpen={opened}
      style={{
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
          height: '550px',
          width: '400px',
        },
      }}
    >
      <div>
        <h4
          style={{
            fontSize: '25px',
          }}
        >
          {title}
        </h4>
        {children}
      </div>
    </ReactModal>
  );
};

// TODO: Fix it

// const ModalContext = React.createContext();

// export const ModalProvider = ({ setOpened, children }) => {
//   return (
//     <ModalContext.Provider value={{ setOpened }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

export default Modal;
