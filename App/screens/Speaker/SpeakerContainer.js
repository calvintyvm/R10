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
  StatusBar,
  Linking
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

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
          <LinearGradient
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            colors={["#cf392a", "#9963ea"]}
            style={{
              flex: 1,
              paddingVertical: 2,
              paddingHorizontal: 2,
              marginBottom: 15
            }}
          >
            <Button
              onPress={() => {
                Linking.openURL(
                  `https://en.wikipedia.org/wiki/${speaker.name}`
                );
              }}
              title="Read more on Wikipedia"
              color="white"
            />
          </LinearGradient>
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
    alignItems: "center",
    borderRadius: 10
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
    marginRight: 10,
    marginBottom: 10
  }
});

export default SpeakerContainer;
