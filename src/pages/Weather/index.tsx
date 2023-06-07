import React, { useState } from 'react';
import { Autocomplete, TextField, Typography, Box } from '@mui/material';
import { cities } from '../../data/cities';
import { City } from './Weather.types';
import { getWeatherService } from '../../api/services/weatherService';
import Spin from '../../components/Spin';
import { AlertType } from '../../components/AlertComponent/Alert.type';
import AlertComponent from '../../components/AlertComponent';

const Weather: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    showAlert: boolean;
    alertType: AlertType;
    alertMessage: string;
  }>({
    showAlert: false,
    alertType: 'success',
    alertMessage: '',
  });
  const handleCityChange: any = (
    event: React.ChangeEvent<{}>,
    value: City | null,
  ) => {
    setSelectedCity(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filterCities = (options: City[], state: any) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return options.filter((option) =>
      option.city.toLowerCase().includes(lowercaseSearchTerm),
    );
  };

  const fetchWeatherData = async () => {
    setLoading(true);
    if (selectedCity) {
      const { lat, lng } = selectedCity;
      try {
        const response = await getWeatherService(lat, lng);
        setWeatherData(response);
      } catch (error) {
        setAlert({
          showAlert: true,
          alertMessage: 'Error fetching weather data',
          alertType: 'error',
        });
      }
    }
    setLoading(false);
  };
  return (
    <Box>
      <Autocomplete
        options={cities}
        getOptionLabel={(option) => option.city}
        filterOptions={filterCities}
        value={selectedCity}
        onChange={handleCityChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select a city"
            fullWidth
            onChange={handleSearchChange}
            value={searchTerm}
          />
        )}
        onSelect={fetchWeatherData}
      />
      {selectedCity && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10vh',
            border: '1px solid red',
            mt: '1rem',
            width: '30%',
          }}
        >
          {weatherData ? (
            <Box>
              <Typography variant="body1" sx={{ color: 'primary.main' }}>
                Temperature of {selectedCity.city}:{' '}
                {weatherData.current_weather.temperature}°C
              </Typography>
            </Box>
          ) : (
            <Spin />
          )}
        </Box>
      )}
      {alert.showAlert && (
        <AlertComponent
          hideAfter={3000}
          onHide={() => setAlert({ ...alert, showAlert: false })}
          message={alert.alertMessage}
          type={alert.alertType}
          showAlert={alert.showAlert}
        />
      )}
    </Box>
  );
};

export default Weather;
