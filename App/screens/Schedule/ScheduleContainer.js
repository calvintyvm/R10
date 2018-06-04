import React, { Component } from 'react';
import { Text } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import Schedule from './Schedule';
import { showTheFaves } from '../../redux/modules/Faves';
import ScreenLoader from '../../components/ScreenLoader';

const scheduleData = gql`
    query {
        allSessions {
            id
            title
            location
            title
            speaker {
                name
                bio
                image
            }
            startTime
            description
        }
    }
`;

class ScheduleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.dispatch(showTheFaves());
    }

    formatSessionData = sessions =>
        sessions
            .reduce((acc, curr) => {
                const timeExists = acc.find(section => section.title === curr.startTime);
                timeExists
                    ? timeExists.data.push(curr)
                    : acc.push({ title: curr.startTime, data: [curr] });
                return acc;
            }, [])
            .sort((a, b) => a.title - b.title);

    render() {
        return (
            <Query query={scheduleData}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return <ScreenLoader />;
                    }
                    if (error) return <Text>Error getting items</Text>;
                    const newScheduleData = this.formatSessionData(data.allSessions);
                    return (
                        <Schedule
                            nav={this.props.navigation}
                            scheduleData={newScheduleData}
                            favesData={this.props && this.props.allFaves}
                        />
                    );
                }}
            </Query>
        );
    }
}

export default connect(state => ({
    allFaves: state.Faves.allFaves
}))(ScheduleContainer);
