import React, { useState } from 'react';
import { Button, Modal, TextField, Box } from '@mui/material';
import { NameFormProps } from './Modal.types';

const CustomModal: React.FC<NameFormProps> = ({
  open,
  onClose,
  onSubmit,
  onChangeFirstName,
  onChangeLastName,
  data,
}) => {
  const [formError, setFormError] = useState({
    hasFirstName: true,
    hasLastName: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.firstName.trim()) {
      setFormError({ ...formError, hasFirstName: false });
    }
    if (!data.lastName.trim()) {
      setFormError({ ...formError, hasLastName: false });
    }
    onSubmit(e);
  };

  const handleClose = () => {
    onClose(data);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Enter Your Information</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            value={data.firstName}
            onChange={onChangeFirstName}
            fullWidth
            margin="normal"
            required
            error={!formError.hasFirstName}
            helperText={!formError.hasFirstName ? 'First name is required' : ''}
          />
          <TextField
            label="Last Name"
            value={data.lastName}
            onChange={onChangeLastName}
            fullWidth
            margin="normal"
            required
            error={!formError.hasLastName}
            helperText={!formError.hasLastName ? 'Last name is required' : ''}
          />

          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default CustomModal;
