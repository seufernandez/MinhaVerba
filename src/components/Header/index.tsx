import logoImg from '../../assets/logo.svg';
import plusIconImg from '../../assets/plusIcon.svg';

import { Container, Content } from './styles';

interface HeaderProps  {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){


  return(
    <Container>
      <Content>
      <img src={logoImg} alt="MinhaVerba" />
      <button type="button" onClick={onOpenNewTransactionModal} >
        <img src={plusIconImg} alt="" />
        New Transaction
      </button>

      </Content>
    </Container>
  ) 
}