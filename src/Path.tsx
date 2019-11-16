import React from 'react';
import './Path.css';

export default function Path(props: {points: [number, number][]}) {
  const line = `M${props.points.map(pair => pair[1] + ',' + pair[0]).join('L')}`;

  return (
    <svg className='govuk-line-data-path' viewBox='0 0 100 100' preserveAspectRatio='none'>
      <path d={line} />
    </svg>
  );
}
