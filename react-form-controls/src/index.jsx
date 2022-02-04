import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: `` };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(event) {
    this.setState({ email: `${event.target.value}` });
  }
  handleSubmit(event) {
    console.log('State', { email: `${this.state.email}` });
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default NewsletterForm

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
