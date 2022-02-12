import { useState } from 'react';
import './App.css';
import MyButton from './components/MyButton';
import MyModal from './components/MyModal';
import { questions } from './data/questions';
import Table from './components/Table';
import TestResult from './components/TestResult';
import { TestProvider } from './contexts';

function App() {
  const [showResult, setShowResult] = useState(false);

  return (
    <TestProvider>
      <div className="App">
        <div className="App-header">
          <Table
            questions={questions}
          />
          <MyButton
            onClick={() => setShowResult(true)}
          >
            получить результат
          </MyButton>
          <MyModal
            visible={showResult}
            setVisible={setShowResult}
          >
            <TestResult />
          </MyModal>
        </div>
      </div>
    </TestProvider>
  );
}

export default App;
