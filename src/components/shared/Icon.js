import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Icon ({ name, size, color, styles }) {
  return (
    <AntDesign
      name={`${name}` }
      size={ size }
      color={ color }
      style={ styles }
    />
  )
};