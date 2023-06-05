// ts-nocheck
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

interface Profile {
  firstName: string;
  lastName: string;
  location: {
    city: string;
    lat: string;
    lng: string;
  } | null;
  theme: string;
}

const themes = ['Light', 'Dark'];
const ProfileComponent: React.FC = () => {
  const storedName = localStorage.getItem('name');
  const storedProfile = storedName ? JSON.parse(storedName) : {};

  const [profile, setProfile] = useState<Profile>({
    firstName: storedProfile.firstName || '',
    lastName: storedProfile.lastName || '',
    location: null,
    theme: 'Light',
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
          options={cities}
          getOptionLabel={(option: any) => option.city}
          value={profile.location}
          // ts-ignore
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
    </Grid>
  );
};

export default ProfileComponent;
