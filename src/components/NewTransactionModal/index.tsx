import { useState } from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}:NewTransactionModalProps){

  const [ type, setType] = useState('deposit');



  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close" 
      >
        <img src={closeImg} alt="Close Modal" />
      </button>

      <Container>
      <h2>New Transaction</h2>
      
      <input 
      type="text" 
      placeholder="Title"
      />

      <input 
      type="number" 
      placeholder="Value"
      />
      
      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={ ()=>{setType('deposit')} }
          isActive={type==='deposit'}
          activeColor='green'
        >
          <img src={incomeImg} alt="Income" />
          <span>Income</span>
        </RadioBox>
        <RadioBox
          type="button"
          onClick={ ()=>{setType('withdraw')} }
          isActive={type==='withdraw'}
          activeColor='red'
        >
          <img src={outcomeImg} alt="Outcome" />
          <span>Outcome</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input 
      type="number" 
      placeholder="Category"
      />
      <button type="submit">Done</button>
      
      </Container>
    </Modal>
  )
}