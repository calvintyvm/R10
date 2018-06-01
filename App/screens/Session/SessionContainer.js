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
        {findArray.find(id => id.id === faveid) ? (
          <Ionicons name="ios-heart" size={15} color="red" />
        ) : (
          <Text />
        )}
        <Text style={styles.textLocation}>{location}</Text>
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
            <View>
              <Text>Presented by:</Text>
            </View>
            <View>
              <Text>{speaker && speaker.name}</Text>
              <Image
                style={{ width: 75, height: 75, borderRadius: 75 / 2 }}
                source={{ uri: speaker && speaker.image }}
              />
            </View>
            <View>
              {findArray.find(id => id.id === faveid) ? (
                <Button
                  onPress={() => {
                    dispatch(deleteTheFave(faveid));
                  }}
                  title="Delete To Favs"
                  color="#841584"
                />
              ) : (
                <Button
                  onPress={() => {
                    dispatch(createTheFave(faveid));
                  }}
                  title="Add to Favs"
                  color="#841584"
                />
              )}

              {/* {allFaves.map((fave, index) => {
                let faveId = fave.id;
                if (faveId === faveid) {
                  console.log("true");
                  return (
                    <Button
                      key={index}
                      onPress={() => {
                        dispatch(deleteTheFave(faveid));
                      }}
                      title="Delete To Favs"
                      color="#841584"
                    />
                  );
                } else {
                  // console.log("false");
                  return (
                    <Button
                      key={index}
                      onPress={() => {
                        dispatch(createTheFave(faveid));
                      }}
                      title="Add to Favs"
                      color="#841584"
                    />
                  );
                }
              })} */}
            </View>
          </View>
        </TouchableOpacity>
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
