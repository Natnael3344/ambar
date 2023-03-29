import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState,useRef } from 'react';
import CustomInput from '../components/CustomInput/CustomInput'
import DropdownComponent from '../components/CustomDropdown/DropdownComponent'

const DetailsOfVictim = ({nameWarning, ageWarning, pincodeWarning, occupationWarning,name, age, pincode, occupation,onNameChange, onAgeChange, onPincodeChange, onOccupationChange}) => {
  const nameFilled = !!name.trim();
  const ageFilled = !!age.trim();
  const pincodeFilled = !!pincode.trim();
  const occupationFilled = !!occupation.trim();
  
  return (
    <View>
      {/* <Text style={styles.text}>Personal Details</Text> */}
      <CustomInput placeholder={'Enter name'} maxLength={30} value={name} setValue={onNameChange}/>
      {!nameFilled && <Text style={styles.warningText}>{nameWarning}</Text>}
      <CustomInput placeholder={'Enter age'} maxLength={2} keyboardType={'numeric'} value={age}  setValue={onAgeChange}/>
      {!ageFilled && <Text style={styles.warningText}>{ageWarning}</Text>}
      <CustomInput placeholder={'Enter pincode'} maxLength={6} keyboardType={'numeric'} value={pincode}  setValue={onPincodeChange}/>
      {!pincodeFilled && <Text style={styles.warningText}>{pincodeWarning}</Text>}
      <CustomInput placeholder={'Enter occupation'} value={occupation}  setValue={onOccupationChange}/>
      {!occupationFilled && <Text style={styles.warningText}>{occupationWarning}</Text>}
       </View>
  )
}
const styles=StyleSheet.create(
  {
    text:{
       fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginTop:20
    },
    warningText:{
      color:'red'
    }
  }
)
export default DetailsOfVictim