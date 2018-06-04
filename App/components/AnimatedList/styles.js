import { StyleSheet, Platform } from 'react-native';
import { fontStyles } from '../../config/styles';

const styles = StyleSheet.create({
    infoText: {
        fontSize: 15,
        fontWeight: '100',
        width: '90%',
        marginLeft: 20,
        ...Platform.select({
            android: {
                fontFamily: fontStyles.android
            },
            ios: {
                fontFamily: fontStyles.ios
            }
        })
    },
    infoTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
        width: '95%',
        color: '#9963ea',
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
