import { useState } from 'react';

const useComplaintState = () => {
    const [active, setActive] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [pincode, setPincode] = useState('');
    const [occupation, setOccupation] = useState('');
    const [nameWarning, setNameWarning] = useState('');
    const [ageWarning, setAgeWarning] = useState('');
    const [pincodeWarning, setPincodeWarning] = useState('');
    const [occupationWarning, setOccupationWarning] = useState('');
    const [reName, setReName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [know, setKnow] = useState('');
    const [reNameWarning, setReNameWarning] = useState('');
    const [phoneWarning, setPhoneWarning] = useState('');
    const [addressWarning, setAddressWarning] = useState('');
    const [knowWarning, setKnowWarning] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionWarning, setDescriptionWarning] = useState('');
    const [next,setNext]=useState(false);
  return {active, setActive, name, setName, age, setAge,pincode, setPincode, occupation, setOccupation, nameWarning, setNameWarning, ageWarning, setAgeWarning,pincodeWarning, setPincodeWarning,occupationWarning, setOccupationWarning,reName, setReName,phone, setPhone,address, setAddress,know, setKnow,reNameWarning, setReNameWarning,phoneWarning, setPhoneWarning,addressWarning, setAddressWarning,knowWarning, setKnowWarning,description, setDescription,descriptionWarning, setDescriptionWarning,next,setNext};
};

export default useComplaintState;