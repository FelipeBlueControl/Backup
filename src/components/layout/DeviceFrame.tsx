import { Box, styled } from '@mui/material';

const DeviceContainer = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
  padding: '16px',
});

const DeviceWrapper = styled(Box)({
  width: '375px',
  height: '812px',
  backgroundColor: '#ffffff',
  borderRadius: '40px',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 0 20px rgba(0,0,0,0.1)',
});

interface DeviceFrameProps {
  children: React.ReactNode;
}

export function DeviceFrame({ children }: DeviceFrameProps) {
  return (
    <DeviceContainer>
      <DeviceWrapper>
        {children}
      </DeviceWrapper>
    </DeviceContainer>
  );
}