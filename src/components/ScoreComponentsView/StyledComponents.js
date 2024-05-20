import styled from 'styled-components'

export const GameTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  width: 110px;
`

export const GameTitle = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  margin-bottom: 0px;
  font-size: 22px;
  font-weight: 500;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 150px;
  @media screen and (min-width: 576px) {
    width: 180px;
    height: 150px;
  }
`

export const ScoreTitle = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 32px;
  font-weight: 500;

  @media screen and (min-width: 576px) {
    font-size: 36px;
  }
`

export const ScoreValue = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 600;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    font-size: 40px;
  }
`
