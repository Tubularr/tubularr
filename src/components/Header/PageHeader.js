import React from 'react';
import { View, Text } from 'react-native';
import styles from './PageHeader.styles.js';

export default function PageHeader() {
  return (
    <View style={ styles.header }>
      <Text style={ styles.text }>Tubularr</Text>
    </View>
  );
}