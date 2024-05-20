import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  GameContainer,
  TopContainer,
  GameViewContainer,
  OpponentChoiceContainer,
  GameResult,
  SelectedTextValue,
  OpponentContainer,
  PlayAgainButton,
  ReactPopUpContainer,
  TriggerButton,
  RulesImage,
} from './StyledComponents'
import ScoreComponentView from './components/ScoreComponentsView'
import GameViewComponent from './components/GameViewComponent'
import OpponentComponent from './components/OpponentComponent'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isGameStarted: false,
    yourChoice: '',
    score: 0,
    opponentChoice: '',
    gameResult: '',
  }

  onGameStart = (yourChoiceUrl, gameId) => {
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const randomImageObject = choicesList[randomNum]
    const {id} = randomImageObject

    let gameResultValue = null

    if (gameId === 'SCISSORS' && id === 'PAPER') {
      gameResultValue = 'YOU WON'
    } else if (gameId === 'ROCK' && id === 'SCISSORS') {
      gameResultValue = 'YOU WON'
    } else if (gameId === 'PAPER' && id === 'ROCK') {
      gameResultValue = 'YOU WON'
    } else if (gameId === 'SCISSORS' && id === 'ROCK') {
      gameResultValue = 'YOU LOSE'
    } else if (gameId === 'ROCK' && id === 'PAPER') {
      gameResultValue = 'YOU LOSE'
    } else if (gameId === 'PAPER' && id === 'SCISSORS') {
      gameResultValue = 'YOU LOSE'
    }

    if (gameResultValue === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameStarted: true,
        yourChoice: yourChoiceUrl,
        opponentChoice: randomImageObject.imageUrl,
        gameResult: 'YOU WON',
      }))
    } else if (gameResultValue === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isGameStarted: true,
        yourChoice: yourChoiceUrl,
        opponentChoice: randomImageObject.imageUrl,
        gameResult: 'YOU LOSE',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score,
        isGameStarted: true,
        yourChoice: yourChoiceUrl,
        opponentChoice: randomImageObject.imageUrl,
        gameResult: 'IT IS DRAW',
      }))
    }
  }

  playAgainClicked = () => {
    this.setState({isGameStarted: false})
  }

  onGameStartedContainer = () => {
    const {isGameStarted, yourChoice, opponentChoice, gameResult} = this.state

    return (
      <>
        {isGameStarted ? (
          <OpponentContainer>
            <OpponentChoiceContainer>
              <OpponentComponent
                yourChoiceUrl={yourChoice}
                OpponentChoiceUrl={opponentChoice}
              />
            </OpponentChoiceContainer>
            <GameResult>
              <SelectedTextValue>{gameResult}</SelectedTextValue>
            </GameResult>
            <PlayAgainButton type="button" onClick={this.playAgainClicked}>
              Play Again
            </PlayAgainButton>
          </OpponentContainer>
        ) : (
          <GameViewContainer>
            {choicesList.map(eachItem => (
              <GameViewComponent
                key={eachItem.id}
                eachGame={eachItem}
                onGameStart={this.onGameStart}
              />
            ))}
          </GameViewContainer>
        )}
      </>
    )
  }

  render() {
    const {score} = this.state
    return (
      <GameContainer>
        <TopContainer>
          <ScoreComponentView score={score} />
        </TopContainer>

        {this.onGameStartedContainer()}
        <ReactPopUpContainer>
          <Popup
            modal
            trigger={<TriggerButton>RULES</TriggerButton>}
            className="popup-container"
          >
            {close => (
              <>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />.
                </button>
                <div>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </>
            )}
          </Popup>
        </ReactPopUpContainer>
      </GameContainer>
    )
  }
}

export default App
