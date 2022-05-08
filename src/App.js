import React from 'react';

import './App.css';
import Inventory from './components/Inventory';
import PostForm from './components/PostForm';
import Update from './components/Update';

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#42f5a7',
        },
        warning: {
            main: '#fff',
        },
        type: 'dark'
    },
    typography: {
        fontFamily: 'Garamond',
    },

})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Inventory />
      <PostForm />
    </ThemeProvider>
  );
}

export default App;
