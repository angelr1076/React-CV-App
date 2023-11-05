import './assets/styles/style.css';
import Title from './components/Title';
import CVForm from './components/CVForm';

function App() {
  return (
    <div className='main'>
      <Title title='React-CV-Canvas' />
      <CVForm />
    </div>
  );
}

export default App;
