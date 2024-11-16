import { Card, CardContent, Typography, Button, Box } from '@mui/material';

interface NextAppointmentProps {
  client: string;
  time: string;
  type: string;
  onDetailsPress: () => void;
}

export function NextAppointment({ client, time, type, onDetailsPress }: NextAppointmentProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Próximo Atendimento
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            {client}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {time}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type}
          </Typography>
        </Box>
        
        <Button 
          variant="contained" 
          fullWidth 
          onClick={onDetailsPress}
        >
          Detalhes
        </Button>
      </CardContent>
    </Card>
  );
}