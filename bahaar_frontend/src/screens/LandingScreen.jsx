import React from "react";
import { FullLandingScreen, StyledMainHeading, StyledTagline, StyledSpan, FlexContainer, Spacer } from "../style/style";
import { MyButton } from "../components/MyButton";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
    const userLoggedIn = sessionStorage.getItem('userName') ? true : false;
    const navigate = useNavigate();
    const handleClick = () => {
        if(userLoggedIn)
            navigate('/bahaar/account')
        else
            navigate('/bahaar/authentication')
    }
    return(
        <FullLandingScreen>
        <Navbar/>
        <FlexContainer>
        <StyledMainHeading>Bahaar</StyledMainHeading>
        <StyledTagline>Grow your own virtual garden and display your plant passion with <br/> 
        <StyledSpan>Bahaar</StyledSpan> - where every plant has a story.</StyledTagline>
        <Spacer/>
        <MyButton text={'Explore now'} action={handleClick} width={'150px'}/>
        </FlexContainer>
        </FullLandingScreen>
    )
}