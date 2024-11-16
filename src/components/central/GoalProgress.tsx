import { Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart } from 'recharts';

interface GoalProgressProps {
  current: number;
  target: number;
}

export function GoalProgress({ current, target }: GoalProgressProps) {
  const percentage = Math.min((current / target) * 100, 100);
  const remaining = target - current;

  const data = [
    { name: 'Progresso', value: current },
    { name: 'Restante', value: remaining > 0 ? remaining : 0 }
  ];

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Progresso da Meta
        </Typography>

        <Box sx={{ height: 200, position: 'relative', mb: 2 }}>
          <PieChart width={300} height={200}>
            {/* Chart configuration */}
          </PieChart>
          
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <Typography variant="h4" color="primary">
              {Math.round(percentage)}%
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" color="text.secondary" align="center">
          {remaining > 0 
            ? `Faltam R$ ${remaining.toLocaleString()} para sua meta!`
            : 'Meta atingida! Parabéns! 🎉'}
        </Typography>
      </CardContent>
    </Card>
  );
}