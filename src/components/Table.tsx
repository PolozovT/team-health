import { FC, useCallback } from 'react';
import { IAnswersModel, ITableModel } from '../abstractions/models';
import Row from './Row';

const Table: FC<ITableModel> = ({ questions }) => {

  const getRes = useCallback((): IAnswersModel => {
    return {
      a: false,
      b: false,
      c: false,
      d: false,
    }
  }, []);

  return (
    <table>
      {/* <thead>
        <tr>
          <th className='table-header'>
            <span>колонка А</span>
          </th>
          <th className='table-header'>
            <span>колонка Б</span>
          </th>
          <th className='table-header'>
            <span>колонка В</span>
          </th>
          <th className='table-header'>
            <span>колонка Г</span>
          </th>
        </tr>
      </thead> */}
      {questions.map(x => (
        <Row
          key={x.a}
          questions={x}
          getResults={getRes}
        />
      ))}
    </table>
  )
}

export default Table;