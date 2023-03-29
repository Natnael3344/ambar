import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput/CustomInput'

const AccusedInformation = ({reNameWarning, phoneWarning, addressWarning, knowWarning,reName, phone, address, know,onReNameChange, onPhoneChange, onAddressChange, onKnowChange}) => {
  const reNameFilled = !!reName.trim();
  const phoneFilled = !!phone.trim();
  const addressFilled = !!address.trim();
  const knowFilled = !!know.trim();
  return (
    <View>
      {/* <Text style={styles.text}>Respondent Details</Text> */}
      <CustomInput placeholder={'Enter respondent full name'} value={reName} setValue={onReNameChange}/>
      {!reNameFilled && <Text style={styles.warningText}>{reNameWarning}</Text>}
      <CustomInput maxLength={10} keyboardType={'numeric'} placeholder={'Enter respondent phone number'} value={phone} setValue={onPhoneChange}/>
      {!phoneFilled && <Text style={styles.warningText}>{phoneWarning}</Text>}
      <CustomInput placeholder={'Enter respondent address'} value={address} setValue={onAddressChange}/> 
      {!addressFilled && <Text style={styles.warningText}>{addressWarning}</Text>}
      <CustomInput placeholder={'How do you know the respondent?'} value={know} setValue={onKnowChange}/> 
      {!knowFilled && <Text style={styles.warningText}>{knowWarning}</Text>}
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
export default AccusedInformation