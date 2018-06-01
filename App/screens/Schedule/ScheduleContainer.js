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
import { connect } from "react-redux";

const scheduleData = gql`
  query {
    allSessions {
      id
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
                <Text>Loading</Text>
              </View>
            );
          }
          // if (error) return <Text>Error getting items</Text>;
          const newScheduleData = this.formatSessionData(data.allSessions);
          return (
            <Schedule
              nav={this.props.navigation}
              scheduleData={newScheduleData}
              favesData={this.props && this.props.allFaves}
            />
          );
        }}
      </Query>
    );
  }
}

export default connect(state => ({
  allFaves: state.Faves.allFaves
}))(ScheduleContainer);
