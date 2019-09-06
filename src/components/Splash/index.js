import React, {Component} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import bgImage from '../../assets/bg.png';
import Logo from '../../assets/routeology3x.png';
import {styles} from '../../styles/main.style';
import {Actions} from 'react-native-router-flux';

export default class Splash extends Component {
  componentDidMount() {
    // this._retrieveCurrentUser();
    setTimeout(() => {
      Actions.login();
    }, 3000);
  }

  _retrieveCurrentUser = async () => {
    try {
      const value = await AsyncStorage.getItem('@loggedInUser');
      if (value !== null) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.SplashContainer}>
        <View style={styles.SplashLogoContainer}>
          <Image source={Logo} style={styles.SplashLogo} />
        </View>
      </ImageBackground>
    );
  }
}
