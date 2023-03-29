import { View, Text,StyleSheet,Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react';
import CustomPressable from '../components/CustomButton/CustomPressable';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const FaqScreen = () => {
  const [showComplaint, setShowComplaint] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showStuck, setShowStuck] = useState(false);
  const [showProcess, setShowProcess] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <ScrollView style={styles.container1}>
      <CustomPressable  text={'Complaint related queries'} name={'keyboard-arrow-down'} onPress={() => setShowComplaint(!showComplaint)}/>
    {showComplaint && (
      <View style={styles.container2}>
        <Text style={styles.text}>1. Who can file a complaint under this Act?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>The Act defines an ‘aggrieved woman’ as a woman of any age, whether employed or not, who may have experienced sexual harassment in her workplace, be it an establishment or institution or a dwelling place or house.</Text>
      </View>
      <Text style={styles.text}>2. Where should you file a complaint?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>There are two forums for complaint under this law:

Internal Committee (IC):formed in organisations with 10 employees or more. Women working in these institutions should file a complaint with their IC first.

Local Committee (LC): formed by the District Officer in the District Administration to receive complaints of sexual harassment from establishments where there’s no Internal Committee and/or when the complaint is against the employer themselves (informal women workers).</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'About the law'} name={'keyboard-arrow-down'} onPress={() => setShowAbout(!showAbout)}/>
    {showAbout && (
      <View style={styles.container2}>
        <Text style={styles.text}>1. What constitutes sexual harassment at workplace?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>Sexual harassment is any unwelcome sexual behaviour that can include:
1. Physical contact
2. A demand or a request for a sexual favour
3. Sexually coloured remarks
4. Showing pornography
5. Any other unwelcome physical, verbal or non-verbal conduct of a sexual nature.</Text>
      </View>
      <Text style={styles.text}>2. What is the Prevention of Sexual Harassment of Women at Workplace Act, 2013?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>The Local Committee is set up in the district administration to receive complaints of sexual harassment from establishments where there’s no Internal Committee and/or when the complaint is against the employer themselves (informal women workers). This is not a forum to file complaints of other kinds of workplace misconduct or gender discrimination.</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'My account'} name={'keyboard-arrow-down'} onPress={() => setShowAccount(!showAccount)}/>
    {showAccount && (
      <View style={styles.container2}>
        <Text style={styles.text}>1. How can I access my account?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>As a complainant, we understand that you may need access to your account to track the status of your complaint or to view any updates related to it. To facilitate this, we have implemented a simple and secure OTP-based login system, which enables you to log in to your account easily using either your mobile number or email address.

We understand that your contact details may change from time to time, which can affect your ability to access your account. In such cases, we recommend that you update your contact details in your account settings as soon as possible to ensure uninterrupted access. However, if you are unable to access your account due to a change in your registered contact number or email address, our technical team will be happy to assist you in restoring access to your account.

If you are an LC or DA. You can access your account via email/mobile & password you created during registration.

</Text>
      </View>
      <Text style={styles.text}>2. What if I forget my password?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>If you ever forget your password, you can easily reset it by requesting an OTP to be sent to either your registered email address or mobile number. This OTP can then be used to create a new password and regain access to your account.

However, we understand that there may be situations where you are still unable to sign in to your account, even after resetting your password. In such cases, we recommend that you contact our administration or technical team for further assistance. Our dedicated support team is always available to help you with any issues or concerns you may have regarding your account.</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'I am stuck/troubleshooting/app not working'} name={'keyboard-arrow-down'} onPress={() => setShowStuck(!showStuck)}/>
    {showStuck && (
      <View style={styles.container2}>
        <Text style={styles.text}>1.  My App is showing errors?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>If you encounter any errors while using our app, we apologize for any inconvenience caused. We strive to provide our users with a seamless and hassle-free experience, and we understand that any errors can be frustrating.

To help us resolve the issue as quickly as possible, we encourage you to send a complaint along with any relevant screenshots to surakshachakra@myambar.org. Our dedicated technical team will promptly investigate the issue and work to resolve it as soon as possible.</Text>
      </View>
      <Text style={styles.text}>2. My Complaint status is not being updated?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>If you ever forget your password, you can easily reset it by requesting an OTP to be sent to either your registered email address or mobile number. This OTP can then be used to create a new password and regain access to your account.</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'Process related queries'} name={'keyboard-arrow-down'} onPress={() => setShowProcess(!showProcess)}/>
    {showProcess && (
      <View style={styles.container2}>
        <Text style={styles.text}>1. What kind of complaint can I file with the Local Committee?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>The Local Committee is set up in the district administration to receive complaints of sexual harassment from establishments where there’s no Internal Committee and/or when the complaint is against the employer themselves (informal women workers). This is not a forum to file complaints of other kinds of workplace misconduct or gender discrimination.</Text>
      </View>
      <Text style={styles.text}>2. What information/proof/documentation will I require to file my complaint on this App?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>You will need to file the following details: your name, address, respondent’s name and address/contact number, and a description of what happened. You can also upload any proof, explanation, supporting documents in audio or video format, if you have it. But it is not mandatory.</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'Privacy'} name={'keyboard-arrow-down'} onPress={() => setShowPrivacy(!showPrivacy)}/>
    {showPrivacy && (
      <View style={styles.container2}>
        <Text style={styles.text}>1. Is my Data secured?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>At our organization, safeguarding the privacy and confidentiality of our users' data is of utmost importance to us. As such, we have implemented rigorous measures to ensure that our users' information is protected at all times. Our commitment to maintaining the highest level of data security is reflected in our adherence to our privacy policy, which strictly governs the collection, use, and sharing of our users' data.

As part of this policy, any data submitted through our application is subjected to a thorough masking process, which utilizes the latest and most advanced security standards available. This ensures that any sensitive information remains inaccessible to unauthorized parties, and that our users' privacy is safeguarded at all times.

We understand the importance of data security and privacy in today's digital landscape, and we are fully committed to providing our users with the highest level of protection possible. Our comprehensive approach to data protection ensures that our users can rest assured that their information is safe and secure with us.</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'App related'} name={'keyboard-arrow-down'} onPress={() => setShowApp(!showApp)}/>
    {showApp && (
      <View style={styles.container2}>
        <Text style={styles.text}>1. Can I file a complaint with my Internal Committee using this App?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>This App currently does not have a database of Internal Committees. You can go through your organisation’s policy against sexual harassment to find out how to reach your Internal Committee.

In case you work in an establishment that does not have an Internal Committee constituted or your complaint is against your employer, you can use this App to file a complaint with your Local Committee.</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'How to contact'} name={'keyboard-arrow-down'} onPress={() => setShowContact(!showContact)}/>
    {showContact && (
      <View style={styles.container2}>
        <Text style={styles.text}>1. How can I connect to my Local Committee?</Text>
      <View style={styles.container}>
        <Text style={styles.text2}>Our organization, we take all complaints seriously and strive to provide our users with timely and effective resolution. After you submit a complaint form, our local committee will review the details provided by you and will contact you to discuss the issue further.

We understand that certain situations may require immediate attention, and we encourage you to reach out to us at our official email ID surakshachakra@myambar.org</Text>
      </View>
      </View>
    )}
    <View style={styles.last}></View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
   
    text:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        marginBottom:20,
      
    },
    text2:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    },
    container:{
        backgroundColor:'#009688',
        padding:20,
        borderRadius:10,
        marginBottom:20
    },
    container1:{
        backgroundColor:'#009688',
        flex:1,
        paddingVertical: windowHeight * 0.03,
        paddingHorizontal: windowWidth * 0.05,
    },
    container2:{
      backgroundColor:'#ffcb30',
      marginTop:-15,
      width: windowWidth - 40,
      padding:20,
  },
  last:{
    height:40
  }
})
export default FaqScreen