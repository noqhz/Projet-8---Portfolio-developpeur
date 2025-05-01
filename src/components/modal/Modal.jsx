import React from 'react';
import './Modal.scss';

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer la modale">
          &times;
        </button>
        {content}
      </div>
    </div>
  );
}

export default Modal;