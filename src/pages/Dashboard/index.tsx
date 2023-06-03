import React, { useState, useEffect } from 'react';
import Clock from '../../components/Time';
import CustomModal from '../../components/Modal';
import { Typography } from '@mui/material';
const userName = localStorage.getItem('name');
const Dashboard = () => {
  const [open, setOpen] = useState(!localStorage.getItem('name'));
  const [greeting, setGreeting] = useState('');
  const parsedValue = userName ? JSON.parse(userName) : null;
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 5 && hours < 12) {
      setGreeting('Good Morning');
    } else if (hours >= 12 && hours < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);
  return (
    <div>
      <Clock /> <CustomModal open={open} onClose={() => setOpen(false)} />
      <Typography variant="h6" component="div" sx={{ mt: 1 }}>
        {greeting},{' '}
        {parsedValue && parsedValue.firstName + ' ' + parsedValue.lastName}
      </Typography>
    </div>
  );
};

export default Dashboard;
