import { StyleSheet, Platform } from 'react-native';
import { fontStyles, colourStyles } from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginLeft: 20,
        marginTop: 20
    },
    textLocation: {
        fontSize: 18,
        color: colourStyles.mediumgray,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    textTitle: {
        fontSize: 28,
        color: colourStyles.black,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    textTime: {
        color: colourStyles.red,
        marginBottom: 10,
        fontSize: 18,
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
        fontSize: 18,
        marginBottom: 10,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    gradientText: {
        fontSize: 20,
        color: colourStyles.white,
        textAlign: 'center',
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    presentImage: {
        marginBottom: 15,
        width: 60,
        height: 60,
        borderRadius: 60 / 2
    },
    presentText: {
        fontSize: 18,
        color: colourStyles.black,
        marginLeft: 10,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    presentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    topPresentText: {
        fontSize: 18,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    viewContainer: { width: '90%' }
});

export default styles;
