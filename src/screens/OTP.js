import { View,StyleSheet, Text,Button,Dimensions  } from 'react-native'
import React, { useState,useRef  } from 'react';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const OTP = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
  const handleOtpChange = (text) => {
    if (/^\d+$/.test(text) || text == '') {
      if (text.length <= 4) {
        setCode(text); 
      }
    } 
  };
  const handleSubmit = () => {
      if (code === '' || code.length < 4) {
        setSubmitted(true);
      } else {
        setSubmitted(false);
        navigation.navigate("Complaint");
      }
    }; 
  return (
    <View style={styles.container}>
      <SmoothPinCodeInput
  ref={this.pinInput}
  value={code}
  onTextChange={handleOtpChange}
  onFulfill={this._checkCode}
  onBackspace={this._focusePrevInput}
  cellSpacing={20}
  cellStyle={{
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
  }}
  textStyle={{
    fontSize: 24,
    color: 'black'
  }}
  containerStyle={styles.otp}
  />
      {submitted && (code === '' || code.length < 4) && (
        <Text style={{ color: 'red' }}>Please enter a valid OTP</Text>
      )}
     <CustomButton text={'Verify'} onPress={() => {
          handleSubmit();}}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    padding: windowWidth * 0.1,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#009688'
  },
  otp:{
    alignSelf:'center'
  }
});
export default OTP