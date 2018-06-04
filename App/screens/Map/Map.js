import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => (
    <View>
        {/* <MapView
            region={{
                latitude: 49.263474,
                longitude: -123.13809,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }}
        >
            <MapView.Marker
                coordinate={{
                    latitude: 49.263474,
                    longitude: -123.13809
                }}
                title="RED"
                description="RED"
            />
        </MapView> */}
        <MapView />
    </View>
);

export default Map;
