import React , {FC , ReactElement } from 'react';
import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './Themes/CustomTheme';
import { Dashboard } from './Pages/Dashboard/Dashboard';

const App:FC = ():ReactElement =>{
  
    return (
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    )

};

export default App;
