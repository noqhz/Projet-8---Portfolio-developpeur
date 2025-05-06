import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './Card.scss';
import Slideshow from '../slideshow/Slideshow';
import ReactMarkdown from 'react-markdown';

function Card({ image, images, title, description, link, tools }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card" onClick={handleOpenModal}>
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{tools}</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={
          <div className=''>
            <h2>{title}</h2>
            <Slideshow images={images} />
            <ReactMarkdown
              components={{
                p: ({node, ...props}) => <p className="modal-markdown" {...props} />,
                a: ({ node, children, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                )
              }}
            >
              {description}
          </ReactMarkdown>
            <a href={link} className="projet-link" target="_blank" rel="noopener noreferrer">
              Repo Github
            </a>
          </div>
        }
      />
    </>
  );
}

export default Card;