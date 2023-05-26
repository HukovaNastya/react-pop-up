import React, {useState} from 'react';
import './App.css';
import Modal from './components/Modal';
import advisesList from './assets/advisesList';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [randomOfAdvise, setNumberOfAdvise] = useState(0);
  const [adviseContent, setAdviseContent] = useState('');

  const onOverlayClick = (e) => {
    setOpenModal(false);
    e.stopPropagation();
  }

  const makeModalOpen = (e) => {
    setOpenModal(true);
    let randomElemIndex =  Math.floor(Math.random() * advisesList.length);
    setNumberOfAdvise(randomElemIndex);
    setAdviseContent(advisesList[randomElemIndex].advise)
    e.stopPropagation()
  };

  return (
    <div className="App" onClick={onOverlayClick}>
      <button className="modal-button" onClick={makeModalOpen}>
        Generate Advice
      </button>
      <Modal 
        openModal={openModal} 
        randomOfAdvise={randomOfAdvise} 
        adviseContent={adviseContent}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}

export default App;
