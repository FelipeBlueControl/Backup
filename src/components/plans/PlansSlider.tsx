import { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';
import { PlanCard } from './PlanCard';
import { PlanDetails } from './PlanDetails';
import { Plan } from './types';

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Plano Básico',
    price: 1500,
    benefits: [
      'Automação básica de processos',
      'Suporte em horário comercial',
      'IA para tarefas simples',
      '1 usuário'
    ],
    breakeven: 3,
    monthlySavings: 2000,
  },
  {
    id: 'pro',
    name: 'Plano Profissional',
    price: 2500,
    benefits: [
      'Automação avançada',
      'Suporte 24/7',
      'IA para tarefas complexas',
      'Até 5 usuários'
    ],
    breakeven: 2,
    monthlySavings: 4000,
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Plano Enterprise',
    price: 4000,
    benefits: [
      'Automação ilimitada',
      'Suporte prioritário 24/7',
      'IA personalizada',
      'Usuários ilimitados'
    ],
    breakeven: 2,
    monthlySavings: 7000,
  },
];

export function PlansSlider() {
  const [planIndex, setPlanIndex] = useState(0);
  const activePlan = plans[planIndex];

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setPlanIndex(newValue as number);
  };

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
      <Box sx={{ 
        flex: 1, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 4
      }}>
        <PlanCard plan={activePlan} />
      </Box>

      <Box sx={{ px: 3, mb: 4 }}>
        <Typography 
          variant="h5" 
          align="center" 
          sx={{ mb: 3 }}
        >
          {planIndex + 1}
        </Typography>
        <Slider
          value={planIndex}
          onChange={handleSliderChange}
          step={1}
          marks
          min={0}
          max={2}
          sx={{
            '& .MuiSlider-thumb': {
              width: 24,
              height: 24,
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
            },
            '& .MuiSlider-track': {
              height: 8,
            },
            '& .MuiSlider-rail': {
              height: 8,
              opacity: 0.5,
            },
          }}
        />
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          mt: 1
        }}>
          <Typography color="text.secondary">Básico</Typography>
          <Typography color="text.secondary">Profissional</Typography>
          <Typography color="text.secondary">Enterprise</Typography>
        </Box>
      </Box>

      <PlanDetails plan={activePlan} />
    </Box>
  );
}