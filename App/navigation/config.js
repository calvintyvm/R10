import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colourStyles } from '../config/styles';

const GradientHeader = props => (
    <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
        <LinearGradient
            colors={['#cf392a', '#9963ea']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { height: 64, width: '100%' }]}
        />
        <Header {...props} />
    </View>
);

export const sharedNavigationOptions = navigation => ({
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
        backgroundColor: 'transparent'
    },
    headerLeft: Platform.select({
        android:
            navigation.state.routeName !== 'Session' ? (
                <Ionicons
                    style={{ marginLeft: 20 }}
                    size={30}
                    name="md-menu"
                    color={colourStyles.white}
                    onPress={() => navigation.toggleDrawer()}
                />
            ) : (
                <Ionicons
                    style={{ marginLeft: 20 }}
                    size={30}
                    name="md-arrow-back"
                    color={colourStyles.white}
                    onPress={() => navigation.pop()}
                />
            )
    })
});

export const sessionNavigatorOptions = navigation => ({
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
        backgroundColor: 'transparent'
    }
});
