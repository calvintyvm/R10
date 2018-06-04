import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
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
        Faves: FavesContainer,
        Session: SessionContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation),
            title: 'Faves'
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
            title: 'Schedule'
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
            title: 'About'
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
            title: 'Map'
        })
    }
);

export default createBottomTabNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        About: AboutStack,
        Faves: FavesStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'About') {
                    iconName = `ios-information-circle${
                        focused ? '' : '-outline'
                    }`;
                } else if (routeName === 'Map') {
                    iconName = `ios-map${focused ? '' : '-outline'}`;
                } else if (routeName === 'Faves') {
                    iconName = `ios-heart${focused ? '' : '-outline'}`;
                } else if (routeName === 'Schedule') {
                    iconName = `ios-calendar${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            labelStyle: {
                fontSize: 10,
                fontFamily: 'Montserrat'
            },
            style: {
                backgroundColor: 'black'
            }
        }
    }
);
