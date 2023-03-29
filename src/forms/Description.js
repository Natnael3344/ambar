import { View, Text,StyleSheet,TouchableOpacity,Alert,Button  } from 'react-native'
import React, { useState, useEffect } from 'react';
import CustomInput from '../components/CustomInput/CustomInput'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFS from 'react-native-fs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Sound from 'react-native-sound';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
 } from 'react-native-audio-recorder-player';
const audioRecorderPlayer = new AudioRecorderPlayer();
const Description = ({descriptionWarning,description,onDescriptionChange}) => {
  const discriptionFilled = !!description.trim();
  const [isRecording, setIsRecording] = useState(false);
  const [audioFilePath, setAudioFilePath] = useState('');
  const handleRecordStart = async () => {
    try {
      const filePath = await audioRecorderPlayer.startRecorder();
      setIsRecording(true);
      setAudioFilePath(filePath);
    } catch (error) {
      console.error(error);
    }
  };
 
  const handleRecordStop = async () => {
    try {
      const filePath = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      setAudioFilePath(filePath);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePlay = async () => {
    try {
      await audioRecorderPlayer.startPlayer(audioFilePath);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <View>
      {/* <Text style={styles.text}>Complaint Description</Text> */}
      <CustomInput height={130} placeholder={'Enter description...'} value={description} setValue={onDescriptionChange}/>
      {!discriptionFilled && <Text style={styles.warningText}>{descriptionWarning}</Text>}
      <Text style={styles.text2}>or</Text>
      <TouchableOpacity   onPressIn={handleRecordStart}
  onPressOut={handleRecordStop}><MaterialCommunityIcons name={'microphone-plus'} size={40} color='white' style={styles.icon}/></TouchableOpacity >
          <Text style={styles.text1}>Add audio recording</Text>
          <View>
      {audioFilePath && <TouchableOpacity onPress={handlePlay}>
        <Text>Play</Text>
        </TouchableOpacity>
        }
      
    </View> 
                    
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
    text1:{
      color:'white',
      alignSelf:'center',
      marginRight:20,
      fontWeight:'bold'
     },
     text2:{
      fontSize: 20,
      fontWeight:'bold',
      color:'white',
      marginTop:20,
      marginBottom:20,
      alignSelf:'center'
     },
     icon:{
      alignSelf:'center',
    },
    warningText:{
      color:'red'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    recordButtonContainer: {
      backgroundColor: 'red',
      padding: 20,
      borderRadius: 50,
      margin: 20,
    },
    cancelButtonContainer: {
      backgroundColor: 'red',
      padding: 20,
      borderRadius: 50,
      margin: 20,
      position: 'absolute',
      top: 0,
      right: 0,
    },
    timer: {
      color: 'white',
      fontSize: 20,
    },
    audioPlayerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 20,
    },
    audioFilePath: {
      color: 'white',
      marginLeft: 10,
    },
  }
)
export default Description