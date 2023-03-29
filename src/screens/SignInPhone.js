import { View, Text,Image, Pressable,Dimensions , StyleSheet } from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../safe_at_work/assets/images/amabarlogo.png';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignInPhone = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    
    const handlePhoneChange = (text) => {
    if (/^\d+$/.test(text) || text == '') {
      if (text.length <= 10) {
        setPhone(text); 
      }
    } 
  };

  const handleSubmit = () => {
    if (phone === '' || phone.length < 10) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
      navigation.navigate("otp");
    }
  };

  return (
    <View style={styles.container}>
    <Image source={Logo} resizeMode="cover" style={styles.logo}>
    </Image>
  <Text style={styles.text}>Enter your phone number</Text>
  <CustomInput setValue={handlePhoneChange} placeholder={"Enter phone number"} value={phone} keyboardType={"numeric"} maxLength={10}/>
  {submitted && (phone === '' || phone.length < 10) && (
        <Text style={{ color: 'red' }}>Please enter a valid phone number</Text>
      )}
  <CustomButton text={'Get OTP'} onPress={() => {
    handleSubmit();
      }}/>
</View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: windowWidth * 0.1,
    flex: 1,
    backgroundColor: '#009688',
  },
  logo: {
    height: windowHeight * 0.3,
    width: windowHeight * 0.3,
    alignSelf: 'center',
    marginBottom: windowHeight * 0.04,
    marginTop: windowHeight * 0.02,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: windowHeight * 0.04,
  },
  text1: {
    color: '#00faa6',
    fontSize: 17,
    marginTop: windowHeight * 0.02,
    alignSelf: 'flex-end',
  },
  text2: {
    color: 'white',
    fontSize: 17,
  },
  text3: {
    color: '#00faa6',
    fontSize: 17,
  },
  container1: {
    marginTop: windowHeight * 0.02,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
export default SignInPhone