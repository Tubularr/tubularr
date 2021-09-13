import { StyleSheet } from 'react-native';
import colorCodes from'../../constants/colorCodes';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    marginVertical: 10
  },
  mainRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  activeIndicatorColumn: {
    flex: 1
  },
  activeIndicatorActive: {
    backgroundColor: colorCodes.red
  },
  iconColumn: {
    flex: 1
  },
  titleColumn: {
    flex: 5,
    textAlign: 'left',
    paddingLeft: 10,
    justifyContent: 'center',
    fontSize: 20,
    cursor: 'pointer',
  },
  titleText: {
    color: colorCodes.white,
  },
  titleTextHover: {
    color: colorCodes.highlight,
  },
  childrenContainer: {
    backgroundColor: colorCodes.backgroundDark
  },
  childItem: {

  }
});