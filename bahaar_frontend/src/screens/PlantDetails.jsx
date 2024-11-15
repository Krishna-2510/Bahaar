import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MyButton } from "../components/MyButton";
import AddIcon from '@mui/icons-material/Add';
import { calculateAge } from "../utils/util";
import { fertilizerMapping, sunlightMapping, waterMapping } from "../utils/constantData";
import { MainContainer, PlantDataContainer, PlantDetailsContainer, StyledPlantData1, StyledPlantData2, StyledPlantData3, StyledPlantNote } from "../style/style";


export const PlantDetails = () => {
    const location = useLocation();
    const plant = location.state.plant ?? {};
    const image = location.state.image;
    console.log("Plant = ", location.state);

    return (
        <>
            <PlantDetailsContainer> 
                <Navbar />
                <MainContainer>
                    <PlantDataContainer>
                        <StyledPlantData1>{plant.name}</StyledPlantData1>
                        <StyledPlantData2>Age: <StyledPlantData3>{calculateAge(plant.addedOn)}</StyledPlantData3></StyledPlantData2>
                        <StyledPlantData2>Water: <StyledPlantData3>{waterMapping[plant.water]}</StyledPlantData3></StyledPlantData2>
                        <StyledPlantData2>Sunlight: <StyledPlantData3>{sunlightMapping[plant.sunlight]}</StyledPlantData3></StyledPlantData2>
                        <StyledPlantData2>Fertilizer: <StyledPlantData3>{fertilizerMapping[plant.fertilizer]}</StyledPlantData3></StyledPlantData2>
                        <StyledPlantNote>{plant.note}</StyledPlantNote>
                        <p style={{position: 'absolute', bottom: '0'}}>
                            <MyButton text={'Add new'} Icon={<AddIcon fontSize="medium" />} width={'150px'} action={() => {}} />
                        </p>
                        
                    </PlantDataContainer>
                    <img style={{ width: '50%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} src={image} alt="Money Plant" />
                </MainContainer>
            </PlantDetailsContainer>
        </>
    );
};