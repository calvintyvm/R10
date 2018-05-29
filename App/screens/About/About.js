import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";

const About = ({ aboutData, showInfo, showInformation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/r10_logo.png")}
        />
        <View>
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
              <View>
                <TouchableOpacity onPress={showInformation}>
                  <Text style={styles.titleStyle}>{item.title}</Text>
                </TouchableOpacity>
                <Text style={styles.textStyle}>{item.description}</Text>
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
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10
  },
  imageStyle: {
    textAlign: "center",
    marginBottom: 50,
    borderBottomWidth: 1
  }
});

export default About;
