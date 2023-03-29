import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,backgroundColor,color}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button,backgroundColor && { backgroundColor }]}>
      <Text style={[styles.text, color && {color}]}>
      {text}
      </Text>
    </Pressable>
  )
}
const styles=StyleSheet.create(
    {
        button:{
            marginTop:30,
            height:50,
            width:"100%",
            borderRadius:5, 
            backgroundColor:'#00faa6',
            justifyContent:'center',
            borderColor:'#00faa6',
            borderWidth:1
        },
        text:{
            color:'black', 
            fontSize:20, 
            fontWeight:'bold',
            alignSelf:'center',
        },
    }
)
export default CustomButton