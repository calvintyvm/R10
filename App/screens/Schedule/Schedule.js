import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  SectionList
} from "react-native";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import moment from "moment";

const Schedule = ({ scheduleData }) => (
  <View>
    {console.log(scheduleData)}
    <SectionList
      sections={scheduleData}
      renderItem={({ item, section, index }) => (
        <View>
          <Text style={styles.scheduleTitle} key={index}>
            {item.title}
          </Text>
          <Text style={styles.scheduleLocation} key={index}>
            {item.location}
          </Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.startTime}>{moment(title).format("h:mm a")}</Text>
      )}
      keyExtractor={(item, index) => index + ""}
    />
  </View>
);

const styles = StyleSheet.create({
  startTime: {
    backgroundColor: "#999999",
    padding: 5,
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 13
  },
  scheduleTitle: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 5
  },
  scheduleLocation: {
    fontSize: 12,
    padding: 5
  }
});

export default Schedule;
