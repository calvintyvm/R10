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
import moment from "moment";

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
      <View style={styles.container}>
        <Text style={styles.textLocation}>{location}</Text>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textTime}>
          {moment(time)
            .format("h:mm a")
            .toUpperCase()}
        </Text>
        <Text style={styles.textDescription}>{description}</Text>
        <View>
          <TouchableHighlight
            onPress={() =>
              navigation.push("Speaker", {
                speaker: speaker
              })
            }
          >
            <View>
              <View>
                <Text>Presented by:</Text>
              </View>
              <View>
                <Text>{speaker.name}</Text>
                <Image
                  style={{ width: 75, height: 75, borderRadius: 75 / 2 }}
                  source={{ uri: speaker.image }}
                />
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginLeft: 20,
    marginTop: 20
  },
  textLocation: {
    fontSize: 18,
    color: "grey"
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  },
  textTime: {
    color: "red",
    marginBottom: 10,
    fontSize: 18
  },
  textDescription: {
    fontSize: 18,
    marginBottom: 10
  }
  // speakerContainer: {
  //   flex: 1,
  //   flexDirection: "row"
  // }
});

export default withNavigation(SessionContainer);
