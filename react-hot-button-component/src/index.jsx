import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let color = 'royal-purple';
    const numTimesClicked = this.state.counter;

    if (numTimesClicked > 3 && numTimesClicked <= 6) {
      color = 'purple-marguerite';
    } else if (numTimesClicked > 6 && numTimesClicked <= 9) {
      color = 'pale-salmon';
    } else if (numTimesClicked > 9 && numTimesClicked <= 12) {
      color = 'rajah';
    } else if (numTimesClicked > 12 && numTimesClicked <= 15) {
      color = 'yellow';
    } else if (numTimesClicked > 15) {
      color = 'white';
    }
    return <button className={color} onClick={this.handleClick}>Hot Button</button>;
  }

  handleClick() {
    let newclicks = this.state.counter;
    newclicks++;
    this.setState({ counter: newclicks });
  }

}

ReactDOM.render(<HotButton />, document.getElementById('root'));
