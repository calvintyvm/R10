import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutContainer from "../screens/About";
// import FavouritesContainer from "../screens/Favourites";
import MapContainer from "../screens/Map";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";

const AboutStack = createStackNavigator(
  {
    About: AboutContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapStack = createStackNavigator(
  {
    Map: MapContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    About: AboutStack,
    Map: MapStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "About") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Map") {
          iconName = `ios-map${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "grey",
      labelStyle: {
        fontSize: 10,
        fontFamily: "Montserrat"
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);