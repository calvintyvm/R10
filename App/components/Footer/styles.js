import { StyleSheet, Platform, Dimensions } from "react-native";
import { colorStyles, fontStyles } from "../../config/styles";

const styles = StyleSheet.create({
  footerContainer: {
    borderTopWidth: 1,
    borderColor: "#999999",
    marginLeft: 15,
    marginRight: 15,
    padding: 10
  },
  footerText: {
    fontSize: 17,
    marginRight: 15,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  }
});
export default styles;
