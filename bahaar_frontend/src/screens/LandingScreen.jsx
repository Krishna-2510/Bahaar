import React from "react";
import { FullLandingScreen, StyledMainHeading, StyledTagline, StyledSpan, FlexContainer, Spacer } from "../style/style";
import { MyButton } from "../components/MyButton";
import { Navbar } from "../components/Navbar";

export const LandingPage = () => {
    return(
        <FullLandingScreen>
        <Navbar/>
        <FlexContainer>
        <StyledMainHeading>Bahaar</StyledMainHeading>
        <StyledTagline>Grow your own virtual garden and display your plant passion with <br/> 
        <StyledSpan>Bahaar</StyledSpan> - where every plant has a story.</StyledTagline>
        <Spacer/>
        <MyButton text={'Explore now'} action={() => alert('Clicked')} width={'150px'}/>
        </FlexContainer>
        </FullLandingScreen>
    )
}