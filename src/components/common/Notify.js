import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function NotifyHandle() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
    </React.Fragment>
  );
}

export default function Notify() {
  return (
    <SnackbarProvider maxSnack={3}>
      <NotifyHandle />
    </SnackbarProvider>
  );
}
