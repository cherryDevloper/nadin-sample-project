import React, { useState } from 'react';
import { Autocomplete, TextField, Typography } from '@mui/material';
import { cities } from '../../data/cities';
import { City } from './Weather.types';
import { getWeather } from '../../api/services/weatherService';

const Weather: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const handleCityChange = (
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
        const response = await getWeather(lat, lng);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
    setLoading(false);
  };

  return (
    <div>
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
        <div>
          {weatherData && !loading ? (
            <div>
              <Typography variant="body1">
                Temperature of {selectedCity.city}:{' '}
                {weatherData.current_weather.temperature}°C
              </Typography>
            </div>
          ) : (
            <>loading...</>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
