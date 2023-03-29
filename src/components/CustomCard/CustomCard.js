import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CustomCard = ({text,text1,text2,text3,text4,color}) => {
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <Text style={styles.text}>Case number: </Text>
            <Text style={styles.text1}>{text}</Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text}>Name: </Text>
            <Text style={styles.text1}>{text1}</Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text}>Gender: </Text>
            <Text style={styles.text1}>{text2}</Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text}>Age: </Text>
            <Text style={styles.text1}>{text3}</Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text}>Status: </Text>
            <Text style={StyleSheet.create(color && {color})}>{text4}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#ffcb30',
      shadowColor: '#000000',  
      shadowOffset: { width: 2, height: 6 },
      shadowRadius: 6,
      shadowOpacity: 0.2,
      elevation: 15,
      padding:20,
      marginBottom:20,
      width: windowWidth - 40,
      alignSelf: 'center',
      borderRadius: 20,
    },
    container1:{
      flexDirection:'row',
      alignItems:'center'
    },
    text:{
      color:'white',
      fontWeight:'bold',
      fontSize: 18,
    },
    text1:{
      color:"white",
      fontSize: 16,
    },
  });
export default CustomCard