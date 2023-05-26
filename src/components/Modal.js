import React from 'react';
import '../App.css';
import CloseButton from './CloseButton';

const Modal = ({openModal, randomOfAdvise, adviseContent, setOpenModal}) => {
  if(!openModal) return;
  
  return (
    <div className='modal-wrapper' >
      <div className='modal-content'>
        <div className='content-title'>
          <h1 >ADVICE #{randomOfAdvise}</h1>
        </div>
        <div className='content-text'>
          <h1>" {adviseContent} "</h1>
        </div>
      </div>
      <CloseButton setOpenModal={setOpenModal}/>
    </div>
  )
}

export default Modal;