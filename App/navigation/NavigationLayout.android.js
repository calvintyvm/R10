import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutContainer from '../screens/About';
import ScheduleContainer from '../screens/Schedule';
import FavesContainer from '../screens/Faves';
import SessionContainer from '../screens/Session';
import SpeakerContainer from '../screens/Speaker';
import MapContainer from '../screens/Map';
import { sharedNavigationOptions } from './config';

export const SpeakerModal = createStackNavigator(
    {
        Speaker: SpeakerContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'black',
                borderBottomColor: 'black'
            }
        })
    }
);

const FavesStack = createStackNavigator(
    {
        Faves: FavesContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: 'Faves',
            headerTitleStyle: { color: 'white' }
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
            ...sharedNavigationOptions(navigation),
            title: 'Schedule',
            headerTitleStyle: { color: 'white' }
        })
    }
);

const AboutStack = createStackNavigator(
    {
        About: AboutContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: 'About',
            headerTitleStyle: { color: 'white' }
        })
    }
);

const MapStack = createStackNavigator(
    {
        Map: MapContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: 'Map',
            headerTitleStyle: { color: 'white' }
        })
    }
);

FavesStack.navigationOptions = {
    drawerIcon: () => <Ionicons name="md-heart" size={25} />
};
MapStack.navigationOptions = {
    drawerIcon: () => <Ionicons name="md-map" size={25} />
};
ScheduleStack.navigationOptions = {
    drawerIcon: () => <Ionicons name="md-calendar" size={25} />
};
AboutStack.navigationOptions = {
    drawerIcon: () => <Ionicons name="md-information-circle" size={25} />
};

export default createDrawerNavigator({
    Schedule: ScheduleStack,
    Map: MapStack,
    About: AboutStack,
    Faves: FavesStack
});
