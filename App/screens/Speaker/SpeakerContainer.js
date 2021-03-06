import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
    Linking
} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { colourStyles } from '../../config/styles';
import styles from './styles';

class SpeakerContainer extends Component {
    render() {
        const { navigation } = this.props;
        const speaker = navigation.getParam('speaker', 'NO-SPEAKER');
        return (
            <ScrollView style={styles.speakerContainer}>
                <StatusBar barStyle="light-content" />
                <View style={styles.topNav}>
                    <Ionicons
                        name="ios-close"
                        size={35}
                        color={colourStyles.white}
                        onPress={() => navigation.pop()}
                    />
                    <Text style={styles.navText}>About the Speaker</Text>
                </View>
                <View style={styles.container}>
                    <Image
                        style={styles.speakerImage}
                        source={{ uri: speaker.image }}
                    />
                    <Text style={styles.textName}>{speaker.name}</Text>
                    <Text style={styles.textDescription}>{speaker.bio}</Text>
                    <LinearGradient
                        start={{ x: 0.0, y: 1.0 }}
                        end={{ x: 1.0, y: 0.0 }}
                        colors={['#cf392a', '#9963ea']}
                        style={{
                            ...Platform.select({
                                android: {
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    marginBottom: 20
                                },
                                ios: {
                                    flex: 1,
                                    paddingVertical: 5,
                                    paddingHorizontal: 5,
                                    marginBottom: 20
                                }
                            })
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL(`https://en.wikipedia.org/wiki/${
                                    speaker.name
                                }`);
                            }}
                        >
                            <Text style={styles.gradientText}>
                                Read more on Wikipedia
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </ScrollView>
        );
    }
}

export default SpeakerContainer;

SpeakerContainer.propTypes = {
    navigation: PropTypes.object.isRequired
};
