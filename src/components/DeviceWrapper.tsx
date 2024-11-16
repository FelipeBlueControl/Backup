import React from 'react';
import { View, StyleSheet } from 'react-native';

export const DeviceWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.deviceFrame}>
        <View style={styles.deviceContent}>
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  deviceFrame: {
    width: 375,
    height: 812,
    backgroundColor: 'white',
    borderRadius: 40,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  },
  deviceContent: {
    flex: 1,
    overflow: 'hidden',
  },
});