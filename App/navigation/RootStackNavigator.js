import { createStackNavigator } from 'react-navigation';
import NavigationLayout, { SpeakerModal } from './NavigationLayout';

export default createStackNavigator(
    {
        Layout: NavigationLayout,
        Speaker: SpeakerModal
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);
