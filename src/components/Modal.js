import React from 'react';
import '../App.css';

const Modal = ({openModal, randomOfAdvise, adviseContent}) => {
  if(!openModal) return;
  return (
    <div className='modal-wrapper'>
      <h1>{randomOfAdvise}</h1>
      <h3>{adviseContent}</h3>
    </div>
  )
}

export default Modal;