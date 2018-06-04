import { StyleSheet, Platform } from "react-native";
import { colorStyles, fontStyles } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  textDescription: {
    fontSize: 17,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  speakerContainer: { backgroundColor: "black" },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  navText: {
    color: "white",
    fontSize: 18,
    marginLeft: 70,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  speakerImage: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    marginTop: 10
  },
  gradientText: {
    fontSize: 18,
    color: "white",
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
