import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Image
} from 'react-native';
import MapView from 'react-native-maps';

const Map = () => (
    <MapView
        style={styles.map}
        initialRegion={{
            latitude: 49.2635,
            longitude: -123.138164,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0121
        }}
    >
        <MapView.Marker
            coordinate={{
                latitude: 49.2635,
                longitude: -123.138164,
                latitudeDelta: 0.0122,
                longitudeDelta: 0.0121
            }}
        >
            <View>
                <Image
                    style={{ width: 50, height: 50, marginBottom: 30 }}
                    source={require('../../assets/map_pin.png')}
                />
            </View>
        </MapView.Marker>
    </MapView>
);
const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    }
});

export default Map;
