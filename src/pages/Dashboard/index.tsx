import React, { useState, useEffect } from 'react';
import Clock from '../../components/Time';
import CustomModal from '../../components/Modal';
import { Typography } from '@mui/material';
import { Name } from '../../components/Modal/Modal.types';

const Dashboard = () => {
  const [open, setOpen] = useState(!localStorage.getItem('name'));
  const [greeting, setGreeting] = useState('');
  const [parsedValue, setParsedValue] = useState<Name | null>();
  const [name, setName] = useState<Name>({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    const hours = new Date().getHours();
    const greeting =
      hours >= 5 && hours < 12
        ? 'Good Morning'
        : hours >= 12 && hours < 17
        ? 'Good Afternoon'
        : 'Good Evening';

    setGreeting(greeting);
    const savedName = JSON.parse(localStorage.getItem('name') ?? 'null');
    setName(savedName ?? { firstName: '', lastName: '' });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setName({
      firstName: '',
      lastName: '',
    });

    localStorage.setItem('name', JSON.stringify(name));
    handleModalClose(name);
  };

  const handleModalClose = (value: Name = { firstName: '', lastName: '' }) => {
    setOpen(false);
    if (value && value.firstName && value.lastName) {
      setParsedValue(value);
    }
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, firstName: e.target.value });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, lastName: e.target.value });
  };
  return (
    <div>
      <Clock />
      <CustomModal
        name={name}
        open={open}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
        onChangeFirstName={handleFirstNameChange}
        onChangeLastName={handleLastNameChange}
      />
      <Typography variant="h6" component="div" sx={{ mt: 1 }}>
        {greeting},{' '}
        {parsedValue
          ? `${parsedValue.firstName} ${parsedValue.lastName}`
          : `${name.firstName} ${name.lastName}`}
      </Typography>
    </div>
  );
};

export default Dashboard;
