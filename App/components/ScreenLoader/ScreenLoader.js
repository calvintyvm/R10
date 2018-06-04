import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const ScreenLoader = () => {
  return (
    <View>
      <ActivityIndicator
        style={{ marginTop: 240 }}
        size="large"
        color="purple"
      />
    </View>
  );
};

export default ScreenLoader;
