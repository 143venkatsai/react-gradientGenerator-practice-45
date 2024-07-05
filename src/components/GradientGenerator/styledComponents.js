// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientColor});
`
export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ededed;
`

export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  margin-top: 15px;
`

export const CustomColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

export const CustomLabel = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 14px;
  padding-bottom: 10px;
`

export const CustomInput = styled.input`
  height: 40px;
  width: 80px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const GenerateButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  border-radius: 4px;
  padding: 6px 15px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`

export const DirectionListItems = styled.ul`
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`
