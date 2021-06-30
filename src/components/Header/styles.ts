import styled from "styled-components"

export const Container = styled.header`
background:var(--darkenGreen);


`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 2rem 11rem;
  display: flex;
  align-items:center;
  justify-content:space-between;

  button{
    display:flex;
    align-items:center;

    background: var(--mediumGreen);
    color: #fff;
    border: none;

    font-size: 1rem;
    padding: 0 2rem;
    border-radius:0.25rem;
    height: 3rem;

    transition: filter 200ms; 
  
    gap: 0.25rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`