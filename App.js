import React, { Component } from 'react';
import Routes from "./Routes";
import { View, YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);


export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Routes />
      </View>

    );
  }
}
