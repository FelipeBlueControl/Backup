import { Box, Slider, Typography } from '@mui/material';
import { ROIData } from '../index';

interface InputSlidersProps {
  data: ROIData;
  onDataChange: (data: ROIData) => void;
}

export function InputSliders({ data, onDataChange }: InputSlidersProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Typography color="text.secondary" gutterBottom>
          Custo por hora da equipe: R$ {data.hourlyRate}
        </Typography>
        <Slider
          value={data.hourlyRate}
          onChange={(_, value) => onDataChange({ ...data, hourlyRate: value as number })}
          min={20}
          max={200}
          step={5}
          valueLabelDisplay="auto"
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography color="text.secondary" gutterBottom>
          Horas economizadas por mês: {data.hoursPerMonth}h
        </Typography>
        <Slider
          value={data.hoursPerMonth}
          onChange={(_, value) => onDataChange({ ...data, hoursPerMonth: value as number })}
          min={10}
          max={100}
          step={5}
          valueLabelDisplay="auto"
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography color="text.secondary" gutterBottom>
          Economia com ferramentas: R$ {data.toolsCost}
        </Typography>
        <Slider
          value={data.toolsCost}
          onChange={(_, value) => onDataChange({ ...data, toolsCost: value as number })}
          min={0}
          max={2000}
          step={100}
          valueLabelDisplay="auto"
        />
      </Box>

      <Box>
        <Typography color="text.secondary" gutterBottom>
          Aumento de receita: R$ {data.revenueIncrease}
        </Typography>
        <Slider
          value={data.revenueIncrease}
          onChange={(_, value) => onDataChange({ ...data, revenueIncrease: value as number })}
          min={0}
          max={10000}
          step={500}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
}