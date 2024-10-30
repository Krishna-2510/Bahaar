import React from "react";
import { StyledInput, StyledInputContainer } from "../style/style";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
export const InputBox = ({placeholder, iconType, value, onChange}) => {
    
    return(
        <StyledInputContainer>
        {iconType === 'email' && <EmailIcon htmlColor="#B7B7B7"/>}
        {iconType === 'password' && <LockIcon htmlColor="#B7B7B7"/>}
        {iconType === 'person' && <PersonIcon htmlColor="#B7B7B7"/>}
        <StyledInput type={iconType === 'password' ? "password" : "text"} placeholder={placeholder} value={value} onChange={onChange}/>
        </StyledInputContainer>
    )
}