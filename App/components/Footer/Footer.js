import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderColor: "#999999",
        marginLeft: 15,
        marginRight: 15,
        padding: 10
      }}
    >
      <Text style={{ fontSize: 17, marginRight: 15 }}>© RED ACADEMY 2017</Text>
    </View>
  );
};

export default Footer;
