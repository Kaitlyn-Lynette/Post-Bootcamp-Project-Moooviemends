import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import AlertSign from './AlertSign';

const AlertBar = ({ message, type, openState, onClose }) => {
  return (
    <Snackbar
      open={openState}
      autoHideDuration={2000}
      onClose={() => {
        onClose();
      }}
      style={{ bottom: 90 }}
    >
      <AlertSign
        onClose={() => {
          onClose();
        }}
        severity={type}
      >
        {message}
      </AlertSign>
    </Snackbar>
  );
};

export default AlertBar;
