import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
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
import {data} from '../../../data/packageslist';
import PackageList from '../../../layouts/PackageList';
import {Actions} from 'react-native-router-flux';

export default class ByTrackingNumber extends Component {
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
                Tracking Number Search
              </Text>
              <Text style={[styles.baseText, styles.white, styles.fontXL]}>
                Type in the last 4-5 digits{'\n'}of the tracking number
              </Text>
            </View>

            <View style={[styles.container, styles.mt4, styles.mb4]}>
              <View style={styles.searchSection}>
                <TextInput
                  style={[styles.searchInput]}
                  placeholder="Enter Number Here"
                  underlineColorAndroid="transparent"
                />
                <Button style={[styles.searchIcon, styles.mr2]}>
                  <Icon name="magnify" size={20} color="#FFFFFF" />
                </Button>
              </View>
            </View>
            <View style={[styles.ml4]}>
              <Text
                style={[
                  styles.baseText,
                  styles.white,
                  styles.fontMd,
                  styles.lightGray,
                ]}>
                2 Matching Tracking Numbers Found.
              </Text>
              <Text
                style={[
                  styles.baseText,
                  styles.white,
                  styles.fontMd,
                  styles.lightGray,
                ]}>
                Tap on the correct one to add it to your manifest.
              </Text>
            </View>

            <View style={[styles.homeListContainer, styles.mt5]}>
              <PackageList
                data={data}
                iconBgColor="#b8b9b8"
                onPress={() => alert('List Item added')}
              />
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
