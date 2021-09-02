import React from 'react';
import { View, Text } from 'react-native';
import styles from './SidebarItem.styles';
import Icon from '../shared/Icon';
import colorCodes from '../../constants/colorCodes';

export default function SidebarItem({ item, children }) {
  return (
    <View style={ styles.wrapper }>
      <View style={ styles.mainRow }>
        <View style={ styles.activeIndicatorColumn } />
        <Icon
          name='youtube'
          size='24'
          color={ colorCodes.highlight }
        />
      </View>
      { children && children.map((child) => {
        return (
          <View style={ styles.childrenContainer }>
            
          </View>
        )
      })
      }
    </View>
  );
}