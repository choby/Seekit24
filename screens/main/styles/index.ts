import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  navItem: {
    flexBasis: "25%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: getLogicPixel(60),
    marginBottom: getLogicPixel(17)
  },
  navItemText: {
    color: Color.SECONDARY_1,
    marginTop: getLogicPixel(4),
    fontSize: FontSize.TEXT_SIZE_2,
    fontFamily: FontFamily.REGULAR
  },
  tabBar: {

    paddingLeft: getLogicPixel(12),
    backgroundColor: "#FFFFFF",//hexToRGB("#FFFFFF", 0.7),
    shadowColor: "#fff",
    elevation: 0
  },
  tab: {
    marginTop: getLogicPixel(12),
    width: "auto",
    height: getLogicPixel(45),

  },
  tabLabelContainer: {
    height: getLogicPixel(35),
    justifyContent: "flex-end",
    marginTop: getLogicPixel(3),
    textAlignVertical: "bottom",
  },
  tabLabelContainerFocus: {

  },
  tabLabel: {
    fontSize: FontSize.TEXT_SIZE_5,
    color: Color.SECONDARY_1,
    padding: getLogicPixel(2),
  },
  tabLabelFocus: {
    fontSize: FontSize.TEXT_SIZE_7,
    fontFamily: FontFamily.SEMIBOLD,
    padding: 0,
  },

});