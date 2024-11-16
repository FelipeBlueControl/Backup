import { Box } from '@mui/material';
import { ROICalculator } from '../components/roi/ROICalculator';
import { PresentationFooter } from '../components/presentation/PresentationFooter';

export function ROICalculatorScreen() {
  return (
    <Box sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ 
        flex: 1,
        bgcolor: 'background.default',
        overflowY: 'auto',
        p: 3,
        pb: 8 // Adiciona padding extra para o conteúdo não ficar sob o footer
      }}>
        <ROICalculator />
      </Box>
      <PresentationFooter />
    </Box>
  );
}