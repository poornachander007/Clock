import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('Constructor triggered.......')
  }

  componentDidMount() {
    this.timeId = setInterval(this.tick, 1000)
    console.log('Did mounted........')
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
    console.log(
      '################################ time Cleared ################################',
    )
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('Render triggered.....')
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
