"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface LineDef {
  dataKey: string;
  label: string;
  color?: string;
}

interface DualLineChartProps {
  data: any[];
  xDataKey: string;
  lines: LineDef[];
  yLabel: string;
  title?: string;
}

/**
 * Renders a responsive line chart with two or more lines. The chart
 * automatically adjusts its size to its container and uses a dark
 * colour scheme by default. A tooltip is displayed on hover.
 */
export default function DualLineChart({ data, xDataKey, lines, yLabel, title }: DualLineChartProps) {
  return (
    <div className="w-full h-80 bg-black bg-opacity-40 rounded-xl p-4">
      {title && <h4 className="text-center text-white font-semibold mb-4">{title}</h4>}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid stroke="#2d3748" strokeDasharray="3 3" />
          <XAxis dataKey={xDataKey} stroke="#a0aec0" tick={{ fontSize: 12 }} />
          <YAxis stroke="#a0aec0" tick={{ fontSize: 12 }} label={{ value: yLabel, angle: -90, position: 'insideLeft', fill: '#a0aec0', fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: 'none', color: '#f7fafc' }} />
          {lines.map((line) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.color || '#14b8a6'}
              strokeWidth={2}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}