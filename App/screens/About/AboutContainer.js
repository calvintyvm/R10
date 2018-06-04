import React, { Component } from "react";
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
import About from "./About";
import ScreenLoader from "../../components/ScreenLoader";

const AboutData = gql`
  query {
    allConducts {
      title
      description
      id
      order
    }
  }
`;

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Query query={AboutData}>
        {({ loading, error, data }) => {
          if (loading) {
            return <ScreenLoader />;
          }
          if (error) return <Text>Error getting items</Text>;
          return <About aboutData={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
