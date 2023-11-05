import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/style.css';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box className='box-body' p={5} borderRadius='5' bg='lightgray'>
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
