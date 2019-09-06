import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native';

import SignatureCapture from 'react-native-signature-capture';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class RNSignature extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SignatureCapture
          style={styles.signature}
          ref="sign"
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'portrait'}
        />
        <View style={{position: 'absolute', top: 10, right: 10}}>
          <Button
            onPress={() => {
              this.resetSign();
            }}
            transparent
            style={{
              backgroundColor: 'red',
              width: 30,
              height: 30,
              borderRadius: 25,
              justifyContent: 'center',
            }}>
            <Icon name="reload" size={20} color="#ffffff" />
          </Button>
        </View>

        {/*<View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              this.saveSign();
            }}>
            <Text>Save</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              this.resetSign();
            }}>
            <Text>Reset</Text>
          </TouchableHighlight>
        </View>*/}
      </View>
    );
  }

  saveSign() {
    this.refs['sign'].saveImage();
  }

  resetSign() {
    this.refs['sign'].resetImage();
  }

  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    let pathName =
      Platform.OS === 'android' ? `file:/${result.pathName}` : result.pathName;
    console.log('pathName=========', pathName);
  }
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log('dragged');
  }
}

const styles = StyleSheet.create({
  signature: {
    flex: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});

export default RNSignature;
