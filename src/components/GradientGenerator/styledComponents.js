// Style your elements here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  height: 100vh;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.colorData});
`

export const InnerContainer = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 450;
  padding: 0px;
  margin: 0px;
`

export const Text = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 0px;
  margin-top: 20px;
`
export const DirectionsContainer = styled.ul`
  height: 100px;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 60px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  justify-content: center;
  align-items: center;
`

export const ColorCode = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  margin: 0px;
`
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  margin-top: 15px;
`
export const InputLabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const GenerateButton = styled.button`
  height: 38px;
  width: 90px;
  background-color: #00c9b7;
  color: #1e293b;
  margin-top: 15px;
  border: none;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
`
