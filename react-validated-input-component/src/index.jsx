import React from 'react';
import ReactDOM from 'react-dom';
import { ImCross, ImCheckmark } from 'react-icons/im';

class PasswordValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', message: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render() {
    const element =
      <form onSubmit={this.handleSubmit}>
        <p>
          Password:
        </p>
        <div>
          <label>
            <input type="password" value={this.state.email} onChange={this.handleChange}></input>
          </label>
          {(this.state.password === '') &&
            <span>
              <span className="icon"><ImCross className='cross' /></span>
              <div><p className="red">A password is required.</p></div></span>
          }
          {((this.state.password.length < 8 && this.state.password !== '')) &&
            <span>
              <span className="icon"><ImCross className='cross' /></span>
              <div><p className="red">Your password is too short.</p></div></span>
          }
          {(this.checkSpecialCharacters(this.state.password)) && (this.state.password.length >= 8) &&
            <span className="icon"><ImCheckmark className='check' /></span>
          }
          {!(this.checkSpecialCharacters(this.state.password)) && (this.state.password.length >= 8) &&
            <span>
              <span className="icon"><ImCross className='cross' /></span>
            <div><p className="red">Please ensure that your password contains a capital letter, a number, and a special character.</p></div></span>
          }
        </div>

      </form>;
    return element;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  checkSpecialCharacters(password) {
    const regex = /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])/;
    return regex.test(password);
  }
}

ReactDOM.render(<PasswordValidation />, document.getElementById('root'));
