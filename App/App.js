import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import About from "./screens/About";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { Provider } from "react-redux";
import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RootStackNavigator />
        </Provider>
      </ApolloProvider>
    );
  }
}
