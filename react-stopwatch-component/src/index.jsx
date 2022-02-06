import React from 'react';
import ReactDOM from 'react-dom';

import { FaPlay, FaPause } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, stopwatchOn: false, interval: 0 };
    this.handleReset = this.handleReset.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  render() {
    let element = null;

    if (!this.state.stopwatchOn) {
      element = (
        <div>
          <div className="row">
            <h1>{this.state.counter}</h1>
            < BsCircle onClick={this.handleReset} className="stopwatch" />
          </div>

          <div className="row" >
            <FaPlay onClick={this.handlePlayPause} className="play-button" />
          </div>
        </div>);
    } else {
      element = (<div>
        <div className="row">
          <h1>{this.state.counter}</h1>
          < BsCircle onClick={this.handleReset} className="stopwatch" />
        </div>

        <div className="row"><FaPause onClick={this.handlePlayButton} className="play-button" /></div>
      </div>);
    }
    return element;
  }

  handlePlayButton() {
    this.setState(prevState => ({
      stopwatchOn: !prevState.stopwatchOn
    }));
    if (this.state.stopwatchOn) {
      clearInterval(this.state.interval);
    } else {
      let currentCount = this.state.counter;
      this.setState({
        interval: setInterval(() => {
          currentCount++;

          this.setState({ counter: currentCount });
        }, 1000)
      });
    }
  }

  handleReset() {
    if (!this.state.stopwatchOn) {
      this.setState({ counter: 0 });
      clearInterval(this.state.interval);
    }
  }
}


ReactDOM.render(<Stopwatch />, document.getElementById('root'));
