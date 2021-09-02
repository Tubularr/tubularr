import { StyleSheet } from 'react-native';
import colorCodes from'../../constants/colorCodes';

export default StyleSheet.create({
  main: {
    display: 'flex',
    maxWidth: 200,
    flex: 1,
    backgroundColor: colorCodes.backgroundLight,
    paddingTop: 10
  }
});