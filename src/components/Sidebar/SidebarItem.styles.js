import { StyleSheet } from 'react-native';
import colorCodes from'../../constants/colorCodes';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    height: 85,
    alignSelf: 'stretch',
    backgroundColor: colorCodes.highlight
  },
  mainRow: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colorCodes.backgroundDark
  },
  activeIndicatorColumn: {
    flex: 1
  },
  activeIndicatorActive: {
    backgroundColor: colorCodes.red
  },
  ItemWrapper: {
    flex: 10,
    backgroundColor: colorCodes.backgroundLight
  },
  childrenContainer: {
    backgroundColor: colorCodes.backgroundDark
  },
  childItem: {

  }
});