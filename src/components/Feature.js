import React from 'react'
import styled from 'styled-components'
import App from '../img/App.png'
import AnimatedShapes from './AnimatedShapes'


const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Image = styled.img`
  width: 80%;
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`

const Feature = () => {
  return (
    <Container>
        <Left><Image src={App}/></Left>
        <Right>
        <Title>
        Creating positive change through the joy of travel
        </Title>
        <Desc>
         We are the largest and most celebrated network of professional travel agents in Tunisia.
         Wherever you want to go, however you want to get there,
         whatever you want to do—we have the ideal travel agent match just for you.
        </Desc>
        <Desc>
        PEOPLE & PLANET-FRIENDLY ADVENTURES. FOR THE REAL. FOR THE CURIOUS. FOR YOU.
        </Desc>
        <Button>Learn More</Button>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Feature