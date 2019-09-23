import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const clicker = (e) => {
  e.target.style.color = "blue"
}


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={clicker} />
  </div>,
  document.getElementById('root')
);