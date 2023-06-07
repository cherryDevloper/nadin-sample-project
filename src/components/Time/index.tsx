import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
      data-testid="clock"
    >
      <CircularProgress
        variant="determinate"
        value={(currentTime.getSeconds() / 60) * 100}
        size={200}
        thickness={2}
        style={{ position: 'absolute' }}
      />
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontFamily: 'Monospace',
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 1,
        }}
        color={'primary'}
      >
        {formatTime(currentTime)}
      </Typography>
    </div>
  );
};

export default Clock;
