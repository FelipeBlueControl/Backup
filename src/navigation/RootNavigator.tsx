import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import { HomeScreen } from '../screens/HomeScreen';
import { ROICalculatorScreen } from '../screens/ROICalculatorScreen';

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="ROICalculator" 
          component={ROICalculatorScreen}
          options={{
            headerShown: true,
            title: 'Calculadora de ROI',
            headerTintColor: '#2196F3'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}