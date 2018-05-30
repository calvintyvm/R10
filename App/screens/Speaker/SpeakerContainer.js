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
  TouchableHighlight
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker", "NO-SPEAKER");
    return (
      <View>
        <Ionicons
          name="ios-close"
          size={35}
          color="black"
          onPress={() => navigation.pop()}
        />
        <Image
          style={{ width: 75, height: 75 }}
          source={{ uri: speaker.image }}
        />
        <Text>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
      </View>
    );
  }
}

export default SpeakerContainer;
