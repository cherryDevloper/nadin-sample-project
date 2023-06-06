import React, { useState } from 'react';
import {
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
  Autocomplete,
  Grid,
} from '@mui/material';
import { cities } from '../../data/cities';

import { ProfileTypes } from './Profile.type';
import { AlertType } from '../../components/AlertComponent/Alert.type';
import AlertComponent from '../../components/AlertComponent';
const themes = ['Light', 'Dark'];
const ProfileComponent: React.FC = () => {
  const storedName = localStorage.getItem('name');
  const storedProfile = storedName ? JSON.parse(storedName) : {};
  const [profile, setProfile] = useState<ProfileTypes>({
    firstName: storedProfile.firstName || '',
    lastName: storedProfile.lastName || '',
    location: '' || null,
    theme: 'Light',
  });

  const [alert, setAlert] = useState<{
    showAlert: boolean;
    alertType: AlertType;
    alertMessage: string;
  }>({
    showAlert: false,
    alertType: 'success',
    alertMessage: '',
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleLocationChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: { city: string; lat: string; lng: string } | null | any,
  ) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      location: value,
    }));
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      theme: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
    setAlert({
      showAlert: true,
      alertMessage: 'changes has been saved successfuly!',
      alertType: 'success',
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="First Name"
          name="firstName"
          value={profile.firstName}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Last Name"
          name="lastName"
          value={profile.lastName}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          freeSolo
          options={cities.map((city) => city.city)}
          getOptionLabel={(option: string) => option}
          defaultValue={profile.location?.city || ''}
          onChange={handleLocationChange}
          renderInput={(params) => (
            <TextField {...params} label="Location" name="location" fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <p>Theme:</p>
        {themes.map((theme) => (
          <FormControlLabel
            key={theme}
            control={
              <Checkbox
                checked={profile.theme === theme}
                onChange={handleThemeChange}
                value={theme}
              />
            }
            label={theme}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          fullWidth
        >
          Save
        </Button>
      </Grid>
      {alert.showAlert && (
        <AlertComponent
          hideAfter={3000}
          onHide={() => setAlert({ ...alert, showAlert: false })}
          message={alert.alertMessage}
          type={alert.alertType}
          showAlert={alert.showAlert}
        />
      )}
    </Grid>
  );
};

export default ProfileComponent;
