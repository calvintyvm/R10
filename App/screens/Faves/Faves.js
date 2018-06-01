import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  SectionList,
  TouchableOpacity
} from "react-native";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";

const Faves = ({ scheduleData, nav, favesData }) => (
  <SectionList
    sections={scheduleData}
    renderItem={({ item, section, index }) => (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={{}}>
          {Array.from(favesData).find(id => id.id === item.id) ? (
            <View>
              {/* <Text>{moment(item.startTime).format("h:mm a")}</Text> */}
              <Text style={styles.startTime}>
                {moment(item.startTime).format("h:mm a")}
              </Text>
              <Ionicons name="ios-heart" size={15} color="red" />
              <TouchableOpacity
                onPress={() =>
                  nav.navigate("Session", {
                    title: item.title,
                    time: item.startTime,
                    speaker: item.speaker,
                    description: item.description,
                    location: item.location,
                    faveid: item.id,
                    favesData: favesData
                  })
                }
              >
                <Text style={styles.scheduleTitle}>{item.title}</Text>
                <Text style={styles.scheduleLocation}>{item.location}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text />
          )}
        </Text>
      </View>
    )}
    // renderSectionHeader={({ section: { title } }) => (
    //   <View>
    //     <Text style={styles.startTime}>{moment(title).format("h:mm a")}</Text>
    //   </View>
    // )}
    keyExtractor={(item, index) => item + index}
  />
);

const styles = StyleSheet.create({
  startTime: {
    backgroundColor: "#999999",
    padding: 5,
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 13,
    width: 400
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

export default Faves;
