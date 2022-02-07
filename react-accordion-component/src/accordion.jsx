import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: null };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    const id = e.target.id;
    if (this.state.isOpen === id) {
      this.setState({ isOpen: null });
    } else {
      this.setState({ isOpen: id });
    }
  }

  render() {
    const data = this.props.data;

    return (
      <div className="accordion">
        {data.map(topic => (
          <div className="topic" key={topic.id} onClick={this.clickHandler}>
            <div id={topic.id} className="subject">
              {topic.subject}
            </div>
            {this.state.isOpen === topic.id &&
              <div className='details'>
                {topic.details}
              </div>
            }
          </div>
        ))}
      </div>
    );
  }
}
