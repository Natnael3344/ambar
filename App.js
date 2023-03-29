import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from "./src/navigator/AppNavigator";

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hide();
    }, 6000); // <-- Set this to `5000` ms to hide it after 5 seconds
  }, []);
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, [])
  return (
    <NavigationContainer>
     <AppNavigator/>
    </NavigationContainer>
  );
}
