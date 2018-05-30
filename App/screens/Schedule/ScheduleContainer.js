import React, { Component } from "react";
import Schedule from "./Schedule";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from "react-native";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";

const scheduleData = gql`
  query {
    allSessions {
      title
      location
      title
      speaker {
        name
        bio
        image
      }
      startTime
      description
    }
  }
`;

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formatSessionData = sessions => {
    return sessions
      .reduce((acc, curr) => {
        const timeExists = acc.find(
          section => section.title === curr.startTime
        );
        timeExists
          ? timeExists.data.push(curr)
          : acc.push({ title: curr.startTime, data: [curr] });
        return acc;
      }, [])
      .sort((a, b) => a.title - b.title);
  };

  render() {
    return (
      <Query query={scheduleData}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <View>
                <Text>Loading</Text>;
              </View>
            );
          }
          if (error) return <p>Error getting items</p>;
          const newScheduleData = this.formatSessionData(data.allSessions);

          return (
            <Schedule
              nav={this.props.navigation}
              scheduleData={newScheduleData}
            />
          );
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
