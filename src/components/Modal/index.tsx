import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Autocomplete,
} from '@mui/material';
import { NameFormProps } from './Modal.types';
import { cities } from '../../data/cities';

const CustomModal: React.FC<NameFormProps> = ({
  open,
  onClose,
  onSubmit,
  onChangeFirstName,
  onChangeLastName,
  onChangeLocation,
  data,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Your information</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="First Name"
            value={data.firstName}
            onChange={onChangeFirstName}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            value={data.lastName}
            onChange={onChangeLastName}
            fullWidth
            margin="normal"
          />
          <Autocomplete
            freeSolo
            options={cities.map((city) => city.city)}
            getOptionLabel={(option: string) => option}
            onChange={onChangeLocation}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                name="location"
                fullWidth
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose(data)}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CustomModal;
