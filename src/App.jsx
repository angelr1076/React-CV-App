import './assets/styles/style.css';
import { CVProvider } from './contexts/CVContext';
import { CVForm } from './components/CVForm';
import { CVDisplay } from './components/CVDisplay';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <CVProvider>
      <Box className='main' border='1px' borderColor='gray.300' display='flex'>
        <Box flex='1' className='form-container'>
          <CVForm />
        </Box>
        <Box flex='1' className='display-container'>
          <CVDisplay />
        </Box>
      </Box>
    </CVProvider>
  );
}

export default App;
