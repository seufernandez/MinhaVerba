import { useEffect } from "react";
// import { ThemeContext } from "styled-components";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
  useEffect(()=>{
    api.get('transactions')
    .then(response => console.log(response.data))
  },[])


  return(
    <Container>
      <table>
        <thead>
          <tr>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website Project</td>
            <td className="deposit" >US$12.000</td>
            <td>Development</td>
            <td>06/22/2021</td>
          </tr>
          <tr>
            <td>Bar do seu zé</td>
            <td className="withdraw" >- US$8.000</td>
            <td>Lazer</td>
            <td>06/22/2021</td>
          </tr>

        </tbody>
      </table>
    </Container>
  )
}