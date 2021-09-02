import React from 'react';
import { View } from 'react-native';
import styles from './Page.styles';

export default function PageWrapper({ children }) {
  return (
    <View style={styles.main}>
      {children}
    </View>
  );
}