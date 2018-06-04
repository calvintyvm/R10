import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    TouchableOpacity,
    LayoutAnimation,
    UIManager,
    Platform
} from 'react-native';
import styles from './styles';

class AnimatedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        this.showInfo = this.showInfo.bind(this);
    }
    componentWillUpdate() {
        const config = {
            duration: 750,
            update: {
                type: 'linear'
            }
        };
        LayoutAnimation.configureNext(config);
    }
    showInfo() {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        const { title, description } = this.props;
        return (
            <TouchableOpacity
                onPress={this.showInfo}
                style={{ overflow: 'hidden' }}
            >
                <Text style={styles.infoTitle}>
                    {this.state.opened ? '- ' : '+ '}
                    {title}
                </Text>
                {this.state.opened && (
                    <Text style={styles.infoText}>{description}</Text>
                )}
            </TouchableOpacity>
        );
    }
}

export default AnimatedList;

AnimatedList.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
