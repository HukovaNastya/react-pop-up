import React from 'react';
import '../App.css';
import CloseButton from './CloseButton';

const Modal = ({ openModal, title, setOpenModal, ...props }) => {
  if(!openModal) return;
  
  return (
    <div className='modal-wrapper' >
      <div className='modal-content'>
        <div className='content-title'>
          <h1>{title}</h1>
        </div>
        <div className='content-text'>
            {props.children}
        </div>
      </div>
      <CloseButton setOpenModal={setOpenModal}/>
    </div>
  )
}

export default Modal;