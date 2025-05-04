import React from "react";
import { StyledLogoContainer, StyledNav } from "../style/style";
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

export const Navbar = () => {
    const userLoggedIn = sessionStorage.getItem('userName') ? true : false;
    return (
    <StyledNav>
    <StyledLogoContainer>
    </StyledLogoContainer>
    {userLoggedIn ? 
        <Link to={'/bahaar/account'}><PersonIcon  fontSize="large"  htmlColor="white"/></Link>
        :
        <Link to={'/bahaar/authentication'}><LoginIcon  fontSize="large"  htmlColor="white"/></Link>
    }
    </StyledNav>
    )
}