import { Box, Avatar, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';

interface HeaderProps {
  vendorName: string;
  vendorImage: string;
  mode: 'vendor' | 'presentation';
  onModeChange: (mode: 'vendor' | 'presentation') => void;
}

export function Header({ vendorName, vendorImage, mode, onModeChange }: HeaderProps) {
  const handleModeChange = (_: React.MouseEvent<HTMLElement>, newMode: 'vendor' | 'presentation' | null) => {
    if (newMode !== null) {
      onModeChange(newMode);
    }
  };

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', boxShadow: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Avatar src={vendorImage} alt={vendorName} />
        <Typography variant="subtitle1" fontWeight="bold">
          {vendorName}
        </Typography>
      </Box>

      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleModeChange}
        aria-label="app mode"
        fullWidth
        sx={{
          '& .MuiToggleButton-root': {
            py: 1,
            textTransform: 'none',
            '&.Mui-selected': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            },
          },
        }}
      >
        <ToggleButton value="vendor">
          <AssessmentIcon sx={{ mr: 1 }} />
          Vendedor
        </ToggleButton>
        <ToggleButton value="presentation">
          <PresentToAllIcon sx={{ mr: 1 }} />
          Apresentação
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}