import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Platform,
  UIManager,
  StyleSheet,
  Dimensions
} from "react-native";

var { height, width } = Dimensions.get("window");
class AnimatedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };

    this.showInfo = this.showInfo.bind(this);
  }
  componentWillUpdate() {
    const config = {
      duration: 750,
      update: {
        type: "linear"
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
    console.log(this.props);
    const { title, description } = this.props;
    return (
      <TouchableOpacity onPress={this.showInfo} style={{ overflow: "hidden" }}>
        <Text style={styles.infoTitle}>
          {this.state.opened ? "- " : "+ "}
          {title}
        </Text>
        {this.state.opened && (
          <Text style={styles.infoText}>{description}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  infoText: {
    fontSize: 15,
    fontWeight: "100",
    width: "90%",
    marginLeft: 20
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: "bold",
    margin: 10,
    width: width,
    color: "#9963ea"
  }
});

export default AnimatedList;
