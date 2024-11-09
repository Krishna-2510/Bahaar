import React, { useEffect, useRef, useState } from "react";
import { PlantImageContainer, PlantInfoContainer, PlantNameInput, PlantWrapper, StyledButton, StyledButtonContent, StyledEmptyImageContainer, StyledPlantInfo, StyledPlantInfoInput, StyledPlantName, StyledSelect } from "../style/style";
import AddIcon from '@mui/icons-material/Add';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import moneyPlantImage from '../images/money-plant.jpg'; // Adjust the path based on your project structure
import { MyButton } from "./MyButton";
import SaveIcon from '@mui/icons-material/Save';


export const PlantCard = ({ plant, edit }) => {

    useEffect(() => {
        if(edit){
            if (plantNameRef.current) {
                
                plantNameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Bring focus to the textarea
            }
        }
    }, edit);

    const plantNameRef = useRef(null);

    const hiddenFileInput = useRef(null);
    const [imageName, setImageName] = useState('');

    const [plantInput, setPlantInput] = useState({
        plantName: '',
        water: 'Select an option',
        sunlight: 'Select an option',
        fertilizer: 'Select an option',
        note: ''
    })

    const waterOptions = [
        { value: 'daily', label: 'Daily' },
        { value: 'twiceAWeek', label: 'Twice a week' },
        { value: 'weekly', label: 'Weeklly' },
        { value: 'biweekly', label: 'Biweekly' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'onlyWhenDry', label: 'Only when dry' },
    ];

    const sunlightOptions = [
        { value: 'fullSun', label: 'Full sun' },
        { value: 'partialSun', label: 'Partial sun' },
        { value: 'partialShade', label: 'Partial shade' },
        { value: 'fullShade', label: 'Full shade' },
        { value: 'indirectSunlight', label: 'Indirect sunlight' },
        { value: 'lowLight', label: 'Low light' },
    ];

    const fertilizerOptions = [
        { value: 'weekly', label: 'Weeklly' },
        { value: 'biweekly', label: 'Biweekly' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'onlyWhenNeeded', label: 'Only when needed' },
    ];

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        if (fileUploaded) {
            setImageName(fileUploaded.name.substr(0, 6) + '...');
            setPlantInput(prevState => ({ ...prevState, imageFile: fileUploaded }));
        }
    };

    return (
        !edit ?
            <PlantWrapper>
                <PlantImageContainer>
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} src={moneyPlantImage} alt="Money Plant" />
                </PlantImageContainer>
                <PlantInfoContainer>
                    <StyledPlantName>Money plant</StyledPlantName>
                    <StyledPlantInfo>Age: 9 months</StyledPlantInfo>
                </PlantInfoContainer>
            </PlantWrapper>
            :
            <PlantWrapper>
                <StyledEmptyImageContainer>
                <MyButton text={imageName ? imageName : 'Add image'} Icon={<InsertPhotoIcon fontSize="medium" />} width={'150px'} action={handleClick}></MyButton>
                <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{ display: 'none' }} />
                </StyledEmptyImageContainer>
                <PlantNameInput ref={plantNameRef} type="text" placeholder="Plant name" value={plantInput.plantName} onChange={(e) => setPlantInput({...plantInput, plantName: e.target.value})}></PlantNameInput>
                <StyledPlantInfoInput>
                    <StyledPlantInfo>Water:</StyledPlantInfo>
                    <StyledSelect value={plantInput.water} onChange={(e) => setPlantInput({...plantInput, water: e.target.value})} selected={plantInput.water}>
                        <option value="Select an option" disabled>Select an option</option>
                        {waterOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </StyledSelect>
                </StyledPlantInfoInput>
                <StyledPlantInfoInput>
                    <StyledPlantInfo>Sunlight:</StyledPlantInfo>
                    <StyledSelect value={plantInput.sunlight} onChange={(e) => setPlantInput({...plantInput, sunlight: e.target.value})} selected={plantInput.sunlight}>
                        <option value="Select an option" disabled>Select an option</option>
                        {sunlightOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </StyledSelect>
                </StyledPlantInfoInput>
                <StyledPlantInfoInput>
                    <StyledPlantInfo>Fertilizer:</StyledPlantInfo>
                    <StyledSelect value={plantInput.fertilizer} onChange={(e) => setPlantInput({...plantInput, fertilizer: e.target.value})} selected={plantInput.fertilizer}>
                        <option value="Select an option" disabled>Select an option</option>
                        {fertilizerOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </StyledSelect>
                </StyledPlantInfoInput>
                <StyledPlantInfo>Note:</StyledPlantInfo>
                <textarea style={{background: '#535353', margin: '0.5rem 1.5rem', color: 'white', fontSize: '1.4rem', minHeight:'15rem', width: '85%', borderRadius: '15px', padding: '10px', resize: 'none', fontFamily: 'Jaldi' }}>
                </textarea>
                <MyButton text={'Save'} Icon={<SaveIcon fontSize="medium" />} width={'120px'} action={() => {}} />
            </PlantWrapper>

    )
}