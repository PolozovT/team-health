import { FC, useContext, useEffect, useState } from 'react';
import './App.css';
import './index.css';
import MyButton from './components/MyButton';
import MyModal from './components/MyModal';
import { questions } from './data/questions';
import Table from './components/Table';
import TestResult from './components/TestResult';
import { TestContext } from './contexts';

const AppContent: FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { sumState } = useContext(TestContext);

  useEffect(() => {
    const sum = sumState.aSum + sumState.bSum + sumState.cSum + sumState.dSum;
    if (sum < 30) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    console.log('pichka useEffect', sumState)
  }, [sumState]);

  return (
    <div className="App">
      <div className="App-header">
        <Table
          questions={questions}
        />
        {disabled && <span className='error'>надо заполнить все колонки по 2 варианта</span>}
        <MyButton
          onClick={() => setShowResult(true)}
          disabled={disabled}
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
  );
}

export default AppContent;
