import React, { useLayoutEffect, useState } from "react";
import { FC, useContext } from "react";
import { PersTypes } from "../abstractions/models";
import { TestContext } from "../contexts";
import Graph from "./Graph";

interface IPersonTypesRes {
  title: PersTypes;
  value: number;
}

const TestResult: FC = () => {
  const { sumState, sumDispatch } = useContext(TestContext);
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
    const resArr: IPersonTypesRes[] = [
      {
        title: PersTypes.DRIVER,
        value: driverRes,
      },
      {
        title: PersTypes.INSPIRING,
        value: inspiringRes,
      },
      {
        title: PersTypes.ANALYTIC,
        value: analyticRes,
      },
      {
        title: PersTypes.HARMONIZER,
        value: harmonizerRes,
      },
    ].sort((a, b) => b.value - a.value);

    console.log(driverRes, inspiringRes, analyticRes, harmonizerRes);
    setCurrentPersType(resArr[0].title)
  }, [sumState]);

  return (
    <div className="resultWrapper">
      {currentPersType}
      <Graph
        aSum={sumState.aSum}
        bSum={sumState.bSum}
        cSum={sumState.cSum}
        dSum={sumState.dSum}
      />
    </div>
  )
}

export default React.memo(TestResult);