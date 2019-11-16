import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FullLineGraph from './FullLineGraph';

function randomWalk(x0: number, y0: number, n: number): [number, number][] {
  const points = new Array(n);
  let x = x0;
  let y = y0;
  points[0] = [x, y];
  for (let i = 1; i < n; i++) {
    x += (Math.random() - 0.5) * 10;
    x = x > 100 ? 100 : x;
    x = x < 0 ? 0 : x;
    y += 1;
    points[i] = [x, y];
  }
  return points;
}
ReactDOM.render(<FullLineGraph points={randomWalk(50, 0, 100)}/>, document.getElementById('root'));
