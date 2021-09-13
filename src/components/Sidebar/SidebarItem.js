import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './SidebarItem.styles';
import Icon from '../shared/Icon';
import colorCodes from '../../constants/colorCodes';

export default function SidebarItem({ item, children }) {
  const [hover, setHover] = useState(false);
  return (
    <View style={ styles.wrapper }>
      <View 
        onMouseEnter={()=>{
          setHover(true);
        }}
        onMouseLeave={()=>{
          setHover(false);
        }}
      style={ styles.mainRow }>
        <View style={ styles.activeIndicatorColumn } />
        <View style={ styles.iconColumn }>
          <Icon
            name={ item.iconName }
            size={ 24 }
            color={ colorCodes.white }
          />
        </View>
        <View style={ styles.titleColumn }>
          <Text style={ hover ? styles.titleTextHover : styles.titleText }>{ item.title }</Text>
        </View>
      </View>
      { children && 
        children.map((child) => {
          return (
            <View style={ styles.childrenContainer }>
              { child.title }
            </View>
          )
        })
      }
    </View>
  );
}