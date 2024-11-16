import { useState } from 'react';
import { Box } from '@mui/material';
import { InputSliders } from './components/InputSliders';
import { ROIChart } from './components/ROIChart';
import { SummaryCard } from './components/SummaryCard';

export interface ROIData {
  hourlyRate: number;
  hoursPerMonth: number;
  toolsCost: number;
  revenueIncrease: number;
}

export function ROICalculator() {
  const [roiData, setRoiData] = useState<ROIData>({
    hourlyRate: 50,
    hoursPerMonth: 50,
    toolsCost: 500,
    revenueIncrease: 3000,
  });

  const calculateROI = () => {
    const monthlyInvestment = 2000; // Custo fixo do serviço
    const benefits = (roiData.hourlyRate * roiData.hoursPerMonth) + 
                    roiData.toolsCost + 
                    roiData.revenueIncrease;
    const netGain = benefits - monthlyInvestment;
    const roi = (netGain / monthlyInvestment) * 100;
    
    return {
      benefits,
      netGain,
      roi,
      monthlyInvestment
    };
  };

  const roiMetrics = calculateROI();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <InputSliders 
        data={roiData} 
        onDataChange={setRoiData} 
      />
      <ROIChart 
        data={roiData}
        roiMetrics={roiMetrics}
      />
      <SummaryCard 
        roiMetrics={roiMetrics}
      />
    </Box>
  );
}