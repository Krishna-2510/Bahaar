import React from "react";
import { StyledButton, StyledButtonContent } from "../style/style";
import AddIcon from '@mui/icons-material/Add';

export const MyButton = ({ text, action, Icon, width }) => {
    return <StyledButton width={width} onClick={action}>
        <StyledButtonContent>
            {Icon && Icon}{text}
        </StyledButtonContent>
    </StyledButton>
}