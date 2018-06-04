import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const ScreenLoader = () => (
    <View>
        <ActivityIndicator
            style={{ marginTop: 240 }}
            size="large"
            color="purple"
        />
    </View>
);

export default ScreenLoader;
