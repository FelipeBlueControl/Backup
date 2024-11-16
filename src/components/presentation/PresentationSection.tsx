import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { ObjectionCard } from './ObjectionCard';

export function PresentationSection() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      flex: 1, 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'background.default',
      p: 2,
      overflowY: 'auto'
    }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Selecione a Objeção
      </Typography>

      <ObjectionCard
        icon={CalculateIcon}
        title="Está caro para mim"
        description="Demonstre o retorno sobre investimento e valor agregado"
        onClick={() => navigate('/roi-calculator')}
      />

      <ObjectionCard
        icon={AccountBalanceWalletIcon}
        title="Preciso ver se cabe no orçamento"
        description="Analise o orçamento e demonstre flexibilidade"
        onClick={() => navigate('/plans')} // Atualizado para /plans
      />

      <ObjectionCard
        icon={TrendingUpIcon}
        title="Vou ver e confirmo para você"
        description="Apresente casos de sucesso e benefícios imediatos"
        onClick={() => navigate('/engagement')}
      />
    </Box>
  );
}