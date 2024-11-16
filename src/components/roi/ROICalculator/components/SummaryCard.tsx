import { Card, CardContent, Typography, Box } from '@mui/material';

interface SummaryCardProps {
  roiMetrics: {
    benefits: number;
    netGain: number;
    roi: number;
    monthlyInvestment: number;
  };
}

export function SummaryCard({ roiMetrics }: SummaryCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Resumo do ROI
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography color="text.secondary">Benefícios Mensais:</Typography>
          <Typography>R$ {roiMetrics.benefits.toLocaleString()}</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography color="text.secondary">Investimento Mensal:</Typography>
          <Typography>R$ {roiMetrics.monthlyInvestment.toLocaleString()}</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography color="text.secondary">Ganho Líquido:</Typography>
          <Typography color="success.main">
            R$ {roiMetrics.netGain.toLocaleString()}
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          mt: 2,
          pt: 2,
          borderTop: 1,
          borderColor: 'divider'
        }}>
          <Typography variant="h6">ROI:</Typography>
          <Typography variant="h6" color="primary">
            {roiMetrics.roi.toFixed(0)}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}