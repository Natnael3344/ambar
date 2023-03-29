import React, { useState,useRef } from 'react';
import Stepper from "react-native-stepper-ui";
import { View, Alert, Text,ScrollView,StyleSheet } from "react-native";
import DetailsOfVictim from "../forms/DetailsOfVictim";
import AccusedInformation from "../forms/AccusedInformation";
import Description from "../forms/Description";
import Witness from "../forms/Witness";
import Evidence from "../forms/Evidence";
import StepIndicator from 'react-native-step-indicator';
import { useNavigation } from '@react-navigation/native';
import useComplaintState from '../utils/useComplaintState';
import {handleNameChange,handleAgeChange,handlePincodeChange,handleOccupationChange,handleReNameChange,handlePhoneChange,handleAddressChange,handleKnowChange, handleNext,handleRespondentNext, handleDescriptionChange,handleDescriptionNext, handleWitnessNext, handleEvidenceNext } from '../utils/useComplaintFunctions';
import { Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';

const Complaint = () => {
  const labels = ["Personal details","Respondent details","Description","Witness","Evidence"];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#ffcb30',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#ffffff',
    labelSize: 13,
    currentStepLabelColor: '#ffcb30'
  }
 
    const navigation = useNavigation();
    const { active, setActive, name, setName, age, setAge,pincode, setPincode, occupation, setOccupation, nameWarning, setNameWarning, ageWarning, setAgeWarning,pincodeWarning, setPincodeWarning,occupationWarning, setOccupationWarning,reName, setReName,phone, setPhone,address, setAddress,know, setKnow,reNameWarning, setReNameWarning,phoneWarning, setPhoneWarning,addressWarning, setAddressWarning,knowWarning, setKnowWarning,description, setDescription,descriptionWarning, setDescriptionWarning,next,setNext} = useComplaintState();
    return (
      console.log(active),
      console.log(next),
      console.log(name),
        <View style={{ padding:20, backgroundColor:'#009688',flex:1}}>
            <ScrollView>
            <StepIndicator
         customStyles={customStyles}
         currentPosition={active}
         labels={labels}
         />
         {active==0 && (
           <DetailsOfVictim
           name={name}
         age={age}
         pincode={pincode}
         occupation={occupation}
         onNameChange={(text) => handleNameChange(text, setName)}
         onAgeChange={(text) => handleAgeChange(text, setAge)}
         onPincodeChange={(text) => handlePincodeChange(text, setPincode)}
         onOccupationChange={(text) => handleOccupationChange(text, setOccupation)}
         nameWarning={nameWarning}
         ageWarning={ageWarning}
         pincodeWarning={pincodeWarning}
         occupationWarning={occupationWarning}
           
           />
         )}
         {active==1 &&(
            <AccusedInformation
            reName={reName}
          phone={phone}
          address={address}
          know={know}
          onReNameChange={(text) => handleReNameChange(text, setReName)}
          onPhoneChange={(text) => handlePhoneChange(text, setPhone)}
          onAddressChange={(text) => handleAddressChange(text, setAddress)}
          onKnowChange={(text) => handleKnowChange(text, setKnow)}
          reNameWarning={reNameWarning}
          phoneWarning={phoneWarning}
          addressWarning={addressWarning}
          knowWarning={knowWarning}
            />
         )}
         {
          active==2 &&(
            <Description
              description={description}
              onDescriptionChange={(text) => handleDescriptionChange(text, setDescription)}
              descriptionWarning={descriptionWarning}
              />
          )
         }
         {
          active==3 &&(
            <Witness/>
          )
         }
         {
          active==4 &&(
            <Evidence/>
          )
         }
         <View style={{flexDirection:'row', marginTop:20}}>
          {active!=0&&(<Button style={{backgroundColor:'#a1a1a1',borderRadius:5,marginRight:20}}
          onPress={() => {
            if(active==1){
              setName(name); setAge(age); setPincode(pincode); setOccupation(occupation);
            }
            if(active==2){
              setReName(reName); setPhone(phone); setAddress(address); setKnow(know);
            }
            if(active==3){
              setDescription(description);
            }
            setActive((p) => p - 1);
          }}
          >
            <Text style={{color:'black'}}>Back</Text>
            </Button>)}
            {active!=4&&(<Button style={{backgroundColor:'#00faa6',borderRadius:5}}
             onPress={active==0?()=>handleNext(name, setNameWarning,age,setAgeWarning,pincode,setPincodeWarning,occupation,setOccupationWarning, setActive,setNext):active==1?()=>handleRespondentNext(reName,setReNameWarning,phone,setPhoneWarning,address,setAddressWarning,know,setKnowWarning,setActive,setNext):active==2?()=>handleDescriptionNext(description,setDescriptionWarning,setActive,setNext):active==3?()=> handleWitnessNext(setActive,setNext):()=>handleEvidenceNext(setActive,setNext)}
            >
            <Text style={{color:'black'}}>Next</Text>
            </Button>)}
            {active==4&&(
              <Button style={{backgroundColor:'#00faa6',borderRadius:5}}
              onPress={() => Alert.alert(
                'Submitted successfully',
                "Submitted successfully with Case number STA-DIS-2023-0001",
                [
                  { text: 'OK', onPress: () => {navigation.navigate("home")}}
                ],
                { cancelable: false,  }
              )}
             >
             <Text style={{color:'black'}}>Finish</Text>
             </Button>
            )}
         </View>
          </ScrollView>
        </View>
      );
}


export default Complaint