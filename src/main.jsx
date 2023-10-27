import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/style.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box p={5} borderRadius='5'>
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
