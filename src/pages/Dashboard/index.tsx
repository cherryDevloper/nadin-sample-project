import React, { useState, useEffect } from 'react';
import Clock from '../../components/Time';
import CustomModal from '../../components/Modal';
import { Typography } from '@mui/material';
import { DataType } from '../../components/Modal/Modal.types';

const Dashboard = () => {
  const [open, setOpen] = useState(!localStorage.getItem('data'));
  const [greeting, setGreeting] = useState('');
  const [parsedValue, setParsedValue] = useState<DataType | null>();
  const [data, setData] = useState<DataType>({
    firstName: '',
    lastName: '',
    location: {
      city: 'Tehran',
      lat: '35.7000',
      lng: '51.4167',
    },
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
    setData(savedName ?? { firstName: '', lastName: '' });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    setData({
      firstName: '',
      lastName: '',
      location: {
        city: 'Tehran',
        lat: '35.7000',
        lng: '51.4167',
      },
    });

    localStorage.setItem('data', JSON.stringify(data));
    handleModalClose(data);
  };

  const handleModalClose = (value: DataType) => {
    setOpen(false);
    if (value && value.firstName && value.lastName) {
      setParsedValue(value);
    }
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, firstName: e.target.value });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, lastName: e.target.value });
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      location: {
        city: 'Tehran',
        lat: '',
        lng: '',
      },
    });
  };
  return (
    <div>
      <Clock />
      <CustomModal
        data={data}
        open={open}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
        onChangeLocation={handleLocationChange}
        onChangeFirstName={handleFirstNameChange}
        onChangeLastName={handleLastNameChange}
      />
      <Typography variant="h6" component="div" sx={{ mt: 1 }}>
        {greeting},{' '}
        {parsedValue
          ? `${parsedValue.firstName} ${parsedValue.lastName}`
          : `${data.firstName} ${data.lastName}`}
      </Typography>
    </div>
  );
};

export default Dashboard;
