import { StyleSheet, Platform } from 'react-native';
import { colourStyles, fontStyles } from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: colourStyles.white,
        alignItems: 'center',
        borderRadius: 10
    },
    textName: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    textDescription: {
        color: 'black',
        fontSize: 17,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    speakerContainer: { backgroundColor: 'black' },
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 12,
        ...Platform.select({
            android: {
                width: '80%'
            },
            ios: {
                width: '90%'
            }
        })
    },
    navText: {
        color: colourStyles.white,
        fontSize: 18,
        marginRight: 40,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android,
                marginLeft: 70
            },
            ios: {
                fontFamily: fontStyles.ios,
                marginLeft: 10
            }
        })
    },
    speakerImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        marginTop: 10
    },
    gradientText: {
        fontSize: 18,
        color: colourStyles.white,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    }
});

export default styles;
