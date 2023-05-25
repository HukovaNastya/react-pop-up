import React, {useState} from 'react';
import './App.css';
import Modal from './components/Modal';
import advisesList from './assets/advisesList';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [randomOfAdvise, setNumberOfAdvise] = useState(0);
  const [adviseContent, setAdviseContent] = useState('');

  const makeModalOpen = () => {
    setOpenModal(true);
    setNumberOfAdvise(Math.floor(Math.random() * advisesList.length));
    setAdviseContent(advisesList[randomOfAdvise].advise)
  };

  return (
    <div className="App">
      <button className="modal-button" onClick={makeModalOpen}>
        Generate Advice
      </button>
      <Modal openModal={openModal} randomOfAdvise={randomOfAdvise} adviseContent={adviseContent}/>
    </div>
  );
}

export default App;
