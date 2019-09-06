import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Helvetica Neue',
  },
  flexone: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SplashContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplashLogoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  SplashLogo: {
    width: wp('70%'),
    height: hp('20%'),
    resizeMode: 'contain',
  },
  BgContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  headerContainer: {
    margin: 10,
  },
  Logo: {
    width: wp('40%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },
  InnerLogoStyle: {
    width: wp('40%'),
    height: wp('16%'),
    resizeMode: 'contain',
  },
  inputField: {
    backgroundColor: '#fff',
    width: wp('85%'),
    borderRadius: 5,
    fontSize: wp('5%'),
    paddingHorizontal: 20,
    height: wp('15%'),
  },
  loginBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  Button: {
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontHeading: {
    fontSize: wp('8%'),
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  fontXL: {
    fontSize: wp('7%'),
  },
  fontLg: {
    fontSize: wp('5%'),
  },
  fontMd: {
    fontSize: wp('4%'),
  },
  fontSm: {
    fontSize: wp('3%'),
  },
  bold: {
    fontWeight: 'bold',
  },
  bgOrange: {backgroundColor: '#ee5438'},
  bgGreen: {backgroundColor: '#89cc58'},
  white: {
    color: '#FFFFFF',
  },
  gray: {
    color: '#5f6b72',
  },
  lightGray: {
    color: '#c9ccce',
  },
  widthFull: {
    width: wp('100%'),
  },
  heightFull: {
    height: hp('100%'),
  },
  widthHalf: {
    width: wp('50%'),
  },
  heightHalf: {
    height: hp('50%'),
  },
  // ****** HOME SCREEN BUTTONS ******
  scanButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  scanButton: {
    width: wp('40%'),
    height: wp('40%'),
    borderRadius: 10,
  },
  scanBtnSubContainer: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  scanSymbolContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  signBadge: {
    backgroundColor: '#fb591d',
    width: wp('40%'),
    height: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  homeListContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  homeGroupBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  homeGroupBtnSubContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // ******Signature Card******
  signCard: {
    flex: 1,
    height: hp('60%'),
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  signContainerStyle: {
    height: hp('45%'),
    borderStyle: 'dashed',
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#c9ccce',
  },

  // ******PACKAGE ITEM STYLE******
  ListContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  ListCheck: {
    borderRadius: wp('4%'),
    width: wp('8%'),
    height: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  DashedSeparator: {
    width: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ListTextContainer: {
    flex: 5,
    height: wp('15%'),
  },

  // ******Search By package number******
  packageSearchContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  //   ******MARGIN******

  m1: {
    margin: wp('2%'),
  },
  m2: {
    margin: wp('4%'),
  },
  m3: {
    margin: wp('6%'),
  },
  m4: {
    margin: wp('8%'),
  },
  m5: {
    margin: wp('10%'),
  },
  mt1: {
    marginTop: wp('2%'),
  },
  mt2: {
    marginTop: wp('4%'),
  },
  mt3: {
    marginTop: wp('6%'),
  },
  mt4: {
    marginTop: wp('8%'),
  },
  mt5: {
    marginTop: wp('10%'),
  },
  mb1: {
    marginBottom: wp('2%'),
  },
  mb2: {
    marginBottom: wp('4%'),
  },
  mb3: {
    marginBottom: wp('6%'),
  },
  mb4: {
    marginBottom: wp('8%'),
  },
  mb5: {
    marginBottom: wp('10%'),
  },
  ml1: {
    marginLeft: wp('2%'),
  },
  ml2: {
    marginLeft: wp('4%'),
  },
  ml3: {
    marginLeft: wp('6%'),
  },
  ml4: {
    marginLeft: wp('8%'),
  },
  ml5: {
    marginLeft: wp('10%'),
  },
  mr1: {
    marginRight: wp('2%'),
  },
  mr2: {
    marginRight: wp('4%'),
  },
  mr3: {
    marginRight: wp('6%'),
  },
  mr4: {
    marginRight: wp('8%'),
  },
  mr5: {
    marginRight: wp('10%'),
  },
  //   ******Padding******

  p1: {
    padding: wp('2%'),
  },
  p2: {
    padding: wp('4%'),
  },
  p3: {
    padding: wp('6%'),
  },
  p4: {
    padding: wp('8%'),
  },
  p5: {
    padding: wp('10%'),
  },
  pt1: {
    paddingTop: wp('2%'),
  },
  pt2: {
    paddingTop: wp('4%'),
  },
  pt3: {
    paddingTop: wp('6%'),
  },
  pt4: {
    paddingTop: wp('8%'),
  },
  pt5: {
    paddingTop: wp('10%'),
  },
  pb1: {
    paddingBottom: wp('2%'),
  },
  pb2: {
    paddingBottom: wp('4%'),
  },
  pb3: {
    paddingBottom: wp('6%'),
  },
  pb4: {
    paddingBottom: wp('8%'),
  },
  pb5: {
    paddingBottom: wp('10%'),
  },
  pl1: {
    paddingLeft: wp('2%'),
  },
  pl2: {
    paddingLeft: wp('4%'),
  },
  pl3: {
    paddingLeft: wp('6%'),
  },
  pl4: {
    paddingLeft: wp('8%'),
  },
  pl5: {
    paddingLeft: wp('10%'),
  },
  pr1: {
    paddingRight: wp('2%'),
  },
  pr2: {
    paddingRight: wp('4%'),
  },
  pr3: {
    paddingRight: wp('6%'),
  },
  pr4: {
    paddingRight: wp('8%'),
  },
  pr5: {
    paddingRight: wp('10%'),
  },
  searchSection: {
    flex: 1,
    backgroundColor: '#fff',
    width: wp('85%'),
    height: wp('15%'),
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#6527a2',
    borderRadius: 15,
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: wp('5%'),
    backgroundColor: '#fff',
    color: '#424242',
  },
});
