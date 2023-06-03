import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { Name, NameFormProps } from './Modal.types';

const CustomModal: React.FC<NameFormProps> = ({ open, onClose }) => {
  const [name, setName] = useState<Name>({
    firstName: '',
    lastName: '',
  });
  useEffect(() => {
    // Load data from localStorage on component mount
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(JSON.parse(savedName));
    }
  }, []);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setName({
      firstName: '',
      lastName: '',
    });
    // Save the form values in localStorage
    localStorage.setItem('name', JSON.stringify(name));
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Your Name</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="First Name"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CustomModal;
