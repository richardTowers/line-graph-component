import React from 'react';
import Axis from './Axis';
import Path from './Path';
import './FullLineGraph.css';

function FullLineGraph() {
  return (
    <div className='govuk-line-graph-wrapper'>
      <div className='govuk-line-graph-container'>
        <Axis type='x' ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}/>
        <Axis type='y' ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}/>
        <Path />
      </div>
    </div>
  );
}

export default FullLineGraph;
