import { View, Text,Pressable,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('window');
const CustomPressable = ({onPress,text,text1,name, backgroundColor}) => {
  return (
        <Pressable onPress={onPress} style={[styles.button,backgroundColor && { backgroundColor }]}>
      <View style={styles.container}>
        <View style={styles.container1}>
        <Text style={styles.text}>
          {text}
        </Text>
        <Text style={styles.text1}>
      {text1}
      </Text>
        </View>
        <MaterialIcons name={name} size={60} color='white'/>
      </View>
      
    </Pressable>
    
    
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffcb30',
    borderRadius: 20,
    width: width - 40,
    height: height * 0.13,
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    justifyContent:'center'
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    alignSelf:'flex-start'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  container1: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent:'center'
  },
  text1: {
    color: 'white',
  },
});
export default CustomPressable