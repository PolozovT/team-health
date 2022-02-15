export interface IQuestionsModel {
  a: string;
  b: string;
  c: string;
  d: string;
}

export interface IAnswersModel {
  a: boolean;
  b: boolean;
  c: boolean;
  d: boolean;
}

export interface ITestSum {
  aSum: number;
  bSum: number;
  cSum: number;
  dSum: number;
}

export interface IRowModel {
  questions: IQuestionsModel;
  getResults(): IAnswersModel;
}

export interface ITableModel {
  questions: IQuestionsModel[];
}

export enum ActionKind {
  IncreaseA = 'INCREASE_A',
  DecreaseA = 'DECREASE_A',
  IncreaseB = 'INCREASE_B',
  DecreaseB = 'DECREASE_B',
  IncreaseC = 'INCREASE_C',
  DecreaseC = 'DECREASE_C',
  IncreaseD = 'INCREASE_D',
  DecreaseD = 'DECREASE_D',
}

export type Action = {
  type: ActionKind,
  payload: number
}

export enum PersTypes {
  DRIVER = 'драйвер',
  INSPIRING = 'вдохновляющий',
  ANALYTIC = 'аналитик',
  HARMONIZER = 'гармонизатор',
}

export interface IPersonTypesRes {
  name: PersTypes;
  value: number;
}

export interface IGraphProps {
  data: IPersonTypesRes[];
}