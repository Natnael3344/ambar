import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput/CustomInput'
import DropdownComponent from '../components/CustomDropdown/DropdownComponent'
const WorkPlace = () => {
    return (
        <View>
          {/* <Text style={styles.text}>Workplace Details</Text> */}
          <CustomInput placeholder={'Enter workplace name'}/>
          <DropdownComponent item={'type of workplace'}
      data={[
        {label:'Informal sector less than 10 employees',value:'1'},
        {label:'Informal sector more than 10 employees',value:'2'},
        {label:'Formal sector less than 10 employees',value:'3'},
        {label:'Formal sector more than 10 employees',value:'4'},
      ]}
      />
          <CustomInput placeholder={'Enter workplace email'}/>
          <CustomInput placeholder={'Enter position in workplace'}/>
          <CustomInput placeholder={'Enter workplace mobile/telephone'}/>
          <CustomInput placeholder={'Enter months of workplace'}/>
          <CustomInput placeholder={'Enter workplace address'}/>
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
      }
    }
  )
export default WorkPlace