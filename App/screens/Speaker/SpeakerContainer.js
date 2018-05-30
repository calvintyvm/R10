import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image
} from "react-native";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker", "NO-SPEAKER");
    return (
      <View>
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
