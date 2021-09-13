import React from 'react';
import { View, Text } from 'react-native';
import SidebarItem from './SidebarItem';

import sidebarItemList from './constants/sidebarItemList';

import styles from './Sidebar.styles';

export default function Sidebar() {
  return (
    <View style={ styles.main }>
      { sidebarItemList.map((listItem) => {
          return (
            <SidebarItem 
              item={ listItem }
              childrenItems={ listItem.children }
            />
          );
        })
      }
    </View>
  );
}