import React, { useState } from "react";
import { FlexContainer, FullAuthScreen } from "../style/style";
import { Navbar } from "../components/Navbar";
import { LoginForm } from "../components/LoginForm";
import { RegistrationForm } from "../components/RegistrationForm";

export const AuthenticationPage = () => {
    const [showLogin, setShowlogin]  = useState(true);
    const toggleLogin = () => {
        setShowlogin(!showLogin);
    }
    return(
        <FullAuthScreen>
        <Navbar/>
        <FlexContainer>
        {
            showLogin ?
            <LoginForm toggleLogin={toggleLogin}/>
            :
            <RegistrationForm toggleLogin={toggleLogin}/>
        }
        </FlexContainer>
        </FullAuthScreen>
    )
}