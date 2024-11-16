import { Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface ObjectionCardProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
  onClick: () => void;
}

export function ObjectionCard({ icon: Icon, title, description, onClick }: ObjectionCardProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardActionArea onClick={onClick}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Icon color="primary" sx={{ fontSize: 32 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}