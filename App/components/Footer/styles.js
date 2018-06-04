import { StyleSheet, Platform } from 'react-native';
import { fontStyles, colourStyles } from '../../config/styles';

const styles = StyleSheet.create({
    footerContainer: {
        borderTopWidth: 1,
        borderColor: colourStyles.mediumgray,
        marginLeft: 15,
        marginRight: 15,
        padding: 10
    },
    footerText: {
        color: 'black',
        fontSize: 17,
        marginRight: 15,
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
