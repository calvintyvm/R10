import { StyleSheet, Platform } from 'react-native';
import { colourStyles, fontStyles } from '../../config/styles';

const styles = StyleSheet.create({
    startTime: {
        backgroundColor: colourStyles.mediumgray,
        padding: 5,
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 13,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    scheduleTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        padding: 5,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    scheduleLocation: {
        fontSize: 12,
        padding: 5,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    bottomFaveContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: colourStyles.mediumgray
    }
});
export default styles;
