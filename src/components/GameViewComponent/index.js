import {EachGameListContainer, EachGameButton, Image} from './StyledComponents'

const GameViewComponent = props => {
  const {eachGame, onGameStart} = props
  const {id, imageUrl} = eachGame
  const onGameButtonClicked = () => {
    onGameStart(imageUrl, id)
  }

  return (
    <>
      <EachGameListContainer>
        <EachGameButton
          type="button"
          onClick={onGameButtonClicked}
          data-testid={`${id.toLowerCase()}Button`}
        >
          <Image src={imageUrl} alt={id} />
        </EachGameButton>
      </EachGameListContainer>
    </>
  )
}

export default GameViewComponent
