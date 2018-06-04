import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {
    Platform,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import {
    createTheFave,
    showTheFaves,
    deleteTheFave
} from '../../redux/modules/Faves';
import styles from './styles';

class SessionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.dispatch(showTheFaves());
    }
    render() {
        const { navigation } = this.props;
        const { dispatch } = this.props;
        const { allFaves } = this.props;
        const title = navigation.getParam('title', 'NO-TITLE');
        const time = navigation.getParam('time', 'NO-TIME');
        const speaker = navigation.getParam('speaker', 'NO-SPEAKER');
        const description = navigation.getParam(
            'description',
            'NO-DESCRIPTION'
        );
        const location = navigation.getParam('location', 'NO-LOCATION');
        const faveid = navigation.getParam('faveid', 'NO-LOCATION');
        const findArray = Array.from(allFaves);
        return (
            <ScrollView style={styles.container}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text style={styles.textLocation}>{location}</Text>
                    {findArray.find(id => id.id === faveid) ? (
                        <Ionicons name="ios-heart" size={15} color="red" />
                    ) : (
                        <Text />
                    )}
                </View>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textTime}>
                    {moment(time)
                        .format('h:mm a')
                        .toUpperCase()}
                </Text>
                <Text style={styles.textDescription}>{description}</Text>
                <View>
                    <Text style={styles.topPresentText}>Presented by:</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.push('Speaker', {
                                speaker
                            })
                        }
                    >
                        <View style={styles.presentContainer}>
                            <Image
                                style={styles.presentImage}
                                source={{ uri: speaker && speaker.image }}
                            />
                            <Text style={styles.presentText}>
                                {speaker && speaker.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {findArray.find(id => id.id === faveid) ? (
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 0.0 }}
                            colors={['#cf392a', '#9963ea']}
                            style={{
                                ...Platform.select({
                                    android: {
                                        paddingVertical: 10,
                                        paddingHorizontal: 10,
                                        marginTop: 10
                                    },
                                    ios: {
                                        flex: 1,
                                        paddingVertical: 5,
                                        paddingHorizontal: 5
                                    }
                                })
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch(deleteTheFave(faveid));
                                }}
                            >
                                <Text style={styles.gradientText}>
                                    Delete from Faves
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    ) : (
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 0.0 }}
                            colors={['#cf392a', '#9963ea']}
                            style={{
                                ...Platform.select({
                                    android: {
                                        paddingVertical: 10,
                                        paddingHorizontal: 10,
                                        marginTop: 10
                                    },
                                    ios: {
                                        flex: 1,
                                        paddingVertical: 5,
                                        paddingHorizontal: 5
                                    }
                                })
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch(createTheFave(faveid));
                                }}
                            >
                                <Text style={styles.gradientText}>
                                    Add to Faves
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    )}
                </View>
            </ScrollView>
        );
    }
}

export default connect(state => ({
    allFaves: state.Faves.allFaves
}))(withNavigation(SessionContainer));

SessionContainer.propTypes = {
    navigation: PropTypes.object.isRequired,
    allFaves: PropTypes.object.isRequired,
    dispatch: PropTypes.func
};
