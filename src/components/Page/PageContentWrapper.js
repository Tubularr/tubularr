import React from 'react';
import { View } from 'react-native';
import Sidebar from '../Sidebar/Sidebar';
import PageContent from './PageContent';
import styles from './PageContentWrapper.styles';

export default function PageContentWrapper() {
  return (
    <View style={styles.main}>
      <Sidebar />
      <PageContent />
    </View>
  );
}