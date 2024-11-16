import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  ROICalculator: undefined;
  Budget: undefined;
  Engagement: undefined;
};

export type NavigationProps = NavigationProp<RootStackParamList>;