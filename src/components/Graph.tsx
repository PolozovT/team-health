import { FC } from "react";
import { ITestSum } from "../abstractions/models";

const Graph: FC<ITestSum> = (data: ITestSum) => {

  console.log('Graph', data);

  return (
    <div>Graph</div>
  )
}
export default Graph;