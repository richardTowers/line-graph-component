import React from 'react';
import './Path.css';

export default function Path(props: {points: [number, number][]}) {
  const scaledPoints = props.points.map(p => [p[0] * 3.2, p[1] * 9.6]);
  const line = `M${scaledPoints.map(p => `${p[1]},${p[0]}`).join('L')}`;

  return (
    <div>
      <svg className='govuk-line-data-path' viewBox='0 0 960 320' preserveAspectRatio='none'>
        <path d={line} />
      </svg>
      <div>
        {scaledPoints.map((p,i) => (
          <a className='govuk-line-data-point-overlay' href={`#point-${i}`} style={{left: `calc((100% - 4rem) * ${i}/50 + 4rem)`}}>
            <span className='govuk-line-data-point-overlay-value'>{(100 - p[0]/3.2).toFixed(2)}%</span>
            <span className='govuk-line-data-point-overlay-marker' style={{top: `calc(${p[0]/3.2}% - 5px)`}}></span>
          </a>
        ))}
      </div>
    </div>
  );
}
