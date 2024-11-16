import { Box } from '@mui/material';
import { LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import { ROIData } from '../index';

interface ROIChartProps {
  data: ROIData;
  roiMetrics: {
    benefits: number;
    netGain: number;
    roi: number;
    monthlyInvestment: number;
  };
}

export function ROIChart({ data, roiMetrics }: ROIChartProps) {
  const chartData = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return {
      month: `Mês ${month}`,
      investimento: roiMetrics.monthlyInvestment * month,
      retorno: roiMetrics.benefits * month,
    };
  });

  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="investimento" 
            stroke="#ff7300" 
            name="Investimento"
          />
          <Line 
            type="monotone" 
            dataKey="retorno" 
            stroke="#387908" 
            name="Retorno"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}