import React from 'react';
import ReactDOM from 'react-dom';

const message = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(
  message,
  document.getElementById('root')
);
