import { StyleSheet, Platform } from "react-native";
import { colorStyles, fontStyles } from "../../config/styles";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    marginBottom: 15
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  welcome: {
    margin: 2
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "100",
    margin: 10,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  imageStyle: {
    marginBottom: 25,
    marginTop: 25
  }
});

export default styles;
