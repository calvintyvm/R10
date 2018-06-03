import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker", "NO-SPEAKER");
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10
          }}
        >
          <Ionicons
            name="ios-close"
            size={35}
            color="white"
            onPress={() => navigation.pop()}
          />
          <Text style={{ color: "white", fontSize: 18, marginLeft: 70 }}>
            About the Speaker
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={{
              width: 75,
              height: 75,
              borderRadius: 75 / 2,
              marginTop: 10
            }}
            source={{ uri: speaker.image }}
          />
          <Text style={styles.textName}>{speaker.name}</Text>
          <Text style={styles.textDescription}>{speaker.bio}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "white",
    alignItems: "center"
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10
  },
  textDescription: {
    fontSize: 17,
    marginLeft: 10,
    marginRight: 10
  }
});

export default SpeakerContainer;
