import React from 'react';
import { Text, View, SectionList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colourStyles } from '../../config/styles';
import styles from './styles';

const Faves = ({ scheduleData, nav, favesData }) => (
    <SectionList
        sections={scheduleData}
        renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <TouchableOpacity
                    onPress={() =>
                        nav.navigate('Session', {
                            title: item.title,
                            time: item.startTime,
                            speaker: item.speaker,
                            description: item.description,
                            location: item.location,
                            faveid: item.id,
                            favesData
                        })
                    }
                >
                    <View>
                        <Text style={styles.scheduleTitle}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.bottomFaveContainer}>
                    <Text style={styles.scheduleLocation}>{item.location}</Text>
                    <Ionicons
                        style={{ marginRight: 10 }}
                        name="ios-heart"
                        size={15}
                        color={colourStyles.red}
                    />
                </View>
            </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
            <View>
                <Text style={styles.startTime}>
                    {moment(title).format('h:mm a')}
                </Text>
            </View>
        )}
        keyExtractor={(item, index) => item + index}
    />
);

export default Faves;

Faves.propTypes = {
    scheduleData: PropTypes.array.isRequired,
    nav: PropTypes.object.isRequired,
    favesData: PropTypes.object.isRequired
};
