import { FC } from "react";
import { IGraphProps, IPersonTypesRes, PersTypes } from "../abstractions/models";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Graph: FC<IGraphProps> = ({ data }) => {
  const datas = data.map(x => ({
    name: x.name,
    value: x.value,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  // @ts-ignore
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (datas.map(x => x.value).filter(x => x > 0).length === 0) {
    return <span>недостаточно данных для результата, <br />
      заполните все строки</span>
  }

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={800}>
          <Pie
            data={datas}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {datas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default Graph;