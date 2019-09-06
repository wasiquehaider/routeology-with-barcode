import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import Splash from "./src/components/Splash";
import Login from "./src/components/Auth/Login";
import Home from "./src/components/Main/Home";
import ScanBarcode from "./src/components/Main/ScanBarcode";
import Logo from "./src/assets/routeology.png";
import SignatureScreen from "./src/components/Main/SignatureScreen";
import ByTrackingNumber from "./src/components/Main/ByTrackingNumber";
import ProductScanRNCamera from "./src/CameraComp";
import { Router, Scene } from "react-native-router-flux";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="splash" component={Splash} hideNavBar initial />
          <Scene key="login" component={Login} hideNavBar />
          <Scene key="home" component={Home} hideNavBar />
          <Scene
            key="scanbarcode"
            direction="vertical"
            component={ProductScanRNCamera}
            hideNavBar
          />
          <Scene
            key="bytrackingnumber"
            component={ByTrackingNumber}
            hideNavBar
          />
          <Scene
            key="signaturecapture"
            component={SignatureScreen}
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}
