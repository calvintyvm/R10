import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Platform,
  UIManager,
  StyleSheet
} from "react-native";
import styles from "./styles";

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

export default AnimatedList;
