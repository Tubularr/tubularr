import React from 'react';
import { View, Text } from 'react-native';
import SidebarItem from './SidebarItem';

import styles from './Sidebar.styles';

export default function Sidebar() {
  return (
    <View style={ styles.main }>
      <SidebarItem />
    </View>
  );
}