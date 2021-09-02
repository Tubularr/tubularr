import { StyleSheet } from 'react-native';
import colorCodes from'../../constants/colorCodes';

export default StyleSheet.create({
  header: {
    display: 'flex',
    height: 60,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 30,
    backgroundColor: colorCodes.highlight
  },
  text: {
    fontSize: 36,
    color: colorCodes.textLight
  }
});