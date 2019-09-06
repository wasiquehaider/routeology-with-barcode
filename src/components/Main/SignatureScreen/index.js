import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Button,
} from 'native-base';
import {styles} from '../../../styles/main.style';
import bgImage from '../../../assets/bg.png';
import Logo from '../../../assets/routeology.png';
import RNSignature from '../../../utils/RNSignature';
import {Actions} from 'react-native-router-flux';
export default class SignatureScreen extends Component {
  render() {
    return (
      <Container>
        <ImageBackground source={bgImage} style={styles.BgContainer}>
          <Header
            style={{backgroundColor: 'transparent', elevation: 0}}
            androidStatusBarColor="#722dae">
            <Left style={{flexDirection: 'row'}}>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon
                  name="keyboard-backspace"
                  size={30}
                  color="#FFFFFF"
                  style={[styles.pr10, styles.pt1]}
                />
              </Button>
              <Image source={Logo} style={[styles.InnerLogoStyle]} />
            </Left>
            <Body></Body>
            <Right></Right>
          </Header>
          <Content>
            <View style={[styles.ml4]}>
              <Text
                style={[
                  styles.baseText,
                  styles.white,
                  styles.fontMd,
                  styles.mb1,
                  styles.lightGray,
                ]}>
                Address
              </Text>
              <Text style={[styles.baseText, styles.white, styles.fontXL]}>
                1233 Main St{'\n'}
                Lewisville, TX 75067
              </Text>
              <View style={[styles.mt1]}>
                <Text
                  style={[
                    styles.baseText,
                    styles.white,
                    styles.fontMd,
                    styles.lightGray,
                  ]}>
                  Number of packages for this address :{' '}
                  <Text style={[styles.bold, styles.white]}>10</Text>
                </Text>
                <Text
                  style={[
                    styles.baseText,
                    styles.white,
                    styles.fontMd,
                    styles.lightGray,
                  ]}>
                  Total Packages Scanned :{' '}
                  <Text style={[styles.bold, styles.white]}>03</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.container]}>
              <TextInput
                style={[styles.baseText, styles.inputField, styles.m3]}
                placeholder="First Name"
              />
              <TextInput
                style={[styles.baseText, styles.inputField, styles.mb3]}
                placeholder="Last Name"
              />
            </View>
            {/*Signature Area*/}
            <View style={[styles.signCard]}>
              <Text
                style={[
                  styles.fontLg,
                  styles.pt4,
                  styles.pl3,
                  {color: '#828a8f'},
                ]}>
                Signature Here
              </Text>
              <View style={[styles.signContainerStyle, styles.m3]}>
                <RNSignature />
              </View>
            </View>
            <View style={styles.loginBtnContainer}>
              <TouchableOpacity
                style={[styles.Button, styles.widthFull, styles.bgGreen]}>
                <Text
                  style={[
                    styles.baseText,
                    styles.bold,
                    styles.white,
                    styles.fontMd,
                  ]}>
                  Save Signature
                </Text>
              </TouchableOpacity>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
