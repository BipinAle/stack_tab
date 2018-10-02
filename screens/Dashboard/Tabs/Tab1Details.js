import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
class Tab1Details extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Tab 1 Details</Text>
        <Button
            raised
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text>Go to home.</Text>
        </Button>
      </View>
    );
  }
}

export default Tab1Details;
