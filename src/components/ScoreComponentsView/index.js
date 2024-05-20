import {
  GameTitleContainer,
  GameTitle,
  ScoreContainer,
  ScoreTitle,
  ScoreValue,
} from './StyledComponents'

const ScoreComponentView = props => {
  const {score} = props

  return (
    <>
      <GameTitleContainer>
        <GameTitle>Rock Paper Scissors</GameTitle>
        {/* <GameTitle>Paper</GameTitle>
        <GameTitle>Scissors</GameTitle> */}
      </GameTitleContainer>

      <ScoreContainer>
        <ScoreTitle>Score</ScoreTitle>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </>
  )
}

export default ScoreComponentView
