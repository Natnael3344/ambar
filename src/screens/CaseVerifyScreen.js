import { View, Text,Image, Pressable,Dimensions , StyleSheet } from 'react-native'
import { useState } from 'react';
import Logo from '../../../safe_at_work/assets/images/amabarlogo.png';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CaseVerifyScreen = () => {

    const [phone, setPhone] = useState('');
    const [phoneWarning, setPhoneWarning] = useState(false);
    const navigation = useNavigation();
    const handleSubmit = () => {
      if (phone === '' || phone.length < 10) {
        setPhoneWarning(true);
      } else {
        setPhoneWarning(false);
        navigation.navigate("track");
      }
    };
    return (
      <View style={styles.container}>
      
      <Image source={Logo} resizeMode="cover" style={styles.logo}>
      </Image>
    <Text style={styles.text}>Enter your case or mobile number</Text>
  
    <CustomInput placeholder={"Enter case or mobile number"} maxLength={10} value={phone} setValue={setPhone} keyboardType={'numeric'}/>
    {phoneWarning && <Text style={styles.warningText}>Please enter valid phone or case number</Text>}
    <CustomButton text={'Continue'} onPress={() => {
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
    warningText:{
      color:'red'
    },
  });
export default CaseVerifyScreen