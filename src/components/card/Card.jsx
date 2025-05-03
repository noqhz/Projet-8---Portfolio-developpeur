import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './Card.scss';

function Card({ image, title, description, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card" onClick={handleOpenModal}>
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">technologies</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        }
      />
    </>
  );
}

export default Card;