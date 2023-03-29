import { View, Text,StyleSheet,ScrollView, Dimensions} from 'react-native'
import React, { useState } from 'react';
import CustomPressable from '../components/CustomButton/CustomPressable';
const windowWidth = Dimensions.get('window').width;
const AboutScreen = () => {
  const [showSuraksha , setShowSuraksha ] = useState(false);
  const [showMyAmbar, setShowMyAmbar] = useState(false);
  const [showVodafone , setShowVodafone ] = useState(false);
  const [showNASSCOM , setShowNASSCOM ] = useState(false);
  const [showMartha , setShowMartha ] = useState(false);
  return (
    <ScrollView style={styles.container}>
    <CustomPressable  text={'About MyAmbar Suraksha Chakra'} text1={'Read more'} name={'keyboard-arrow-down'} onPress={() => setShowSuraksha(!showSuraksha)}/>
    {showSuraksha && (
      <View style={styles.container2}>
       <View style={styles.container1}>
        <Text style={styles.text2}>MyAmbar Suraksha Chakra is an initiative of the Martha Farrell Foundation, NASSCOM Foundation and the Vodafone Idea Foundation, to create an online platform for women to be able to file complaints of sexual harassment at workplace with their Local Committees with ease. The App also supports Local Committees to keep in touch with aggrieved women, and manage their complaints in a time-bound manner, as stipulated in the law.</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'About MyAmbar'} text1={'Read more'} name={'keyboard-arrow-down'} onPress={() => setShowMyAmbar(!showMyAmbar)}/>
    {showMyAmbar && (
      <View style={styles.container2}>
       <View style={styles.container1}>
        <Text style={styles.text2}>My Ambar has been designed in partnership with Sayfty Trust and UN women for the safety and empowerment of women in India. My Ambar gives women access to important helpline numbers and service providers across the country at a click of a button to avail of legal and counseling services. It also features a step-by-step risk assessment tool to guide them in various ways of dealing with their current status. The push-based SOS button sends an alarm to specific numbers entered at the time of registrations, in case of an emergency.</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'About Vodafone Idea Foundation'} text1={'Read more'} name={'keyboard-arrow-down'} onPress={() => setShowVodafone(!showVodafone)}/>
    {showVodafone && (
      <View style={styles.container2}>
       <View style={styles.container1}>
        <Text style={styles.text2}>Vodafone Idea Foundation – the CSR arm of Vodafone Idea Limited-India’s Leading telecom operator, aims to connect and inspire every Indian to build a better tomorrow by leveraging technology and initiating purposeful innovation to catalyze social prosperity, digital literacy, and inclusivity.


We at Vodafone Idea Foundation are committed to developing communities where we operate in. Our deep rooted commitment to social sector is clearly stated in our vision statement “to connect and inspire every Indian to build a better tomorrow’ and further refined in our mission statement towards community ‘Be the most respected company by leveraging technology and purposeful innovation to catalyse social prosperity, digital literacy and inclusivity’ Over the years, erstwhile Vodafone Foundation and erstwhile Idea CSR have both positively engaged with a wide variety of stakeholders such as central and state government, policy makers, civil society organizations, research academic organizations, students, media etc.

Our current portfolio focusses on Vidya (Education), Swasth (Healthcare), Aamdani (Livelihoods and Women Empowerment), and we have transformative projects in each of these domains that offer the potential to improve wellbeing of millions of Indians, while showcasing innovative use of mobile technology and development approaches.
We are committed to developing the communities where we operate, to impact millions of lives positively. We engage with a wide variety of stakeholders such as central and state governments, policymakers, civil society organizations, research academic institutions, students, and media to achieve our vision.
For more information, please visit - Vodafone Idea Foundation – An initiative to change India with Mobile Technology (myvi.in).</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'About NASSCOM Foundation'} text1={'Read more'} name={'keyboard-arrow-down'} onPress={() => setShowNASSCOM(!showNASSCOM)}/>
    {showNASSCOM && (
      <View style={styles.container2}>
       <View style={styles.container1}>
        <Text style={styles.text2}>Since its establishment in 2001, NASSCOM Foundation has been witness to the transformative power of technology for over two decades. As a neutral, not-for-profit organization, we represent the Indian Tech Industry and are an integral part of the NASSCOM ecosystem. Although technology and the IT-BPM industry have played a fundamental role in the development of the nation, it has not impacted the bottom of the pyramid and remains exclusive. However, the untapped potential of this huge industry presents an opportunity to make sustainable development a reality, which we aim to leverage.


As the social arm of the industry body NASSCOM, NASSCOM Foundation aims to tap this opportunity to meet the demand for sustainable development. Our work is as expansive and evolutionary as the potential that technology and corporate India entail. We draw strength from our strong association with our four major stakeholders - NASSCOM, NGOs, emerging social enterprises, and the Government. By leveraging the capabilities of IT-BPM member companies of NASSCOM along with emerging social enterprises, we aim to meet the technology needs of non-profits and underserved communities across India, with continuous support from the Government.

Our non-profit has a vision to empower lives through technology and work towards creating a truly inclusive India.</Text>
      </View>
      </View>
    )}
    <CustomPressable  text={'About Martha Farrell Foundation'} text1={'Read more'} name={'keyboard-arrow-down'} onPress={() => setShowMartha(!showMartha)}/>
    {showMartha && (
      <View style={styles.container2}>
       <View style={styles.container1}>
        <Text style={styles.text2}>Martha Farrell qFoundation works towards creating safe workplaces for all, through the elimination of sexual and gender-based violence in the professional sphere and meaningful compliance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.


Through its Making Workplaces Safe program, the Foundation empowers individuals working in India’s formal and informal workforce to identify and raise their voices against gender-based violence, and empowers private and public institutions, including Internal Committees and Local Committees to provide holistic systemic responses for the prevention, prohibition and redressal of sexual harassment at workplace.

Our mission is aligned with the words of Dr. Martha Farrell, a passionate civil society practitioner, who envisioned a world where every woman could work in safe, dignified circumstances without fear of violence.

We’re present in over 25 states in the country and over 15 countries globally through our work on prevention of sexual harassment at workplace and have trained hundreds of institutions worked in more than 20 districts of India to create a culture of meaningful compliance with the 2013 Act. Find out more here.</Text>
      </View>
      </View>
    )}
  </ScrollView>
  )
}
const styles=StyleSheet.create({
    
    text:{
     color:'white',
     fontWeight:'bold',
     fontSize:17
    },
    container:{
     padding:20,
     backgroundColor:'#009688',
     
    },
    container1:{
      backgroundColor:'#009688',
      padding:20,
      borderRadius:10,
      marginBottom:20
  },
    container2:{
      backgroundColor:'#ffcb30',
      marginTop:-15,
      width: windowWidth - 40,
      padding:20,
  },
  text2:{
    color:'white',
    fontWeight:'bold',
    fontSize:15
},
 })
export default AboutScreen