import React from 'react';
import ReactDOM from 'react-dom';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let element;
    if (this.state.isOn) {
      element =
      <div>
        <div className="row"><button onClick={this.handleClick}><BsToggleOn className='toggle-green' /></button><h1>ON</h1></div>
        <div className="row"><button onClick={this.handleClick}><BsToggleOff className='black' /></button><h1>OFF</h1></div>
      </div>;
    } else {
      element =
      <div>
        <div className="row"><button onClick={this.handleClick}><BsToggleOff className='toggle-black' /></button><h1>OFF</h1></div>
        <div className="row"><button onClick={this.handleClick}><BsToggleOn className='toggle-green' /></button><h1>ON</h1></div>
      </div>;
    }
    return element;
  }

  handleClick() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }
}

ReactDOM.render(<ToggleSwitch />, document.getElementById('root'));
