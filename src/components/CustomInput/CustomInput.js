import { View, Text,TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder,height,keyboardType,maxLength, ref}) => {
  return (
    <View style={styles.container}>
      <TextInput
      onChangeText={setValue}
        placeholder={placeholder}
        style={[styles.input,height && { height }, ]}
        keyboardType = {keyboardType}
        value={value}
        placeholderTextColor='#c2cad2'
        maxLength={maxLength}
        ref={ref}
      />
    </View>
  )
}
const styles= StyleSheet.create(
    {
        container:{
            backgroundColor:'white',
            width:'100%',
            borderColor:'#00faa6',
            borderWidth:1,
            borderRadius:5,
            alignSelf:'center',
            marginTop:20
        },
        input:{
            fontWeight:'bold',
            marginLeft:20,
            color:'black'
        }
    }
);
export default CustomInput