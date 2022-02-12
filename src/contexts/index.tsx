import React, { createContext, FC, useReducer } from "react";
import { Action, ActionKind, ITestSum } from "../abstractions/models";

const initState: ITestSum = {
  aSum: 0,
  bSum: 0,
  cSum: 0,
  dSum: 0,
};

export const reducer = (state: ITestSum, action: Action): ITestSum => {
  switch (action.type) {
    case ActionKind.IncreaseA: {
      return {
        ...state,
        aSum: state.aSum + Number(action.payload),
      }
    }
    case ActionKind.DecreaseA: {
      return {
        ...state,
        aSum: state.aSum - Number(action.payload),
      }
    }
    case ActionKind.IncreaseB: {
      return {
        ...state,
        bSum: state.bSum + Number(action.payload),
      }
    }
    case ActionKind.DecreaseB: {
      return {
        ...state,
        bSum: state.bSum - Number(action.payload),
      }
    }
    case ActionKind.IncreaseC: {
      return {
        ...state,
        cSum: state.cSum + Number(action.payload),
      }
    }
    case ActionKind.DecreaseC: {
      return {
        ...state,
        cSum: state.cSum - Number(action.payload),
      }
    }
    case ActionKind.IncreaseD: {
      return {
        ...state,
        dSum: state.dSum + Number(action.payload),
      }
    }
    case ActionKind.DecreaseD: {
      return {
        ...state,
        dSum: state.dSum - Number(action.payload),
      }
    }
    default:
      return state;
  }
}

const TestContext = createContext<{
  sumState: ITestSum;
  sumDispatch: React.Dispatch<any>;
}>({
  sumState: initState,
  sumDispatch: () => null,
});

const TestProvider: FC = ({ children }) => {
  const [sumState, sumDispatch] = useReducer(reducer, initState);

  return (
    <TestContext.Provider value={{ sumState, sumDispatch }}>
      {children}
    </TestContext.Provider>
  )
}

export { TestContext, TestProvider };