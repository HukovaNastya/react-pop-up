import React, {useState, useEffect} from 'react';
import './App.css';
import Modal from './components/Modal';
import { getAdvice } from "./services/advice.service";

function App() {
  const [openAdviceModal, setOpenAdviceModal] = useState(false);
  const [isInfoModalActive, setInfoModalActive] = useState(false);
  const [adviceId, setAdviceId] = useState(0);
  const [adviseContent, setAdviseContent] = useState('');

  const gaveAdvise = async () => {
      try {
          const data = await getAdvice()
          setAdviceId(data.slip.id)
          setAdviseContent(data.slip.advice)
      } catch (e) {
          console.log(e)
      }
  }

    useEffect(() => {
        gaveAdvise()
    }, [])


  const onOverlayClick = (e) => {
      e.stopPropagation()
      setOpenAdviceModal(false)
  }

  const makeModalOpen = async (e) => {
      e.stopPropagation()
      await gaveAdvise()
      setOpenAdviceModal(true)
  }

  return (
    <div className="App" onClick={onOverlayClick}>
        <button className="modal-button" onClick={makeModalOpen}>
            Generate Advice
        </button>
        <button className="modal-button" onClick={() => setInfoModalActive(true)}>
            Open info modal
        </button>
        <Modal
            openModal={openAdviceModal}
            title={`ADVICE: ${adviceId}`}
            setOpenModal={setOpenAdviceModal}
        >
            <p>{adviseContent}</p>
        </Modal>

        <Modal
            openModal={isInfoModalActive}
            title="Information about this project"
            setOpenModal={() => setInfoModalActive(false)}
        >
            <p>Some another text</p>
        </Modal>
    </div>
  );
}

export default App;
