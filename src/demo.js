import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', 'Default Title'),
    };
  };
  render() {
    return (
      <View>
        <Text> demo </Text>
      </View>
    );
  }
}
