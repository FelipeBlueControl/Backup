import { BrowserRouter } from 'react-router-dom';
import { AppModeProvider } from './contexts/AppModeContext';
import { DeviceFrame } from './components/layout/DeviceFrame';
import { AppRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppModeProvider>
        <DeviceFrame>
          <AppRoutes />
        </DeviceFrame>
      </AppModeProvider>
    </BrowserRouter>
  );
}

export default App;