import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import bgImage from '../../../assets/bg.png';
import Logo from '../../../assets/routeology.png';
import ScanBg from '../../../assets/scanBg.png';
import KeyBg from '../../../assets/keyBg.png';
import KeyIcon from '../../../assets/key.png';
import ScanIcon from '../../../assets/scan.png';
import {styles} from '../../../styles/main.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Card,
  Button,
  List,
} from 'native-base';
import PackageItem from '../../../layouts/PackageItem';
import {data} from '../../../data/packageslist';
import PackageList from '../../../layouts/PackageList';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <ImageBackground source={bgImage} style={styles.BgContainer}>
          <Header
            style={{backgroundColor: 'transparent', elevation: 0}}
            androidStatusBarColor="#722dae">
            <Left>
              <Image source={Logo} style={[styles.InnerLogoStyle]} />
            </Left>
            <Body></Body>
            <Right>
              <Button transparent onPress={() => alert('List cleared')}>
                <Icon
                  name="close"
                  size={20}
                  style={[[styles.white, styles.pr1]]}
                />
                <Text style={[styles.fontMd, styles.white]}>Clear List</Text>
              </Button>
            </Right>
          </Header>
          <Content>
            <View style={[styles.ml3, styles.mt5, styles.mb5]}>
              <Text style={[styles.baseText, styles.white, styles.fontXL]}>
                Deliver Packages
              </Text>
              <Text
                style={[
                  styles.baseText,
                  styles.mt2,
                  styles.white,
                  styles.fontMd,
                ]}>
                Scan or Enter a package using{'\n'}the buttons below
              </Text>
            </View>
            <View style={styles.scanButtonContainer}>
              <TouchableOpacity onPress={() => Actions.scanbarcode()}>
                <Card style={[styles.scanButton, styles.ml2]}>
                  <View
                    style={[
                      styles.scanBtnSubContainer,
                      styles.pt2,
                      styles.pl2,
                    ]}>
                    <Text style={[styles.fontMd, styles.gray, styles.bold]}>
                      Scan Fedex
                    </Text>
                    <Text
                      style={[styles.fontXL, styles.lightGray, styles.bold]}>
                      Barcodes
                    </Text>
                  </View>
                  <View style={[styles.scanSymbolContainer]}>
                    <Image source={ScanIcon} />
                  </View>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.bytrackingnumber()}>
                <Card style={[styles.scanButton, styles.ml2]}>
                  <View
                    style={[
                      styles.scanBtnSubContainer,
                      styles.pt2,
                      styles.pl2,
                    ]}>
                    <Text style={[styles.fontMd, styles.gray, styles.bold]}>
                      Add Tracking Number
                    </Text>
                    <Text
                      style={[styles.fontXL, styles.lightGray, styles.bold]}>
                      Manually
                    </Text>
                  </View>
                  <View style={[styles.scanSymbolContainer]}>
                    <Image source={KeyIcon} />
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
            <View style={[styles.ml2, styles.mt4]}>
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
            <View
              style={[styles.signBadge, styles.ml2, styles.mt2, styles.mb2]}>
              <Text style={[styles.white, styles.fontMd]}>
                Signature Required
              </Text>
            </View>
            <View style={[styles.homeListContainer]}>
              <Text
                style={[
                  styles.fontLg,
                  styles.pt4,
                  styles.pl3,
                  {color: '#828a8f'},
                ]}>
                Tracking Numbers
              </Text>
              {/*Packages List*/}
              <PackageList
                data={data}
                iconBgColor="#89cc58"
                onPress={() => alert('Home List Item')}
              />
            </View>
            <View style={styles.homeGroupBtnContainer}>
              <View style={styles.homeGroupBtnSubContainer}>
                <TouchableOpacity
                  onPress={() => Actions.signaturecapture()}
                  style={[
                    styles.Button,
                    styles.widthHalf,
                    styles.bgOrange,
                    {borderWidth: 1, borderColor: '#A42C00'},
                  ]}>
                  <Text
                    style={[
                      styles.baseText,

                      styles.white,
                      styles.fontLg,
                      styles.textCenter,
                    ]}>
                    Get Signature
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.Button,
                    styles.widthHalf,
                    styles.bgOrange,
                    {borderWidth: 1, borderColor: '#A42C00'},
                  ]}>
                  <Text
                    style={[
                      styles.baseText,

                      styles.white,
                      styles.fontLg,
                      styles.textCenter,
                    ]}>
                    Save Without Signature
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
