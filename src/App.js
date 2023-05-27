import React, {useState, useEffect} from 'react';
import './App.css';
import Modal from './components/Modal';
import advisesList from './assets/advisesList';
import axios from 'axios';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [randomOfAdvise, setNumberOfAdvise] = useState(0);
  const [adviseContent, setAdviseContent] = useState('');

  const gaveAdvise =  () => {
    axios.get(`https://api.adviceslip.com/advice`)
     .then(data => {
       setNumberOfAdvise(data.data.slip.id)
       setAdviseContent(data.data.slip.advice)
     })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    gaveAdvise();
 }, [])


  const onOverlayClick = (e) => {
    setOpenModal(false);
    e.stopPropagation();
  }

  const makeModalOpen = (e) => {
    setOpenModal(true);
    gaveAdvise()
    //old solution
    // let randomElemIndex =  Math.floor(Math.random() * advisesList.length);
    // setNumberOfAdvise(randomElemIndex);
    // setAdviseContent(advisesList[randomElemIndex].advise)
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
