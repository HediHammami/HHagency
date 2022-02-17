import React from 'react'
import styled from 'styled-components'
import Women from '../img/women.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
padding: 20px;
@media only screen and (max-width: 480px) {
  flex-direction: column;
}
`
const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px) {
  width: 100%;
  height: 100%;
}
`
const Right = styled.div`
width: 40%;
@media only screen and (max-width: 480px) {
  display: none;
}
`

const Title = styled.h1`
font-size: 60px;
width:60%;
@media only screen and (max-width: 480px) {
  width: 100%;
  font-size: 50px;

`
const Desc = styled.p`
 width: 60%;
 font-size:20px;
 margin-top: 25px;
 @media only screen and (max-width: 480px) {
  width: 100%;
`

const Info = styled.div`
width: 60%;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: space-between;
@media only screen and (max-width: 480px) {
  width: 100%;
  flex-direction: column;
`
const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border-radius: 10px;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
@media only screen and (max-width: 480px) {
  margin-bottom: 20px;
`
const Contact = styled.div`
display: flex;
flex-direction: column;
`

const Phone = styled.span`
color: #f0667d;
font-weight: bold;
`
const ContactText = styled.span`
   color: gray;
`
const Image = styled.img`
    width: 100%;
`

const Intro = () => {
  return (
    <Container>
           <Left>
        <Title>Your Adventure Starts Here</Title>
        <Desc>
        If you want to know the truth of who you are, walk until not a person knows your name.
         Travel is the great leveler, the great teacher, bitter as medicine, crueler than mirror-glass.
         A long stretch of road will teach you more about yourself than a hundred years of quiet.
        </Desc>
        <Info>
          <Button>Start Planning</Button>
          <Contact>
            <Phone>Call Us (216) 50 260 067</Phone>
            <ContactText>For any question or concern.</ContactText>
          </Contact>
        </Info>
      </Left>
        <Right><Image src={Women} /></Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Intro