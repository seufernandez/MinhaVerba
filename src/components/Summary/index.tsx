import { useContext } from "react";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

import { Container } from "./styles";
import { TransactionsContext } from './../../TransactionsContext';

export function Summary(){
  const { transactions } = useContext(TransactionsContext)


  console.log(transactions)
  return(
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>US$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Income</p>
          <img src={outcomeImg} alt="income" />
        </header>
        <strong>- US$300,00</strong>
      </div>
      <div className="highlight-background" >
        <header>
          <p>Income</p>
          <img src={totalImg} alt="income" />
        </header>
        <strong>US$700,00</strong>
      </div>
    </Container>
  )
}