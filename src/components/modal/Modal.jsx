import React, { useState } from 'react';
import './Modal.scss';

function Modal({ isOpen, onClose, content }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleClose}>
      <div
        className={`modal-content ${isClosing ? 'out' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fermer la modale">
          ✖
        </button>
        {content}
      </div>
    </div>
  );
}

export default Modal;