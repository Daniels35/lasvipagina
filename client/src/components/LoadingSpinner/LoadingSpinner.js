import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const LoadingSpinner = ({ customStyle }) => {
  const spinnerColor = customStyle ? '#ffffff' : '#0098CA';
  const secondaryColor = customStyle ? '#ffffff' : '##0098CA';
  const textColor = customStyle ? '#ffffff' : '##0098CA';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CirclesWithBar
        color={spinnerColor}
        height={80}
        width={80}
        secondaryColor={secondaryColor}
      />
      <h4
        style={{
          marginTop: '1rem',
          color: textColor, 
          textAlign: 'center',
          maxWidth: '80%',
        }}
      >
        Aliviando molestias y mejorando tu bienestar con las Pinzas Lasvi...
      </h4>
    </div>
  );
};

export default LoadingSpinner;

