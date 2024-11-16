import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface SalesRankingProps {
  position: number;
  totalSellers: number;
  onViewFullRanking: () => void;
}

export function SalesRanking({ position, totalSellers, onViewFullRanking }: SalesRankingProps) {
  const getMedalColor = (pos: number) => {
    switch (pos) {
      case 1: return '#FFD700';
      case 2: return '#C0C0C0';
      case 3: return '#CD7F32';
      default: return '#2196F3';
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Ranking de Vendas
        </Typography>
        
        <Box sx={{ textAlign: 'center', my: 2 }}>
          <EmojiEventsIcon 
            sx={{ 
              fontSize: 48, 
              color: getMedalColor(position),
              mb: 1
            }} 
          />
          <Typography variant="h5" color="primary" gutterBottom>
            {position}º lugar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            entre {totalSellers} vendedores
          </Typography>
        </Box>
        
        <Button 
          variant="contained" 
          fullWidth
          onClick={onViewFullRanking}
        >
          Ver Ranking Completo
        </Button>
      </CardContent>
    </Card>
  );
}