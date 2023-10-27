import './assets/styles/style.css';
import { CVProvider } from './components/CVProvider';
import { CVCollector } from './components/CVCollector';
import { CVDisplay } from './components/CVDisplay';

function App() {
  return (
    <div className='main'>
      <CVProvider>
        <CVCollector />
        <CVDisplay />
      </CVProvider>
    </div>
  );
}

export default App;
