import './assets/styles/style.css';
import { CVProvider } from './contexts/CVContext';
import { CVForm } from './components/CVForm';
import { CVDisplay } from './components/CVDisplay';
import { Box, Divider } from '@chakra-ui/react';

function App() {
  return (
    <CVProvider>
      <Box className='main' border='1px' borderColor='gray.300' display='flex'>
        <Box
          flex='1'
          boxShadow='lg'
          p={4}
          bg='white'
          className='form-container'>
          <CVForm />
        </Box>
        <Divider orientation='vertical' />
        <Box
          flex='3'
          boxShadow='lg'
          p={4}
          bg='gray.50'
          marginLeft={4}
          className='display-container'>
          <CVDisplay />
        </Box>
      </Box>
    </CVProvider>
  );
}

export default App;
