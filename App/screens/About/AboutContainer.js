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

//pass in props

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  showInformation = () => {
    // this.setState({ showInfo: !this.state.showInfo });
    console.log("hello");
  };

  render() {
    return (
      <Query query={AboutData}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <View>
                <Text>Loading</Text>;
              </View>
            );
          }
          if (error) return <p>Error getting items</p>;
          return (
            <About
              showInfo={this.state.showInfo}
              showInformation={this.showInformation.bind(this)}
              aboutData={data.allConducts}
            />
          );
        }}
      </Query>
    );
  }
}

export default AboutContainer;
