import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Tooltip,
} from "recharts";

export default function LineGraph({ data }) {
  // const max = data.reduce((acc, el) => (acc > el ? acc : el), 0);
  // const min = data.reduce((acc, el) => (acc < el ? acc : el), 0);

  return (
    <ResponsiveContainer>
      <LineChart
        margin={{ left: 20, bottom: 20, right: 20, top: 20 }}
        data={data}
      >
        <XAxis dataKey="id" />
        <YAxis type="number" />
        <Line
          type="monotone"
          dataKey="points"
          stroke="#8884d8"
          activeDot={{ r: 4 }}
          fillOpacity={1}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
