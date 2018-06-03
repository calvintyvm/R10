import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import moment from "moment";
import { connect } from "react-redux";
import {
  createTheFave,
  showTheFaves,
  deleteTheFave
} from "../../redux/modules/Faves";
import Session from "./Session";
import Ionicons from "react-native-vector-icons/Ionicons";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  componentDidMount() {
    this.props.dispatch(showTheFaves());
  }

  render() {
    const { navigation } = this.props;
    const { dispatch } = this.props;
    const { allFaves } = this.props;
    const title = navigation.getParam("title", "NO-TITLE");
    const time = navigation.getParam("time", "NO-TIME");
    const speaker = navigation.getParam("speaker", "NO-SPEAKER");
    const description = navigation.getParam("description", "NO-DESCRIPTION");
    const location = navigation.getParam("location", "NO-LOCATION");
    const faveid = navigation.getParam("faveid", "NO-LOCATION");
    const favesData = navigation.getParam("favesData", "NO-LOCATION");
    let findArray = Array.from(allFaves);
    // console.log(speaker);
    // console.log(allFaves.includes(faveid));
    //if == gql
    // console.log(faveid);
    // console.log(allFaves);
    // console.log(allFaves.map(fav => fav.id === faveid));
    return (
      <ScrollView style={styles.container}>
        {/* <Session /> */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
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
            .format("h:mm a")
            .toUpperCase()}
        </Text>
        <Text style={styles.textDescription}>{description}</Text>
        {/* <View> */}
        <TouchableOpacity
          onPress={() =>
            navigation.push("Speaker", {
              speaker: speaker
            })
          }
        >
          <View>
            <Text style={{ fontSize: 18 }}>Presented by:</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              borderBottomWidth: 1.5,
              borderColor: "#999999"
            }}
          >
            <Image
              style={{
                marginBottom: 15,
                width: 60,
                height: 60,
                borderRadius: 60 / 2
              }}
              source={{ uri: speaker && speaker.image }}
            />
            <Text style={{ fontSize: 15, marginLeft: 10 }}>
              {speaker && speaker.name}
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          {findArray.find(id => id.id === faveid) ? (
            <Button
              onPress={() => {
                dispatch(deleteTheFave(faveid));
              }}
              title="Delete To Favs"
              color="#841584"
              style={{}}
            />
          ) : (
            <Button
              onPress={() => {
                dispatch(createTheFave(faveid));
              }}
              title="Add to Favs"
              color="#841584"
              style={{}}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginLeft: 20,
    marginTop: 20
  },
  textLocation: {
    fontSize: 18,
    color: "grey"
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  },
  textTime: {
    color: "red",
    marginBottom: 10,
    fontSize: 18
  },
  textDescription: {
    fontSize: 18,
    marginBottom: 10
  }
  // speakerContainer: {
  //   flex: 1,
  //   flexDirection: "row"
  // }
});

export default connect(state => ({
  allFaves: state.Faves.allFaves
}))(withNavigation(SessionContainer));
