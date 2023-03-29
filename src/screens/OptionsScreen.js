import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import CustomPressable from '../components/CustomButton/CustomPressable'
import { useNavigation } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const OptionsScreen = () => {
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
     <CustomPressable text={'File a complaint'} text1={'Fill a complaint form.'} name={'report'} 
     onPress={() => {navigation.navigate("signInPhone");}}/>
     <CustomPressable text={'Track a complaint'} text1={'Find out your complint status.'} name={'track-changes'}
     onPress={() => {navigation.navigate("case");}}/>
     <CustomPressable text={'Knowledge Bank'} text1={'Find out more about sexual harassment.'} name={'saved-search'}
     onPress={() => {navigation.navigate("knowledge");}}/>
     <CustomPressable text={'FAQ'} text1={'Frequently asked questions.'} name={'contact-support'} 
      onPress={() => {navigation.navigate("faq");}}/>
     <CustomPressable text={'About Us'} text1={'Find out abour our app.'} name={'info'}
     onPress={() => {navigation.navigate("about");}}/>
     <CustomPressable text={'Contact'} text1={'We would love to hear from you!'} name={'call'}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#009688',
      flex: 1,
      paddingVertical: windowHeight * 0.03,
      paddingHorizontal: windowWidth * 0.05,
    },
  });
export default OptionsScreen