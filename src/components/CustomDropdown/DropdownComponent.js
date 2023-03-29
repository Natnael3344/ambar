import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DropdownComponent = ({data,item}) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: '#00faa6' }]}>
            
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#00faa6' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          itemTextStyle={styles.itemTextStyle}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select '+item : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
            marginTop:20
    },
    dropdown: {
      height: 50,
      width:'100%',
      borderColor:'#00faa6',
      borderWidth: 1,
      borderRadius: 5,
      paddingRight:8
    },
    
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      top: 8,
      zIndex: 999,
      fontSize: 14,
    },
    placeholderStyle: {
      fontWeight:'bold',
      color:'#c2cad2',
      marginLeft:20
    },
    selectedTextStyle: {
      fontSize: 16,
      color:'black',
      marginLeft:20
    },
    
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color:'black'
    },
    itemTextStyle:{
      color:'black'
    }
  });