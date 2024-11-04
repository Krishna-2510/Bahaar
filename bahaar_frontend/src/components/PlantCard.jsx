import React from "react";
import { PlantImageContainer, PlantInfoContainer, PlantWrapper, StyledButton, StyledButtonContent, StyledPlantAge, StyledPlantName } from "../style/style";
import AddIcon from '@mui/icons-material/Add';
import moneyPlantImage from '../images/money-plant.jpg'; // Adjust the path based on your project structure

export const PlantCard = (plant) => {
    return (

            <PlantWrapper>
                <PlantImageContainer>
                <img style={{width: '100%', height: '100%', objectFit: 'cover',  borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}} src={moneyPlantImage} alt="Money Plant" />
                </PlantImageContainer>
                <PlantInfoContainer>
                    <StyledPlantName>Money plant</StyledPlantName>
                    <StyledPlantAge>Age: 9 months</StyledPlantAge>
                </PlantInfoContainer>
            </PlantWrapper>
    )
}