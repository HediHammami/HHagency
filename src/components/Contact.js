import React from 'react'
import styled from 'styled-components'
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";


const Container = styled.div`
height: 90%;
  
`
const Wrapper = styled.div`
height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`
const FormContainer = styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
  width: 100%;
}
`
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`

const AdrContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 480px) {
  width: 100%;
  margin-top: 20px;
}
`
const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`
const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
        <Wrapper>
                  <FormContainer>
                      <Title>Questions? <br/> Let's get in touch </Title>
                      <Form>
                      <LeftForm>
                          <Input placeholder='Your name'/>
                          <Input placeholder='Your email'/>
                          <Input placeholder='Subject'/>
                      </LeftForm>
                      <RightForm>
                          <TextArea placeholder='Your message' />
                          <Button>Send</Button>
                      </RightForm>
                      </Form>
                  </FormContainer>
                  <AdrContainer>
                      <AddressItem>
                          <Icon src={Map}/>
                          <Text> 9 Rue de pasteur, Megrine, Ben arous </Text>
                      </AddressItem>
                      <AddressItem>
                          <Icon src={Phone}/>
                          <Text> +216 50 260 067 </Text>
                          <Text> +216 50 000 067 </Text>
                      </AddressItem>
                      <AddressItem>
                          <Icon src={Send}/>
                          <Text> contact.hedi@gmail.com </Text>
                          <Text> contact.HHAgency@gmail.com </Text>
                      </AddressItem>
                  </AdrContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact