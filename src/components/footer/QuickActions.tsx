import { Box, IconButton, Typography, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const ActionButton = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  cursor: 'pointer',
  padding: '8px 0',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
});

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

function QuickAction({ icon, label, onClick }: QuickActionProps) {
  return (
    <ActionButton onClick={onClick}>
      <IconButton size="small" color="primary">
        {icon}
      </IconButton>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
        {label}
      </Typography>
    </ActionButton>
  );
}

export function QuickActions() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      bgcolor: 'background.paper',
      borderTop: 1,
      borderColor: 'divider',
      py: 1,
      px: 2,
    }}>
      <QuickAction
        icon={<AddIcon />}
        label="Novo"
        onClick={() => console.log('Adicionar compromisso')}
      />
      <QuickAction
        icon={<BarChartIcon />}
        label="Relatório"
        onClick={() => console.log('Ver relatório')}
      />
      <QuickAction
        icon={<PeopleIcon />}
        label="Clientes"
        onClick={() => console.log('Ver clientes')}
      />
      <QuickAction
        icon={<LightbulbIcon />}
        label="Dicas"
        onClick={() => console.log('Ver treinamentos')}
      />
    </Box>
  );
}