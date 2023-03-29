/// Details of victim

const handleNameChange = (text, setName) => {
    setName(text);
  };
  const handleAgeChange = (text,setAge) => {
    setAge(text);
  };

  const handlePincodeChange = (text,setPincode) => {
    setPincode(text);
  };

  const handleOccupationChange = (text,setOccupation) => {
    setOccupation(text);
  };

  const handleNext = (name, setNameWarning,age,setAgeWarning,pincode,setPincodeWarning,occupation,setOccupationWarning, setActive,setNext) => {
    if (!name) {
        setNameWarning('Please enter name');
      }else{
        setNameWarning('');
      }

      if (!age) {
        setAgeWarning('Please enter age');
      }else{
        setAgeWarning('');
      }
      if (!pincode) {
        setPincodeWarning('Please enter pincode');
      }else{
        setPincodeWarning('');
      }
      if (!occupation) {
        
        setOccupationWarning('Please enter occupation');
      }else{
        setOccupationWarning('');
      }
      if(name&&age&&pincode&&occupation){
        setNext(true);
        setActive((p) => p + 1);
        
      }
      else{
        setNext(false);
      }
      
  };

  /// Respondent 

  const handleReNameChange = (text,setReName) => {
    setReName(text);
  };

  const handlePhoneChange = (text,setPhone) => {
    setPhone(text);
  };

  const handleAddressChange = (text,setAddress) => {
    setAddress(text);
  };

  const handleKnowChange = (text,setKnow) => {
    setKnow(text);
  };

  const handleRespondentNext = (reName,setReNameWarning,phone,setPhoneWarning,address,setAddressWarning,know,setKnowWarning,setActive,setNext) => {
    if (!reName) {
      setReNameWarning('Please enter respondent name');
    }else{
      setReNameWarning('');
    }

    if (!phone) {
      setPhoneWarning('Please enter valid phone number');
    }else{
      setPhoneWarning('');
    }

    if (phone.length < 10) {
      setPhoneWarning('Please enter valid phone number');
    }else{
      setPhoneWarning('');
    }
    if (!address) {
      setAddressWarning('Please enter address');
    }else{
      setAddressWarning('');
    }
    if (!know) {
      
      setKnowWarning('Please enter this field');
    }else{
      setKnowWarning('');
    }
    if(reName&&address&&know&&phone){
        setActive((p) => p + 1);
        setNext(true);
    }
    else{
        setNext(false);
      }
   
  };

  /// Description
  const handleDescriptionChange = (text, setDescription) => {
    setDescription(text);
  };
  
  const handleDescriptionNext = (description,setDescriptionWarning,setActive,setNext) => {
    if (!description) {
      setDescriptionWarning('Please enter description');
    }else{
      setDescriptionWarning('');
    }
    if(description){
        setActive((p) => p + 1);
        setNext(true);
    }
    else{
        setNext(false);
      }
   
  };
  
  /// Witness
  const handleWitnessNext = (setActive,setNext) => {
    setActive((p) => p + 1);
    setNext(true);
  };
  

  /// Evidence

  const handleEvidenceNext = (setActive,setNext) => {
    setActive((p) => p + 1);
    setNext(true);
};

  export { handleNameChange,handleAgeChange,handlePincodeChange,handleOccupationChange,handleReNameChange,handlePhoneChange,handleAddressChange,handleKnowChange, handleNext,handleRespondentNext, handleDescriptionChange,handleDescriptionNext, handleWitnessNext, handleEvidenceNext };