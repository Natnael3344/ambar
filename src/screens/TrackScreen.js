import { ScrollView,View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomCard from '../components/CustomCard/CustomCard'

const TrackScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>February 3, 2023</Text>
      <CustomCard text={'Axysysxh5455'} text1={'Priya Ashish'} text2={'Female'} text3={'20'} text4={'Solved'} color='green'/>
      <Text style={styles.text}>February 3, 2023</Text>
      <CustomCard text={'Axysysxh5455'} text1={'Priya Ashish'} text2={'Female'} text3={'18'} text4={'Pending'} color='yellow'/>
      <Text style={styles.text}>February 3, 2023</Text>
      <CustomCard text={'Axysysxh5455'} text1={'Priya Ashish'} text2={'Female'} text3={'22'} text4={'Rejected'} color='red'/>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'#009688'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginBottom:20
    }
})
export default TrackScreen