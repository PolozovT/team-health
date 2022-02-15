import React, { useLayoutEffect, useState } from "react";
import { FC, useContext } from "react";
import { IPersonTypesRes, PersTypes } from "../abstractions/models";
import { TestContext } from "../contexts";
import Graph from "./Graph";

const TestResult: FC = () => {
  const { sumState, sumDispatch } = useContext(TestContext);
  const [resArr, setResArr] = useState<IPersonTypesRes[]>([]);
  const [currentPersType, setCurrentPersType] = useState<PersTypes | null>(null);

  // driver = a * b
  // inspiring = b * c
  // analytic = a * d
  // harmonizer = c * d
  useLayoutEffect(() => {
    const driverRes = sumState.aSum * sumState.bSum;
    const inspiringRes = sumState.bSum * sumState.cSum
    const analyticRes = sumState.aSum * sumState.dSum
    const harmonizerRes = sumState.cSum * sumState.dSum;
    const resArray: IPersonTypesRes[] = [
      {
        name: PersTypes.DRIVER,
        value: driverRes,
      },
      {
        name: PersTypes.INSPIRING,
        value: inspiringRes,
      },
      {
        name: PersTypes.ANALYTIC,
        value: analyticRes,
      },
      {
        name: PersTypes.HARMONIZER,
        value: harmonizerRes,
      },
    ].sort((a, b) => b.value - a.value);
    setCurrentPersType(resArray[0]?.name);

    setResArr(resArray);
  }, [sumState]);

  return (
    <div className="resultWrapper">
      <span style={{ marginBottom: '10px' }}>
        вы: {currentPersType}
      </span>
      <Graph data={[...resArr]} />
    </div>
  )
}

export default React.memo(TestResult);