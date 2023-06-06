import React, { useEffect } from 'react';
import { Snackbar, Alert, AlertProps } from '@mui/material';
import { AlertComponentProps } from './Alert.type';

const AlertComponent: React.FC<AlertComponentProps> = ({
  type,
  message,
  showAlert,
  hideAfter,
  onHide,
}) => {
  const getAlertSeverity = (): AlertProps['severity'] => {
    switch (type) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      default:
        return 'info';
    }
  };
  useEffect(() => {
    if (showAlert && hideAfter) {
      const timer = setTimeout(() => {
        onHide();
      }, hideAfter);
      return () => clearTimeout(timer);
    }
  }, [showAlert, hideAfter, onHide]);
  return (
    <Snackbar open={showAlert} autoHideDuration={3000}>
      <Alert severity={getAlertSeverity()}>{message}</Alert>
    </Snackbar>
  );
};

export default AlertComponent;
