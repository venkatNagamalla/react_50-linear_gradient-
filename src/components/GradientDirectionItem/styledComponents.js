// Style your elements here

import styled from 'styled-components'

export const ListItem = styled.li`
  height: 44px;
  width: 49%;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  color: ${props => (props.isActive ? '#3334155' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 450;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
