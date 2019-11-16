import React from 'react';
import ReactDOM from 'react-dom';
import FullLineGraph from './FullLineGraph';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FullLineGraph points={[[0,0],[100,100]]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
