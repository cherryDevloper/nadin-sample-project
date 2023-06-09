import React, { useState, useEffect } from 'react';
import Clock from '../../components/Time';
import CustomModal from '../../components/Modal';
import { Typography, Box } from '@mui/material';
import { DataType } from '../../components/Modal/Modal.types';
import { useTranslation } from 'react-i18next';
const Dashboard = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(!localStorage.getItem('data'));
  const [greeting, setGreeting] = useState('');
  const [parsedValue, setParsedValue] = useState<DataType | null>();
  const [data, setData] = useState<DataType>({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    const hours = new Date().getHours();
    const greeting =
      hours >= 5 && hours < 12
        ? t('goodMorning')
        : hours >= 12 && hours < 17
        ? t('goodAfternoon')
        : t('goodEvening');

    setGreeting(greeting);
    const savedName = JSON.parse(localStorage.getItem('data') ?? 'null');
    setData(savedName ?? { firstName: '', lastName: '' });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    setData({
      firstName: '',
      lastName: '',
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30vh',
      }}
    >
      <Clock />
      <CustomModal
        data={data}
        open={open}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
        onChangeFirstName={handleFirstNameChange}
        onChangeLastName={handleLastNameChange}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{ mt: 1, color: 'primary.main' }}
      >
        {t(greeting)},{' '}
        {parsedValue
          ? `${parsedValue.firstName} ${parsedValue.lastName}`
          : `${data.firstName} ${data.lastName}`}
      </Typography>
    </Box>
  );
};

export default Dashboard;
