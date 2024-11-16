import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Plan } from './types';

interface PlanCardProps {
  plan: Plan;
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <Card 
      sx={{ 
        position: 'relative',
        border: plan.isPopular ? 2 : 1,
        borderColor: plan.isPopular ? 'primary.main' : 'divider',
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      {plan.isPopular && (
        <Chip
          label="Mais Popular"
          color="primary"
          size="small"
          sx={{
            position: 'absolute',
            top: -12,
            right: 16,
          }}
        />
      )}
      
      <CardContent>
        <Typography variant="h6" gutterBottom align="center">
          {plan.name}
        </Typography>
        
        <Typography variant="h4" color="primary" gutterBottom align="center">
          R$ {plan.price}
          <Typography variant="caption" color="text.secondary">
            /mês
          </Typography>
        </Typography>

        <Box sx={{ mt: 3 }}>
          {plan.benefits.map((benefit, index) => (
            <Typography 
              key={index} 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                mb: 1.5,
                '&:before': {
                  content: '"•"',
                  marginRight: 1,
                  color: 'primary.main',
                  fontWeight: 'bold'
                }
              }}
            >
              {benefit}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}