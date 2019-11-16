import React from 'react';
import './Path.css';

export default function Path(props: {points: [number, number][]}) {
  const scaledPoints = props.points.map(p => [p[0] * 3.2, p[1] * 9.6]);
  const line = `M${scaledPoints.map(p => `${p[1]},${p[0]}`).join('L')}`;

  return (
    <svg className='govuk-line-data-path' viewBox='0 0 960 320' preserveAspectRatio='none'>
      <path d={line} />
      {scaledPoints.map((p,i) => (
        // @ts-ignore
        <a className='govuk-line-data-point-overlay' xlinkHref={`#point-${i}`} href={`#point-${i}`}>
          <line x1={p[1]} y1={25} x2={p[1]} y2={320}/>
          <circle cx={p[1]} cy={p[0]} r={5}/>
          <rect x={p[1]-10} y={0} width={20} height={320}/>
          <text x={p[1] - 20} y={20}>{(100 - p[0]/3.2).toFixed(2) + '%'}</text>
        </a>
      ))}
    </svg>
  );
}
