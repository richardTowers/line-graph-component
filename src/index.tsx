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
    x += (Math.random() - 0.5) * 20;
    x = x > 100 ? 100 : x;
    x = x < 0 ? 0 : x;
    y += 2;
    points[i] = [x, y];
  }
  return points;
}
ReactDOM.render([
  <p>
    An experiment in making an interactive SVG line graph using pure HTML, CSS and SVG (i.e. without requiring client side JS).
  </p>,
  <p>Currently this actually is using client side JS to render the chart, but that's just for convenience.</p>,
  <p>The actual interactions are all native HTML / CSS. Try tabbing through some links to see!</p>,
  <FullLineGraph points={randomWalk(50, 0, 50)}/>
], document.getElementById('root'));
