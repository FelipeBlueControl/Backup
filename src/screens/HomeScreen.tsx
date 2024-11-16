import { useState } from 'react';
import { Box } from '@mui/material';
import { Header } from '../components/Header';
import { CentralSection } from '../components/central/CentralSection';
import { PresentationSection } from '../components/presentation/PresentationSection';
import { QuickActions } from '../components/footer/QuickActions';
import { useAppMode } from '../contexts/AppModeContext';

export function HomeScreen() {
  const { mode, setMode } = useAppMode();

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header 
        vendorName="João Silva"
        vendorImage="https://i.pravatar.cc/150?img=68"
        mode={mode}
        onModeChange={setMode}
      />
      
      {mode === 'vendor' ? (
        <>
          <CentralSection />
          <QuickActions />
        </>
      ) : (
        <PresentationSection />
      )}
    </Box>
  );
}