import './assets/styles/style.css';
import { CVProvider } from './contexts/CVContext';
import { CVForm } from './components/CVForm';
import { CVDisplay } from './components/CVDisplay';
import { Title } from './components/Title';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <CVProvider>
      <Box
        className='main'
        border='1px'
        borderColor='gray.300'
        display='flex'
        bg='gray.100'>
        <Box
          flex='2'
          boxShadow='lg'
          p={4}
          mr={5}
          bg='gray.50'
          borderRadius={5}
          className='form-container'>
          <CVForm />
        </Box>
        <Box
          flex='4'
          boxShadow='lg'
          p={4}
          bg='white'
          marginLeft={4}
          className='display-container'>
          <CVDisplay />
        </Box>
      </Box>
    </CVProvider>
  );
}

export default App;
