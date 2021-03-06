import { Snackbar, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { RouterNavigation } from './navigator';
import { onMessageListener } from './infrastructure/firebase';
import { useState } from 'react';
import { Button } from '@material-ui/core';
function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const onMessageWithToken = () => {
    onMessageListener()
      .then((payload: any) => {
        debugger;
        console.log(payload.notification.body);
        setMessage(payload?.notification.body);
        setOpen(true);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = () => setOpen(false);
  onMessageWithToken();
  return (
    <ThemeProvider theme={theme}>
      <RouterNavigation />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        message={message}
        action={
          <Button color="primary" onClick={handleClose}>
            Entendi
          </Button>
        }
      />
    </ThemeProvider>
  );
}

export default App;
