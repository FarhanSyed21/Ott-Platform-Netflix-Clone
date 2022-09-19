import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className='flex a-center j-between' >
      <img src={logo} alt="logo" />
      <button onClick={() => navigate(props.login?"/login":"signup") } >{props.login ? "Log In" : "Sign In"}</button>
    </Container>
  )
}

const Container = styled.header`
  padding: 0 4rem;
  img {
    height: 5rem;
  }
  button{
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    courser: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;