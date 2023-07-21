import React from 'react';

const Modal = ({ isOpen, onClose, title, content, children }) => {
  return (
    <div className="w-auto p-8 ">
      {/* <button onClick={onClose}>Close Modal</button> */}
      {isOpen && (
        <dialog
          open
          onClose={onClose}
          style={{
            // position: 'fixed',
            // top: '50%',
            // left: '50%',
            // transform: 'translate(-50%, -50%)',
            border: '1px solid black',
            padding: '1rem',
            backgroundColor: 'red',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
          }}
          className="bg-blue-500"
        >
          {children}
          <button onClick={onClose}>Close</button>
        </dialog>
      )}
    </div>
  );
};

export default Modal;
