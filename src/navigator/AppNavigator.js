import { View, Text, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Complaint from '../screens/Complaint';
import AboutScreen from '../screens/AboutScreen';
import FaqScreen from '../screens/FaqScreen';
import TrackScreen from '../screens/TrackScreen';
import SignInPhone from '../screens/SignInPhone';
import OTP from '../screens/OTP';
import OptionsScreen from '../screens/OptionsScreen';
import CaseVerifyScreen from '../screens/CaseVerifyScreen';
import KnowledgeBankScreen from '../screens/KnowledgeBankScreen';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation(); 
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={OptionsScreen}
      options={{ headerShown: false }}
    />
    
    <Stack.Screen
      name="Complaint"
      component={Complaint}
      options={{ 
        headerLeft: () => (
          <Icon
            name="arrow-back"
            size={24}
            color="#fff"
            onPress={() => navigation.navigate('home')}
          />
        ),
        title:' File a complaint',
            headerStyle: {
              backgroundColor: '#ffcb30',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
       }}
    />
    <Stack.Screen
      name="about"
      component={AboutScreen}
      options={{ 
        title:'About Us',
            headerStyle: {
              backgroundColor: '#ffcb30',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
       }}
    />
    <Stack.Screen
      name="faq"
      component={FaqScreen}
      options={{ 
        title:'Frequently Asked Questions',
            headerStyle: {
              backgroundColor: '#ffcb30',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
       }}
    />
    <Stack.Screen
      name="track"
      component={TrackScreen}
      options={{ 
        headerLeft: () => (
          <Icon
            name="arrow-back"
            size={24}
            color="#fff"
            onPress={() => navigation.navigate('home')}
          />
        ),
        title:' Track a complaint',
            headerStyle: {
              backgroundColor: '#ffcb30',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
       }}
    />
   
    <Stack.Screen
      name="signInPhone"
      component={SignInPhone}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="otp"
      component={OTP}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="case"
      component={CaseVerifyScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="knowledge"
      component={KnowledgeBankScreen}
      options={{ 
        title:'Knowledge Bank',
            headerStyle: {
              backgroundColor: '#ffcb30',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
       }}
    />
    </Stack.Navigator>
  )
}

export default AppNavigator