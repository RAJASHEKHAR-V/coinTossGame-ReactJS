import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isHead: true, total: 0, heads: 0, tails: 0}

  onClickOfTossButton = () => {
    const headOrTailValue = Math.floor(Math.random() * 2)
    if (headOrTailValue === 0) {
      this.setState(prevState => ({
        isHead: headOrTailValue === 0,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: headOrTailValue === 0,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {isHead, total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="toss-card">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="toss-indication">Heads (or) Tails</p>
          {isHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="head-image"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="tail-image"
              alt="toss result"
            />
          )}
          <div>
            <button
              className="button"
              type="submit"
              onClick={this.onClickOfTossButton}
            >
              Toss Coin
            </button>
          </div>
          <div className="toss-result-card">
            <p className="total">Total: {total}</p>
            <p className="heads">Heads: {heads}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
