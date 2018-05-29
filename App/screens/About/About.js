import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";

const About = ({ aboutData, showInfo, showInformation, currentIndex, nav }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            borderBottomColor: "grey",
            borderBottomWidth: 2,
            marginLeft: 15,
            marginRight: 15,
            justifyContent: "center",
            marginBottom: 15
          }}
        >
          <Image
            style={styles.imageStyle}
            source={require("../../assets/r10_logo.png")}
          />
        </View>
        <View>
          <Button title="Go To Home" onPress={() => nav.navigate("Map")} />
          <Text style={styles.textStyle}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text style={styles.titleStyle}>Date & Venue</Text>
          <Text style={styles.textStyle}>
            The R10 conference will take place on Tuesday, June 27 2018 in
            Vancouver, Bc.
          </Text>
        </View>
        <Text style={styles.titleStyle}>Code of Conduct</Text>
        <Text style={styles.welcome}>
          {aboutData.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity onPress={() => showInformation(index)}>
                  <Text style={styles.titleStyle}>{item.title}</Text>
                </TouchableOpacity>
                {showInfo && currentIndex == index ? (
                  <Text style={styles.infoText}>{item.description}</Text>
                ) : null}
              </View>
            );
          })}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 2
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "100",
    margin: 10
  },
  infoText: {
    fontSize: 15,
    fontWeight: "100"
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10
  },
  imageStyle: {
    marginBottom: 25
  }
});

export default About;
