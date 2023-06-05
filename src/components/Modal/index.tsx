import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { NameFormProps } from './Modal.types';

const CustomModal: React.FC<NameFormProps> = ({
  open,
  onClose,
  onSubmit,
  onChangeFirstName,
  onChangeLastName,
  name,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Your Name</DialogTitle>
      <form onSubmit={(e) => onSubmit(e)}>
        <DialogContent>
          <TextField
            label="First Name"
            value={name.firstName}
            onChange={onChangeFirstName}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            value={name.lastName}
            onChange={onChangeLastName}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose(name)}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CustomModal;
