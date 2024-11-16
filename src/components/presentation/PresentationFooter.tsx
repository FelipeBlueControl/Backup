import { Box, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

export function PresentationFooter() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      position: 'sticky',
      bottom: 0,
      width: '100%',
      bgcolor: 'background.paper',
      borderTop: 1,
      borderColor: 'divider',
      py: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1
    }}>
      <IconButton 
        color="primary"
        onClick={() => navigate('/')}
        size="large"
      >
        <HomeIcon />
      </IconButton>
      <Typography variant="caption" color="text.secondary">
        Voltar para Objeções
      </Typography>
    </Box>
  );
}