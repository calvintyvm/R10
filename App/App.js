import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import About from "./screens/About";
import RootStackNavigator from "./navigation/RootStackNavigator";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
