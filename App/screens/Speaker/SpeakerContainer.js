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
  TouchableOpacity
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
        <View style={styles.container}>
          <Image
            style={{ width: 75, height: 75 }}
            source={{ uri: speaker.image }}
          />
          <Text style={styles.textName}>{speaker.name}</Text>
          <Text style={styles.textDescription}>{speaker.bio}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10
  },
  textDescription: {
    fontSize: 17
  }
});

export default SpeakerContainer;
