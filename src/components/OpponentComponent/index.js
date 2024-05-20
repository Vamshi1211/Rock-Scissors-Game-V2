import {
  GameStartedContainer,
  YourChoiceContainer,
  SelectedText,
  SelectedImage,
} from './StyledComponents'

const OpponentComponent = props => {
  const {yourChoiceUrl, OpponentChoiceUrl} = props

  return (
    <GameStartedContainer>
      <YourChoiceContainer>
        <SelectedText>You</SelectedText>
        <SelectedImage src={yourChoiceUrl} alt="your choice" />
      </YourChoiceContainer>
      <YourChoiceContainer>
        <SelectedText>Opponent</SelectedText>
        <SelectedImage src={OpponentChoiceUrl} alt="opponent choice" />
      </YourChoiceContainer>
    </GameStartedContainer>
  )
}

export default OpponentComponent
