import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput/CustomInput'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Evidence = () => {
  return (
    <View>
      {/* <Text style={styles.text}>Attach Evidence</Text> */}
      <CustomInput height={130} placeholder={'Enter any additonal detail...'}/>
      <View style={styles.container}>
        <View>
          <View style={styles.container1}><MaterialIcons name={'add-photo-alternate'} size={30} color='white' style={styles.icon}/></View>
          <Text style={styles.text1}>Add photo</Text>
        </View>
        <View>
          <View style={styles.container1}><MaterialCommunityIcons name={'video-plus-outline'} size={30} color='white' style={styles.icon}/></View>
          <Text style={styles.text1}>Add video</Text>
        </View>
        <View>
          <View style={styles.container1}><MaterialCommunityIcons name={'microphone-plus'} size={30} color='white' style={styles.icon}/></View>
          <Text style={styles.text1}>Add audio</Text>
        </View>
        <View>
          <View style={styles.container1}><AntDesign name={'addfile'} size={30} color='white' style={styles.icon}/></View>
          <Text style={styles.text1}>Add file</Text>
        </View>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-evenly'
    },
    container1:{
      height:50,
      width:50,
      backgroundColor:'#ffcb30',
      borderRadius:25,
      justifyContent:'center',
      marginRight:20,
      alignSelf:"center"
      
  },
  icon:{
    alignSelf:'center',
  },
    text:{
      fontSize:24,
       fontWeight:'bold',
       color:'white',
       marginTop:20
   },
   text1:{
    color:'white',
    alignSelf:'center',
    marginRight:20,
   },
   
})
export default Evidence