import { Box, Typography } from '@mui/material';
import { PlansSlider } from '../components/plans/PlansSlider';
import { PresentationFooter } from '../components/presentation/PresentationFooter';

export function PlansScreen() {
  return (
    <Box sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Escolha o Plano Ideal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Deslize para ver todas as opções
        </Typography>
      </Box>
      
      <Box sx={{ 
        flex: 1,
        bgcolor: 'background.default',
        overflowY: 'auto'
      }}>
        <PlansSlider />
      </Box>
      <PresentationFooter />
    </Box>
  );
}