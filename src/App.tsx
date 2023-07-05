import { useEffect } from 'react';
import './App.css';
import runOneSignal from './onesignal';

function App() {
  useEffect(() => {
    runOneSignal()
  }, [])

  return (
    <div className="App">
      <h2>PWA Teste</h2>
    </div>
  );
}

export default App;
