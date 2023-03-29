import { View, Text,StyleSheet,FlatList, ScrollView  } from 'react-native'
import { useState } from 'react';
import CustomInput from '../components/CustomInput/CustomInput'
import { Button } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Witness = () => {
  const [active, setActive] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameWarning, setNameWarning] = useState(false);
  const [phoneWarning, setPhoneWarning] = useState(false);
  const [witnesses, setWitnesses] = useState([]);

  
  const handleDeleteWitness = (index) => {
    setActive((p) => p - 1);
    const updatedWitnesses = [...witnesses];
    updatedWitnesses.splice(index, 1);
    setWitnesses(updatedWitnesses);
  };

  const renderWitnessItem = ({ item, index }) => (
    <View style={styles.witnessItem}>
      <Text style={styles.witnessName}>{item.name}</Text>
      <Text style={styles.witnessPhone}>{item.phone}</Text>
      <Button  onPress={() => handleDeleteWitness(index)} >
      <MaterialIcons name={'cancel'} size={22} color='white' />
      </Button>
    </View>
  );
  return (
    <View>
      {/* <Text style={styles.text}>Witness</Text> */}
      <CustomInput value={name} setValue={setName} placeholder={'Enter name'}/>
      {nameWarning && <Text style={styles.warningText}>Please enter name</Text>}
      <CustomInput maxLength={10} keyboardType={'numeric'} value={phone} setValue={setPhone} placeholder={'Enter phone number'}/>
      {phoneWarning && <Text style={styles.warningText}>Please enter valid phone number</Text>}
     {active!=3&&(<Button style={styles.button}  onPress={()=>{
      if (!name) {
        setNameWarning(true);
      }
      if (!phone|| phone.length < 10) {
        setPhoneWarning(true);
      }
      if(name&&phone&&phone.length==10){
        setActive((p) => p + 1);
        setName('');
        setPhone('');
        setNameWarning(false);
        setPhoneWarning(false);
        const newWitness = { name, phone };
        setWitnesses([...witnesses, newWitness]);
      }
      
     }}>
        <Text style={styles.text1}>+ Add</Text>
      </Button>)}
      <ScrollView horizontal={true}
      contentContainerStyle={{width: '100%', height: '100%'}}>
      <FlatList
        data={witnesses}
        renderItem={renderWitnessItem}
        keyExtractor={(item, index) => index.toString()}
        
      />
      </ScrollView>
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
    },
    button:{
      backgroundColor:'#ffcb30',
      width:80,
      height:40,
      alignSelf:'flex-end',
      justifyContent:'center',
      borderRadius:5,
      marginTop:20,
      marginBottom:20
    },
    text1:{
      fontSize:17,
      fontWeight:'bold',
      color:'white'
    },
    witnessItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      
         
    },
    witnessName: {
      flex:1,
      fontSize: 16,
      fontWeight: 'bold',
      color:'white'
    },
    witnessPhone: {
      flex:1,
      fontSize: 16,
      color:'white'
    },
  }
)
export default Witness