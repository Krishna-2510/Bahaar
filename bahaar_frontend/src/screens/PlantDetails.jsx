import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MyButton } from "../components/MyButton";
import AddIcon from '@mui/icons-material/Add';
import { calculateAge } from "../utils/util";
import { fertilizerMapping, sunlightMapping, waterMapping } from "../utils/constantData";
import { AnimatedContent, MainContainer, PlantContainer, PlantDataContainer, PlantDetailsContainer, StyledLeftChevron, StyledPlantData1, StyledPlantData2, StyledPlantData3, StyledPlantNote, StyledRightChevron, WhiteBorder } from "../style/style";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { PlantCard } from "../components/PlantCard";
import styled from 'styled-components';
import { PlantHistoryCard } from "../components/PlantHistoryCard";


export const PlantDetails = () => {
    const location = useLocation();
    const plant = location.state.plant ?? {};
    const image = location.state.image;
    // console.log("Plant = ", location.state);

    const temp = [plant, plant, plant, plant, plant];
    const [isVisible, setIsVisible] = useState(true);
    const plantHistory = temp.map((plant, ind) => {
        return {
            ...plant,
            name: `${plant.name} - ${ind}`
        }
    });

    const [currPlant, setCurrPlant] = useState(plantHistory[0]);
    const [currInd, setCurrInd] = useState(0);

    const loadNext = (dir) => {
        const nextInd = (currInd + dir + plantHistory.length) % (plantHistory.length);
        setIsVisible(false);
        setCurrInd(nextInd);
        setCurrPlant(plantHistory[nextInd]);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, [currInd]);

    const handleOnClick = (ind) => {
        setIsVisible(false);
        setCurrInd(ind);
        setCurrPlant(plantHistory[ind]);
    }

    return (
        <>
            <PlantDetailsContainer>
                <Navbar />
                <MainContainer>
                    <AnimatedContent isVisible={isVisible}>
                        <PlantDataContainer>
                            <StyledPlantData1>{currPlant.name}</StyledPlantData1>
                            <StyledPlantData2>Age: <StyledPlantData3>{calculateAge(currPlant.addedOn)}</StyledPlantData3></StyledPlantData2>
                            <StyledPlantData2>Water: <StyledPlantData3>{waterMapping[currPlant.water]}</StyledPlantData3></StyledPlantData2>
                            <StyledPlantData2>Sunlight: <StyledPlantData3>{sunlightMapping[currPlant.sunlight]}</StyledPlantData3></StyledPlantData2>
                            <StyledPlantData2>Fertilizer: <StyledPlantData3>{fertilizerMapping[currPlant.fertilizer]}</StyledPlantData3></StyledPlantData2>
                            <StyledPlantNote>{currPlant.note}</StyledPlantNote>
                            <p style={{ position: 'absolute', bottom: '0' }}>
                                <MyButton text={'Add new'} Icon={<AddIcon fontSize="medium" />} width={'150px'} action={() => { }} />
                            </p>

                        </PlantDataContainer>
                        <img style={{ width: '50%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} src={image} alt="Money Plant" />
                    </AnimatedContent>
                </MainContainer>
                <StyledLeftChevron onClick={() => loadNext(-1)}>
                    <ArrowBackIosIcon fontSize="large" />
                </StyledLeftChevron>
                <StyledRightChevron onClick={() => loadNext(1)}>
                    <ArrowForwardIosIcon fontSize="large" />
                </StyledRightChevron>
            </PlantDetailsContainer>
            <PlantContainer>
                {plantHistory.map((plant, ind) => <PlantHistoryCard onClick={() => handleOnClick(ind)} isActive={ind === currInd} plant={plant} />)}
            </PlantContainer>
        </>
    );
};