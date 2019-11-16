import React from 'react';
import './Axis.css';

export default function Axis(props: {type: 'x' | 'y', ticks: number[]}) {
  let ticks;
  let positionOffset: 'bottom' | 'left';
  switch(props.type) {
    case 'x':
      ticks = props.ticks;
      positionOffset = 'left';
      break;
    case 'y':
      ticks = props.ticks.reverse();
      positionOffset = 'bottom';
      break;
    default:
      throw new Error(`Unrecognised type ${props.type}`);
  }
  return (
    <div className={`govuk-line-graph-axis ${props.type}`}>{
      ticks.map(tick => (
        <div className='govuk-line-graph-tick' style={{[positionOffset]: `calc(${tick}% - 25px)`}}>{tick}%</div>
      ))
    }</div>
  );
}
