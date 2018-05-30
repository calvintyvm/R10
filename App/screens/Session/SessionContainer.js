import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from "react-native";

class SessionContainer extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam("title", "NO-TITLE");
    const time = navigation.getParam("time", "NO-TIME");
    const speaker = navigation.getParam("speaker", "NO-SPEAKER");
    const description = navigation.getParam("description", "NO-DESCRIPTION");
    const location = navigation.getParam("location", "NO-LOCATION");
    console.log(speaker);
    return (
      <View>
        <Text>{location}</Text>
        <Text>{title}</Text>
        <Text>{time}</Text>
        <Text>{description}</Text>
        <Text>{speaker.name}</Text>
      </View>
    );
  }
}

export default withNavigation(SessionContainer);
