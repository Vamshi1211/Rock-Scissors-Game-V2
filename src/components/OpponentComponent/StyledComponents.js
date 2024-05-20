import styled from 'styled-components'

export const GameStartedContainer = styled.li`
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const YourChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
`

export const SelectedText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
`
export const SelectedImage = styled.img`
  width: 100%;
`
