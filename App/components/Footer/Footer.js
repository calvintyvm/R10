import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© RED ACADEMY 2017</Text>
    </View>
  );
};

export default Footer;
