import styled from 'styled-components'

export const GradientItem = styled.li`
  list-style-type: none;
  padding-right: 20px;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`

export const GradientButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  padding: 8px 20px;
  border: none;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
