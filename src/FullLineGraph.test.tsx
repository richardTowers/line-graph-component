import React from 'react';
import ReactDOM from 'react-dom';
import FullLineGraph from './FullLineGraph';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FullLineGraph />, div);
  ReactDOM.unmountComponentAtNode(div);
});
