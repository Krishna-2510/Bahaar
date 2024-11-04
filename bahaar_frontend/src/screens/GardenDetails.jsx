import React, { useEffect, useState } from "react";
import { FlexContainer, GardenContainer, PlantContainer, StyledAuthHeading, StyledAuthText, StyledGardenDetails, StyledHeader, StyledHeaderContent, StyledHeaderText, StyledSpan, StyledUserName } from "../style/style";
import { Navbar } from "../components/Navbar";
import { MyButton } from "../components/MyButton";
import AddIcon from '@mui/icons-material/Add';
import { GardenCard } from "../components/GardenCard";
import { NotificationBox } from "../components/NotificationBox";
import { useLocation } from 'react-router-dom';
import { PlantCard } from "../components/PlantCard";

export const GardenDetails = () => {
    
    const location = useLocation();
    const garden = location.state || {};
    useEffect(() => {
        console.log("Got this ", garden)
        window.scroll(0,0)
    },[garden])
    
    return (
        <>
            <StyledHeader>
                <Navbar />
                <StyledHeaderContent>
                    <div>
                    <StyledAuthHeading><StyledUserName>{garden.name}</StyledUserName></StyledAuthHeading>
                    <div>
                    <StyledGardenDetails color="white">Created on:</StyledGardenDetails>
                    <StyledGardenDetails color="white">{garden.createdOn}</StyledGardenDetails>
                    </div>
                    <div>
                    <StyledGardenDetails color="white">Total plants:</StyledGardenDetails>
                    <StyledGardenDetails color="white">{garden.numberOfPlants}</StyledGardenDetails>
                    </div>
                    </div>
                    <MyButton text={'Add plant'} Icon={<AddIcon fontSize="medium" />} width={'150px'} action={() => {}} />
                </StyledHeaderContent>
            </StyledHeader>
            <PlantContainer>
                <PlantCard></PlantCard>
                <PlantCard></PlantCard>
                <PlantCard></PlantCard>
                <PlantCard></PlantCard>
                <PlantCard></PlantCard>

            </PlantContainer>

        </>
    )
}