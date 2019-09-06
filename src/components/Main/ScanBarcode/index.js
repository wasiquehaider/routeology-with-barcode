import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class ScanBarcode extends Component {
  render() {
    return (
      <View>
        <Text> ScanBarcode </Text>
        <Text onPress={() => Actions.pop()}>Go back</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
