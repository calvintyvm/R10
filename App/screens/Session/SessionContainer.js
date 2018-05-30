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

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
        <View>
          <TouchableHighlight
            onPress={() =>
              navigation.push("Speaker", {
                speaker: speaker
              })
            }
          >
            <View>
              <Text>{speaker.name}</Text>
              <Image
                style={{ width: 75, height: 75 }}
                source={{ uri: speaker.image }}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default withNavigation(SessionContainer);
