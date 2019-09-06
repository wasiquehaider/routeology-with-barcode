import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import bgImage from '../../../assets/bg.png';
import Logo from '../../../assets/routeology.png';
import {styles} from '../../../styles/main.style';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.BgContainer}>
        <KeyboardAvoidingView style={styles.flexone}>
          <View style={styles.headerContainer}>
            <Image source={Logo} style={styles.Logo} />
          </View>
          <View style={[styles.pt4, styles.pl3]}>
            <Text style={[styles.baseText, styles.white, styles.fontHeading]}>
              Sign In
            </Text>
            <Text
              style={[
                styles.baseText,
                styles.mt2,
                styles.white,
                styles.fontMd,
              ]}>
              Enter your Login Details {'\n'}Below.
            </Text>
          </View>
          <View style={styles.container}>
            <TextInput
              style={[styles.baseText, styles.inputField, styles.m3]}
              placeholder="Your Name"
            />
            <TextInput
              style={[styles.baseText, styles.inputField]}
              placeholder="Password"
            />
          </View>
          <View style={styles.loginBtnContainer}>
            <TouchableOpacity
              style={[styles.Button, styles.widthFull, styles.bgOrange]}
              onPress={() => Actions.home()}>
              <Text
                style={[
                  styles.baseText,
                  styles.bold,
                  styles.white,
                  styles.fontMd,
                ]}>
                Sign In To Continue
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
