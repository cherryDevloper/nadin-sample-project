import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

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
    <Typography
      variant="h3"
      component="div"
      sx={{ fontFamily: 'Monospace', fontWeight: 'bold' }}
    >
      {formatTime(currentTime)}
    </Typography>
  );
};

export default Clock;
