import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { ROICalculatorScreen } from './screens/ROICalculatorScreen';
import { PlansScreen } from './screens/PlansScreen';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/roi-calculator" element={<ROICalculatorScreen />} />
      <Route path="/plans" element={<PlansScreen />} />
    </Routes>
  );
}