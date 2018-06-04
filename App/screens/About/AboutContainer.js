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
    this.state = {
      showInfo: false,
      currentIndex: -1,
      showArray: []
      // display: "none"
    };
  }

  showInformation = index => {
    this.setState({ showInfo: !this.state.showInfo, currentIndex: index });
    console.log(index);
  };

  // showInformation = index => {
  //   let newestArray = [];
  //   if (showArray.includes(index)) {
  //     newestArray.push(index);
  //     this.setState({ showArray: newestArray });
  //   } else {
  //     function remove(array, element) {
  //       return array.filter(e => e !== element);
  //     }
  //   }
  // };

  showInfo = () => {};

  render() {
    console.log(this.state.currentIndex);
    console.log(this.state.showInfo);
    return (
      <Query query={AboutData}>
        {({ loading, error, data }) => {
          if (loading) {
            return <ScreenLoader />;
          }
          // if (error) return <Text>Error getting items</Text>;
          return (
            <About
              showInfo={this.state.showInfo}
              showInformation={this.showInformation.bind(this)}
              aboutData={data.allConducts}
              currentIndex={this.state.currentIndex}
            />
          );
        }}
      </Query>
    );
  }
}

export default AboutContainer;
