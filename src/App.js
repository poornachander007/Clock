import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onClickToggleClock = () => {
    this.setState(preState => ({showClock: !preState.showClock}))
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          onClick={this.onClickToggleClock}
          type="button"
          className="toggle-button"
        >
          {showClock ? 'Hide Clock' : 'Hide Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
