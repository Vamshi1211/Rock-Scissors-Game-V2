import styled from 'styled-components'
import {
  YourChoiceContainer,
  SelectedText,
} from './components/OpponentComponent/StyledComponents'

export const GameContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  opacity: ${props => (props.rules ? 0.8 : 1)};
`
export const TopContainer = styled.div`
  width: 90%;
  border: 2px solid #ffffff;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  @media screen and (min-width: 576px) {
    max-width: 1100px;
  }
`

export const GameViewContainer = styled.ul`
  padding: 0px;
  //   border: 1px solid yellow;
  width: 90%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`

export const OpponentChoiceContainer = styled.ul`
  flex-wrap: nowrap;
  display: flex;
  justify-content: space-between;
  //   border: 1px solid green;
  width: 90%;
  max-width: 600px;
  padding-left: 0px;
  margin-top: 30px;
`

export const OpponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameResult = styled(YourChoiceContainer)`
  width: 100%;
`
export const SelectedTextValue = styled(SelectedText)`
  font-size: 28px;
  font-weight: 700;
  @media screen and (min-width: 576px) {
    font-size: 36px;
  }
`
export const PlayAgainButton = styled.button`
  padding: 15px 30px 15px 30px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 20px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    padding: 10px 40px 10px 40px;
    font-size: 24px;
  }
`
export const ReactPopUpContainer = styled.div`
  align-self: flex-end;
  margin-right: 40px;
  background-color: #ffffff;
  border-radius: 8px;
`

export const TriggerButton = styled.button`
  padding: 10px 30px 10px 30px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 20px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  opacity: ${props => (props.open ? 0.5 : 1)};
  @media screen and (min-width: 576px) {
    padding: 10px 40px 10px 40px;
    font-size: 24px;
  }
`

export const PopupText = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 24px;
  @media screen and (min-width: 576px) {
    font-size: 32px;
  }
`
export const RulesImage = styled.img`
  width: 80%;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 90%;
  margin: auto;
  padding: 20px;
  opacity: 1;
`

export const CrossButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 20px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
