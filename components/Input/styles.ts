
import { StyleSheet, TextStyle } from "react-native";
import { getLogicPixel } from '@/utils/pixelRatio';

const container: TextStyle = {
  flexDirection: 'row',
  alignItems: "center",
  textAlignVertical: 'center',
};



export default StyleSheet.create({
  container,
  prefix: {
    paddingLeft: getLogicPixel(12),
  },
  suffix: {
    paddingRight: getLogicPixel(12),
  },
  inputStyle: {
    paddingLeft: getLogicPixel(12),
    paddingRight: getLogicPixel(12),
    flex: 1,
    textAlignVertical: 'center',

    //color: Color.SECONDARY_2,
  }
})