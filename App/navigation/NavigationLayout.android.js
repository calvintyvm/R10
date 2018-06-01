import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import AboutContainer from "../screens/About";
import ScheduleContainer from "../screens/Schedule";
import FavesContainer from "../screens/Faves";
import SessionContainer from "../screens/Session";
import SpeakerContainer from "../screens/Speaker";
// import FavouritesContainer from "../screens/Favourites";
import MapContainer from "../screens/Map";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";

const renderIcon = iconName => {
  <Ionicons name={iconName} size={25} />;
};

export const SpeakerModal = createStackNavigator({
  Speaker: SpeakerContainer
});

const FavesStack = createStackNavigator(
  {
    Faves: FavesContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleContainer,
    Session: SessionContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

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

FavesStack.navigationOptions = {
  drawerIcon: () => <Ionicons name={"md-heart"} size={25} />
};
MapStack.navigationOptions = {
  drawerIcon: () => <Ionicons name={"md-map"} size={25} />
};
ScheduleStack.navigationOptions = {
  drawerIcon: () => <Ionicons name={"md-calendar"} size={25} />
};
AboutStack.navigationOptions = {
  drawerIcon: () => <Ionicons name={"md-information-circle"} size={25} />
};

export default createDrawerNavigator({
  Schedule: ScheduleStack,
  Map: MapStack,
  About: AboutStack,
  Faves: FavesStack
});
