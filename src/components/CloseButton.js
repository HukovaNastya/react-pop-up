import React from 'react';
import '../App.css';

const CloseButton = ({ setOpenModal }) => {
  return (
    <div>
      <button className='close-modal-btn' onClick={() => setOpenModal(false)}>X</button>
    </div>
  )
}

export default CloseButton;