import styled from "styled-components";
import monsteraImage from "../images/monsteraBg.jpg";
import smallLeavesImage from "../images/smallLeavesBg.jpg";
import roundLeavesImage from "../images/roundLeavesBg.jpg"

const FullLandingScreen = styled.div`
    height:100%;
    width: 100%;
    position:fixed;
    top:0, left:0;
    background-image: url(${monsteraImage});
    background-size: cover;
    background-position: center;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: inherit;
        background-size: inherit;
        background-position: inherit;
        filter: brightness(40%);
        z-index: -1;
      }
`
const FlexContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    height: 100%
`
const StyledMainHeading = styled.h1`
    font-size: 121px;
    color:#749F2A;
    text-align: center;
    text-shadow: inset 3px 5px rgba(0, 0, 0);
    margin:0
`

const StyledTagline = styled.div`
    font-size: 30px;
    color: white;
    text-align: center
`

const StyledSpan = styled.span`
    color: #749F2A;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`

const StyledButton = styled.button`
    width:${({width}) => width};
    height: 50px;
    border: none;
    border-radius: 25px;
    background: #749F2A;
    color: white;
    font-size:18px;
    margin: 40px 0;
    box-shadow: 4px 4px 8px rgb(0, 0 ,0 ,80%);
    cursor: pointer ;
    margin: 10px;
    &:hover {
        box-shadow: 8px 8px 10px rgb(0, 0 ,0 );
    }
`

const StyledButtonContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`

const StyledNav = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 10px;
`
const StyledLogoContainer = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background: white;
`
// ----------------------------------------------------------------------------------------------------------

const FullAuthScreen = styled.div`
    height:100%;
    width: 100%;
    position:fixed;
    top:0, left:0;
    background-image: url(${smallLeavesImage});
    background-size: cover;
    background-position: center;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: inherit;
        background-size: inherit;
        background-position: inherit;
        filter: brightness(40%);
        z-index: -1;
      }
`

const StyledInputContainer = styled.div`
    width: 60%;
    border: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
    background: white;
    padding: 0 10px;
    margin: 10px;
    background: #D9D9D9
`

const StyledInput = styled.input`
    width: 90%;
    height: 40px;
    border: none;
    text-align: center;
    font-size: 18px;
    background-color: #D9D9D9;

    &::placeholder {
        color: #A5A5A5;
        text-align: inherit;
        font-size: inherit
    };

    &:focus {
        outline: none;
    }
`

const StyledAuthContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(0 0 0 / 50%);
    border-radius: 22px;
`

const StyledAuthHeading = styled.p`
    color: white;
    font-size: 50px;
    margin: 0;
`
const StyledAuthText = styled.p`
    color: ${({color}) => color};
    font-size: 22px;
    margin: 0 0 20px 0;
`
const Spacer = styled.div`
    margin: 10px;
`

// -----------------------------------------------------------------------------------------------------------------------

const StyledHeader = styled.div`
height:30%;
width: 100%;
position:relative;
background-image: url(${roundLeavesImage});
background-size: cover;
background-position: center;
z-index: 0;

&:before {
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    filter: brightness(45%);
    z-index: -1;
  }
`

const StyledHeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 70%;
    padding: 0 100px;
`

const StyledUserName = styled.span`
    color: white;
    font-size: 50px;
    font-weight: bold;
`

// -------------------------------------------------------------------------------------------------------------

const GardenContainer = styled.div`
    padding: 70px 10px;
    min-height: 50%;
    background: #1D201B;
`
const StyledGardenCard = styled.div`
    background-color: #161815;
    width: 85%;
    height: 250px;
    padding: 10px;
    border-radius: 30px;
    margin: 20px auto;
    display: flex;
    box-shadow: 4px 4px 8px rgb(0, 0 ,0 ,80%);
    cursor: pointer;
    position: relative;

    &:hover {
        box-shadow: 8px 8px 10px rgb(0, 0 ,0 );
    }
`
const GardenDataContainer = styled.div`
    width:  60%;
`

const GardenImgContainer = styled.div`
    width:  40%;
    border-radius: 30px;
    background-image: url(${({bgImage}) => bgImage});
    background-size: cover;
    background-position: center;
`

const GardenEmptyImgContainer = styled.div`
    width:  40%;
    border-radius: 30px;
    background: #535353;
    display: flex;
    justify-content: center;
    align-items: center 
`

const StyledGardenName = styled.div`
    color: white;
    font-size: 35px;
    margin: 10px 10px;
    font-weight: bold
`
const StyledGardenDetails = styled.span`
    color: ${({color}) => color};
    font-size: 30px;
    margin: 0 10px;
`
const GardenNameInput = styled.input`
    width: 90%;
    border: none;
    font-size: 35px;
    background: #161815;
    margin: 10px 10px;
    font-weight: bold;
    color: white;
    font-family: 'Jaldi';

    &::placeholder {
        color: #535353;
    };

    &:focus {
        outline: none;
    }
`

const StyledDelete = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`
// ------------------------------------------------------------------------------------------------------------

const StyledNotification = styled.div`
    width: 50%;
    height: 30px;
    background-color: ${({bgcolor}) => bgcolor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-radius: 32px;
    border: 2px solid;
    border-color: ${({outline}) => outline};
    margin: 30px auto;
    box-shadow: 4px 4px 8px rgb(0, 0 ,0 ,80%);

`

const StyledNotifMessage = styled.div`
    color: white;
    font-size: 22px;
    margin: 5px;
`

const NotifDetails = styled.div`
    display: flex;
    align-items: center;
`
const NotifHeading = styled.span`
    color: ${({color}) => color};
    font-weight:bold;
    font-size:24px;
    margin: 0 5px;
`

export {
    FullLandingScreen,
    StyledMainHeading,
    FlexContainer,
    StyledTagline,
    StyledSpan,
    StyledButton,
    StyledButtonContent,
    StyledNav,
    StyledLogoContainer,
    FullAuthScreen,
    StyledInput,
    StyledInputContainer,
    StyledAuthContainer,
    StyledAuthHeading,
    StyledAuthText,
    Spacer,
    StyledHeader,
    StyledHeaderContent,
    StyledUserName,
    StyledGardenCard,
    GardenContainer,
    GardenDataContainer,
    GardenImgContainer,
    StyledGardenName,
    StyledGardenDetails,
    GardenNameInput,
    GardenEmptyImgContainer,
    StyledNotification,
    StyledNotifMessage,
    NotifDetails,
    NotifHeading,
    StyledDelete
}