import styled from "styled-components";
import { darken, transparentize } from "polished";


export const Container = styled.form`

h2{
  color: var(--text);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;

  background: #242424;
  border: 1px solid #515151;
  color: var(--text);
  border-radius: 0.25rem;

  font-weight: 400;
  font-size: 1rem;

  & + input{
    margin-top: 2rem;
  }
}


button[type="submit"]{
  width: 100%;
  height: 4rem;

  background: #15221D;
  border: 1px solid var(--green);
  border-radius: .25rem;
  color: var(--green);
  
  font-weight: 600;
  font-size: 1rem;

  margin-top: 1.5rem;

  transition: background .2s;

  &:hover{
    background: #1D4235;
  }
}

`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0; 
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps{
  isActive: boolean;
  activeColor: 'green'| 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
height: 4rem;
    border: ${(props)=>`1px solid ${transparentize(0.5,colors[props.activeColor])}`};
    /* border: 1px solid #515151; */

    border-radius: 0.25rem;

    background: ${( props ) => props.isActive 
    ? transparentize( 0.9, colors[props.activeColor]) 
    : 'transparent'
    };


    display: flex;
    align-items: center;
    justify-content: center;
  
    transition: filter .2s;

    img {
      height: 20px;
      width: 20px;
    }


    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;

      color: var(--text);
    }

    &:hover {
      /* border-color: ${darken(0.2, '#d7d7d7')}; */

      filter: brightness(0.8)
    }

`;