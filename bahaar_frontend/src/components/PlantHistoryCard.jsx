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


export const PlantHistoryCard = ({ plant, isActive, onClick, gardenId, edit, plantAdded, refreshPlants, setNotification }) => {

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

    useEffect(() => {
            fetchImage();
    }, []);

//     const handleSave = async () => {

//         console.log("THIS IS THE DATA = ", plantInput, 'And this is the gerden id ', gardenId)
//         try {
//             const formData = new FormData();
//             formData.append("image", plantInput.imageFile);
//             formData.append("water", plantInput.water);
//             formData.append("sunlight", plantInput.sunlight);
//             formData.append("fertilizer", plantInput.fertilizer);
//             formData.append("name", plantInput.plantName);
//             formData.append("note", plantInput.note);
//             formData.append("gardenId", gardenId);

//             await axios.post('http://localhost:8080/addPlant', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
            
//             plantAdded(false);
//             setTimeout(() => {
//                 setNotification({
//                     show: true,
//                     variant: 'success',
//                     message: 'new plant added'
//                 });
//                 window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//             }, '500');
//         }
//         catch (e) {
//             console.log(e);
//         }
//     }

//     const handleDelete = async () => {
//         try{
//            const res = await axios.delete(`http://localhost:8080/deletePlant/${gardenId}/${plant.id}`);
//            console.log("After res = ", res);
//            refreshPlants(true);
//            setNotification({
//                show: true,
//                variant: 'success',
//                message: 'plant deleted'
//            });
//         }
//         catch(e){
//            console.log(e);
//         }
//    }



    return (
            <PlantWrapper isActive = {isActive} onClick={onClick}> 
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
                            // if(window.confirm(`Are you sure you want to delete ${plant.name} ?`))
                            // handleDelete();
                        }}/>
                </StyledDelete>
            </PlantWrapper>
    )
}