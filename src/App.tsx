import './App.css';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { RouterNavigation } from './navigator';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterNavigation />
    </ThemeProvider>
  );
}

export default App;
