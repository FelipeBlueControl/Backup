import { Box, Typography, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SavingsIcon from '@mui/icons-material/Savings';
import { Plan } from './types';

interface PlanDetailsProps {
  plan: Plan;
}

export function PlanDetails({ plan }: PlanDetailsProps) {
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        mb: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccessTimeIcon color="primary" />
          <Box>
            <Typography variant="body2" color="text.secondary">
              Breakeven em
            </Typography>
            <Typography variant="h6">
              {plan.breakeven} meses
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SavingsIcon color="primary" />
          <Box>
            <Typography variant="body2" color="text.secondary">
              Economia mensal
            </Typography>
            <Typography variant="h6">
              R$ {plan.monthlySavings}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Button 
        variant="contained" 
        fullWidth
        size="large"
      >
        Selecionar este plano
      </Button>
    </Box>
  );
}