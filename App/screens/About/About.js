import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import AnimatedList from '../../components/AnimatedList';
import styles from './styles';

const About = ({ aboutData }) => (
    <ScrollView>
        <View style={styles.header}>
            <Image
                style={styles.imageStyle}
                source={require('../../assets/r10_logo.png')}
            />
        </View>
        <View>
            <Text style={styles.textStyle}>
                R10 is a conference that focuses on just about any topic related
                to dev.
            </Text>
            <Text style={styles.titleStyle}>Date & Venue</Text>
            <Text style={styles.textStyle}>
                The R10 conference will take place on Tuesday, June 27 2018 in
                Vancouver, Bc.
            </Text>
        </View>
        <Text style={styles.titleStyle}>Code of Conduct</Text>
        <View style={styles.welcome}>
            {aboutData.map((item, index) => (
                <AnimatedList
                    title={item.title}
                    description={item.description}
                    key={index}
                />
            ))}
        </View>
        <Footer />
    </ScrollView>
);

export default About;

About.propTypes = {
    aboutData: PropTypes.array.isRequired
};
