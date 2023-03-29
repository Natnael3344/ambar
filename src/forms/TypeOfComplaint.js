import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import DropdownComponent from '../components/CustomDropdown/DropdownComponent'

const TypeOfComplaint = () => {
  return (
    <View>
      {/* <Text style={styles.text}>Type of Complaint</Text> */}
      <DropdownComponent item={'type of complaint'}
      data={[
        {label:'Molestation',value:'1'},
        {label:'Bad remarks',value:'2'},
        {label:'Inappropriate behavior',value:'3'},
        {label:'Demand',value:'4'},
        {label:'Rape',value:'5'},
      ]}
      />
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
export default TypeOfComplaint