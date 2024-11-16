import { Box } from '@mui/material';
import { NextAppointment } from './NextAppointment';
import { GoalProgress } from './GoalProgress';
import { SalesRanking } from './SalesRanking';

export function CentralSection() {
  const handleAppointmentDetails = () => {
    console.log('Navigate to appointment details');
  };

  const handleViewFullRanking = () => {
    console.log('Navigate to full ranking');
  };

  return (
    <Box sx={{ 
      flex: 1, 
      bgcolor: 'background.default',
      p: 2,
      overflowY: 'auto'
    }}>
      <NextAppointment
        client="Maria Silva"
        time="14:30 - Hoje"
        type="Apresentação de Produto"
        onDetailsPress={handleAppointmentDetails}
      />
      
      <GoalProgress
        current={75000}
        target={100000}
      />
      
      <SalesRanking
        position={3}
        totalSellers={15}
        onViewFullRanking={handleViewFullRanking}
      />
    </Box>
  );
}