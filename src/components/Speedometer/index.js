// Write your code here
import {Component} from 'react'

import './index.css'

class SpeedoMeter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previous =>
      previous.count <= 190 ? {count: previous.count + 10} : null,
    )
  }

  onDecrement = () => {
    this.setState(previous =>
      previous.count >= 10 ? {count: previous.count - 10} : null,
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="div_for_outer">
        <div className="div_for_inner">
          <h1 className="for_header">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="for_image"
            alt="speedometer"
          />

          <h1 className="for_para">Speed is {count}mph</h1>
          <p className="for_para_2">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              className="forButton_1"
              type="button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              className="forButton_2"
              type="button"
              onClick={this.onDecrement}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SpeedoMeter
