import React from 'react';

const PromoCircle = ({ size = 24, color = '#F4AE3F', label = false, sides = 10 }) => {
  const radius = size / 2;
  const angle = (Math.PI * 2) / sides;
  const points = [];
  for (let i = 0; i < sides; i++) {
    const x = radius + Math.sin(i * angle) * radius;
    const y = radius - Math.cos(i * angle) * radius;
    points.push(`${x},${y}`);
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon fill={color} points={points.join(' ')} />
      {label && (
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="15"
          fontWeight="bold"
        >
          {label}
        </text>
      )}
    </svg>
  );
};

export default PromoCircle;