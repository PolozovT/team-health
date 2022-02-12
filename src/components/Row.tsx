import { FC, useContext, useEffect, useState } from 'react';
import './index.css';
import { ActionKind, IRowModel } from '../abstractions/models';
import MyCheckbox from './MyCheckbox';
import { TestContext } from '../contexts';

const Row: FC<IRowModel> = ({ questions, getResults }) => {
  const { sumState, sumDispatch } = useContext(TestContext);

  const [answer, setAnswer] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });

  const [disable, setDisable] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    switch (key) {
      case 'a':
        sumDispatch({
          type: !!answer.a ? ActionKind.DecreaseA : ActionKind.IncreaseA,
          payload: 1,
        });
        break;
      case 'b':
        sumDispatch({
          type: !!answer.b ? ActionKind.DecreaseB : ActionKind.IncreaseB,
          payload: 1,
        });
        break;
      case 'c':
        sumDispatch({
          type: !!answer.c ? ActionKind.DecreaseC : ActionKind.IncreaseC,
          payload: 1,
        });
        break;
      case 'd':
        sumDispatch({
          type: !!answer.d ? ActionKind.DecreaseD : ActionKind.IncreaseD,
          payload: 1,
        });
        break;
    }
    // @ts-ignore
    setAnswer((prevAnswer) => ({ ...prevAnswer, [key]: !prevAnswer[key] }));
  }

  useEffect(() => {
    if (Object.values(answer).filter(x => x === true).length >= 2) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [answer]);

  return (
    <tr className='row-wrapper'>
      <td>
        <div className='row'>
          <span className={answer.a ? 'active' : ''}>
            {questions.a}
          </span>
          <MyCheckbox
            checked={answer.a}
            onChange={onChange}
            name='a'
            disabled={disable && answer.a === false}
          />
        </div>
      </td>
      <td>
        <div className='row'>
          <span className={answer.b ? 'active' : ''}>
            {questions.b}
          </span>
          <MyCheckbox
            checked={answer.b}
            onChange={onChange}
            name='b'
            disabled={disable && answer.b === false}
          />
        </div>
      </td>
      <td>
        <div className='row'>
          <span className={answer.c ? 'active' : ''}>
            {questions.c}
          </span>
          <MyCheckbox
            checked={answer.c}
            onChange={onChange}
            name='c'
            disabled={disable && answer.c === false}
          />
        </div>
      </td>
      <td>
        <div className='row'>
          <span className={answer.d ? 'active' : ''}>
            {questions.d}
          </span>
          <MyCheckbox
            checked={answer.d}
            onChange={onChange}
            name='d'
            disabled={disable && answer.d === false}
          />
        </div>
      </td>
    </tr>
  )
}

export default Row;