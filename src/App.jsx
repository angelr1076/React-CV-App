import './assets/styles/style.css';
import CVForm from './components/CVForm';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box className='main' border='1px' borderColor='gray.300'>
      <CVForm />
    </Box>
  );
}

export default App;
