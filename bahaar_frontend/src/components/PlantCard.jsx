import React, { useEffect, useRef, useState } from "react";
import { PlantImageContainer, PlantInfoContainer, PlantNameInput, PlantWrapper, StyledButton, StyledButtonContent, StyledDelete, StyledEmptyImageContainer, StyledPlantInfo, StyledPlantInfoInput, StyledPlantName, StyledSelect, StyledTextarea } from "../style/style";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { MyButton } from "./MyButton";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { calculateAge } from "../utils/util";
import { fertilizerOptions, sunlightOptions, waterOptions } from "../utils/constantData";
import { useNavigate } from "react-router-dom";


export const PlantCard = ({ plant, gardenId, edit, plantAdded, refreshPlants, setNotification }) => {
    
    //console.log('GARDEN ID =', gardenId)

    const navigate = useNavigate();

    const [imagesrc, setImagesrc] = useState('');
    const fetchImage = async () => {
        try {
            const response = await axios.get(plant.imageUrl);
            const base64Image = `data:image/jpeg;base64,${response.data.data}`;
            setImagesrc(base64Image);
        }
        catch (e) {
            console.log(e);
        }
    };

    const plantNameRef = useRef(null);

    const hiddenFileInput = useRef(null);
    const [imageName, setImageName] = useState('');

    const [plantInput, setPlantInput] = useState({
        plantName: '',
        water: 'Select an option',
        sunlight: 'Select an option',
        fertilizer: 'Select an option',
        note: '',
        imageFile: ''
    })

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

    useEffect(() => {
        if(edit){
            setTimeout(() => {
                if (plantNameRef.current) {
                plantNameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Bring focus to the textarea
            }
            },10)
        }
        else{
            fetchImage()
        }
    }, [edit]);

    const handleSave = async () => {

        console.log("THIS IS THE DATA = ", plantInput, 'And this is the gerden id ', gardenId)
        try {
            const formData = new FormData();
            formData.append("image", plantInput.imageFile);
            formData.append("water", plantInput.water);
            formData.append("sunlight", plantInput.sunlight);
            formData.append("fertilizer", plantInput.fertilizer);
            formData.append("name", plantInput.plantName);
            formData.append("note", plantInput.note);
            formData.append("gardenId", gardenId);

            await axios.post('http://localhost:8080/addPlant', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            plantAdded(false);
            setTimeout(() => {
                setNotification({
                    show: true,
                    variant: 'success',
                    message: 'new plant added'
                });
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }, '500');
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleDelete = async () => {
        try{
           const res = await axios.delete(`http://localhost:8080/deleteAllPlant/${plant.name}/${gardenId}`);
           console.log("After res = ", res);
           refreshPlants(true);
           setNotification({
               show: true,
               variant: 'success',
               message: 'plant deleted'
           });
        }
        catch(e){
           console.log(e);
        }
   }

   const loadPlantDetails = (plant) => {
    navigate('/bahaar/plant', {state: { plant, image: imagesrc }})
}


    return (
        !edit ?
            <PlantWrapper onClick={() => loadPlantDetails(plant, imagesrc)}>
                <PlantImageContainer>
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} src={imagesrc} alt="Money Plant" />
                </PlantImageContainer>
                <PlantInfoContainer>
                    <StyledPlantName>{plant.name}</StyledPlantName>
                    <StyledPlantInfo>Age: {calculateAge(plant.addedOn)}</StyledPlantInfo>
                </PlantInfoContainer>
                <StyledDelete>
                    <DeleteIcon htmlColor="white" onClick={(e) => {
                            e.stopPropagation()
                            if(window.confirm(`This will delete all the entries for ${plant.name}, are you sure you want to delete it?`))
                            handleDelete();
                        }}/>
                </StyledDelete>
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
                <StyledTextarea maxLength={246} value={plantInput.note} onChange={(e) => setPlantInput({...plantInput, note: e.target.value})}/>
                <MyButton text={'Save'} Icon={<SaveIcon fontSize="medium" />} width={'120px'} action={handleSave} />
                <StyledDelete>
                    <DeleteIcon htmlColor="white" onClick={(e) => {
                            plantAdded(false)
                        }}/>
                </StyledDelete>
            </PlantWrapper>

    )
}