import styled from "styled-components";
import tropical from "../images/tropical.jpg";
import leaves from "../images/leaves.jpg";
import curry from "../images/curry.jpg"
import logoImage from "../images/plantlogo.png"

const breakpoints = {
    mobile: '480px',
    tablet: '820px',
    desktop: '1024px',
};

const FullLandingScreen = styled.div`
    height:100%;
    width: 100%;
    position:fixed;
    top:0, left:0;
    background-image: url(${tropical});
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
    margin:0;
    font-family: ui-serif;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 7rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 4rem;
    }
`

const StyledTagline = styled.div`
    font-size: 30px;
    color: white;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 22px;
        margin: 20px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
        margin: 20px;
    }
`

const StyledSpan = styled.span`
    color: #749F2A;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`

const StyledButton = styled.button`
    width:${({ width }) => width};
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
    &:active {
        background: #55761e;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 100px;
        height: 40px;
        font-size: 13px;
        margin: 5px;
    }
`

const StyledButtonContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`

const StyledNav = styled.div`
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 10px;
         @media (max-width: ${breakpoints.mobile}) {
                 padding: 0px 10px;
            }
`
const StyledLogoContainer = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: #ffffff00;
    background-image: url(${logoImage});
    background-size: cover;
    background-position: center;

     @media (max-width: ${breakpoints.mobile}) {
                height: 38px;
                width: 38px
            }
`
// ----------------------------------------------------------------------------------------------------------

const FullAuthScreen = styled.div`
    height:100%;
    width: 100%;
    position:fixed;
    top:0, left:0;
    background-image: url(${leaves});
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
    background: #D9D9D9;

    @media (max-width: ${breakpoints.mobile}) {
        width: 85%;
    }
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
        font-size: inherit;
    };

    &:focus {
        outline: none;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
    }
`

const StyledAuthContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(0 0 0 / 50%);
    border-radius: 22px;

    @media (max-width: ${breakpoints.tablet}) {
        width: 75%;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 85%;
    }
`

const StyledAuthHeading = styled.p`
    color: white;
    font-size: 50px;
    margin: 0;
    

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 28px;
    }
`
const StyledAuthText = styled.p`
    color: ${({ color }) => color};
    font-size: 22px;
    margin: 0 0 20px 0;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 18px;
        margin: 0 0 15px 0;
    }
`
const Spacer = styled.div`
    margin: 10px;
`

// -----------------------------------------------------------------------------------------------------------------------

const StyledHeader = styled.div`
height:30%;
width: 100%;
position:relative;
background-image:  url(${curry});
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
    @media (max-width: ${breakpoints.mobile}) {
      height: 105%;
  }
  }
`

const StyledHeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 70%;
    padding: 0 100px;

    @media (max-width: ${breakpoints.mobile}) {
       display: block;
       padding: 0 32px;
    }


`

const StyledUserName = styled.span`
    color: white;
    font-size: 50px;
    font-weight: bold;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 32px;
        display: block;
    }
`

// -------------------------------------------------------------------------------------------------------------

const GardenContainer = styled.div`
    padding: 70px 10px;
    min-height: 60%;
    background: #1D201B;

    @media (max-width: ${breakpoints.mobile}) {
        padding-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
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

    @media (max-width: ${breakpoints.mobile}) {
        display: grid;
        height: auto;
        grid-template-areas:
            "GardenImgContainer"
            "GardenDataContainer";
    }
`
const GardenDataContainer = styled.div`
    width:  60%;
    @media (max-width: ${breakpoints.mobile}) {
       grid-area: GardenDataContainer;
       width: 100%;
    }
`

const GardenImgContainer = styled.div`
    width:  40%;
    border-radius: 30px;
    background-image: url(${({ bgImage }) => bgImage});
    background-size: cover;
    background-position: center;

    @media (max-width: ${breakpoints.mobile}) {
         width:  100%;
         height: 250px;
         grid-area: GardenImgContainer
    }
`

const GardenEmptyImgContainer = styled.div`
    width:  ${({ width }) => (width)};
    border-radius: 30px;
    background: #535353;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: ${breakpoints.mobile}) {
         width:  100%;
         height: 250px;
         grid-area: GardenImgContainer
    }
`

const StyledGardenName = styled.div`
    color: white;
    font-size: 35px;
    margin: 10px 10px;
    font-weight: bold;
    @media (max-width: ${breakpoints.mobile}) {
            font-size: 24px;
            margin: 0px 10px;
        }
    
`
const StyledGardenDetails = styled.span`
    color: ${({ color }) => color};
    font-size: 30px;
    margin: 0 10px;
    @media (max-width: ${breakpoints.mobile}) {
                font-size: 20px;
            }
    
`
const StyledGardenDetails2 = styled.span`
    color: ${({ color }) => color};
    font-size: 30px;
    margin: 0 10px;
    @media (max-width: ${breakpoints.mobile}) {
                font-size: 18px;
                margin: 0 1px;
            }
    
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
    };

     @media (max-width: ${breakpoints.mobile}) {
                font-size: 24px;
            }
`

const StyledDelete = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    @media (max-width: ${breakpoints.mobile}) {
                top: 15px;
                right: 12px;
            }
    
`
// ------------------------------------------------------------------------------------------------------------

// const StyledNotification = styled.div`
//     width: 50%;
//     height: 30px;
//     background-color: ${({bgcolor}) => bgcolor};
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px 20px;
//     border-radius: 32px;
//     border: 1px solid;
//     border-color: ${({outline}) => outline};
//     margin: 30px auto;
//     box-shadow: 4px 4px 8px rgb(0, 0 ,0 ,80%);

// `
const StyledNotification = styled.div`
    grid-column: 1 / -1; /* Span all columns */
    width: 50%; /* Full width of the grid */
    margin: 30px auto;
    height: 30px;
    background-color: ${({ bgcolor }) => bgcolor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-radius: 32px;
    border: 1px solid;
    border-color: ${({ outline }) => outline};
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.8);
    @media (max-width: ${breakpoints.mobile}) {
        width: auto;
    }
`;

const StyledNotifMessage = styled.div`
    color: white;
    font-size: 22px;
    margin: 5px;
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 15px;
    }
`

const NotifDetails = styled.div`
    display: flex;
    align-items: center;
`
const NotifHeading = styled.span`
    color: ${({ color }) => color};
    font-weight:bold;
    font-size:24px;
    margin: 0 5px;
    font-size: 22px;
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
    }
`
//---------------------------------------------------------------------------------------------------------------------------------------------------------

// const PlantContainer = styled.div`
//     padding: 70px 120px;
//     min-height: 60%;
//     background: #1D201B;
//     display: flex;
//     flex-wrap: wrap;
//     gap: 35px;
//     align-items: flex-start;
// `
// const PlantWrapper = styled.div`
//     min-height: 24rem; 
//     // margin: 10px;
//     box-shadow: ${({isActive}) => isActive ? 'none' : '4px 4px 8px rgb(0, 0 ,0 ,80%)'};
//     background-color: #161815;
//     border-radius: 30px;
//     flex: 1 1 30%; /* Adjust percentage to control number of items per row */
//     max-width: 22rem;
//     cursor: pointer;
//     &:hover {
//         box-shadow: 8px 8px 10px rgb(0, 0 ,0 );
//     };
//     position: relative;
//     border: ${({isActive}) => (isActive ? '2px solid white' : 'none')};
//     transition: border 0.2s ease;

// `

const PlantContainer = styled.div`
    padding: 70px 120px;
    min-height: 60%;
    background: #1D201B;
    display: grid; /* Change to grid */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
    gap: 35px; /* Space between grid items */
    align-items: flex-start; /* Align items to the start */

    @media (max-width: ${breakpoints.mobile}) {
        padding: 32px;
        grid-template-columns: repeat(auto-fill, minmax(112px, 1fr)); /* Responsive grid */
        gap: 20px;
    }


`;

const PlantWrapper = styled.div`
    min-height: 24rem; 
    box-shadow: ${({ isActive }) => (isActive ? 'none' : '4px 4px 8px rgba(0, 0, 0, 0.8)')};
    background-color: #161815;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
        box-shadow: 8px 8px 10px rgba(0, 0, 0, 1);
    }
    position: relative;
    border: ${({ isActive }) => (isActive ? '2px solid white' : 'none')};
    transition: border 0.2s ease;
    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        min-height: 12rem;
    }
`;

const StyledPlantName = styled.div`
    color: white;
    margin: 1px;
    padding-left: 1.5rem;
    font-size: 2.2rem;
    font-weight: bold;
    @media (max-width: ${breakpoints.mobile}) {
        padding-left: 1rem;
        font-weight: normal;
        font-size: 1.2rem;
    }
`

const StyledPlantInfo = styled.div`
    color: white;
    margin: 1px;
    font-size: 1.8rem;
    padding-left: 1.5rem;
    font-weight: 400;
    @media (max-width: ${breakpoints.mobile}) {
        padding-left: 1rem;
        font-size: 1rem;
    }
`

const PlantImageContainer = styled.div`
    height: 20rem;
    @media (max-width: ${breakpoints.mobile}) {
        height:227px;
    }
`
const PlantInfoContainer = styled.div`
    min-height: 1rem;
`

const PlantNameInput = styled.input`
    width: 90%;
    border: none;
    font-size: 35px;
    background: #161815;
    margin: 10px 18px;
    font-weight: bold;
    color: white;
    font-family: 'Jaldi';

    &::placeholder {
        color: #535353;
    };

    &:focus {
        outline: none;
    };
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
        width: 80%;
        margin: 10px 10px;
    }
        
`

const StyledSelect = styled.select`
   margin: 10px;
    width: 90%;
    font-size: 1.4rem;
    background: #161815;
    color: ${({ selected }) => (selected === 'Select an option' ? '#535353' : 'white')};
    border: none;
    appearance: none; 
    padding: 10px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="white" d="M4 6l4 4 4-4z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 24px; 
    border-radius: 30px;
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.8rem;
        padding: 1px;
        width:100%;
    }
`

const StyledPlantInfoInput = styled.div`
    display: flex;
    align-items: center;
`

const StyledEmptyImageContainer = styled.div`
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #535353; 
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    @media (max-width: ${breakpoints.mobile}) {
        height:12rem;
    }
`

const StyledTextarea = styled.textarea`
    background: #535353;
    margin: 0.5rem 1.5rem;
    color: white;
    font-size: 1.4rem;
    min-height:15rem;
    width: 80%;
    border-radius: 15px;
    padding: 10px;
    resize: none;
    font-family: Jaldi;
    @media (max-width: ${breakpoints.mobile}) {
        min-height:10rem;
        margin: 0.5rem 1rem;
        width: 60%;
        font-size: 1rem;
    }
`

// ------============================================================================================================

const PlantDetailsContainer = styled.div`
    background: #1D201B;
    min-height: 100vh;
    position: relative;
`

const MainContainer = styled.div`
    display: flex;
    padding: 4rem; 
    gap: 2rem;
    flex-grow: 1;
    height: 80vh;
    @media (max-width: ${breakpoints.mobile}) {
        padding: 2rem;
        height: auto;
    }
`

const PlantDataContainer = styled.div`
    width: 50%;
    position: relative;
    padding: 10px;
     @media (max-width: ${breakpoints.mobile}) {
       width: 100%;
    }
`

const StyledPlantData1 = styled.div`
    color: white;
    font-size: 3.5rem;
    margin: 0 0 3px 0;
    @media (max-width: ${breakpoints.mobile}) {
       font-size: 1.8rem;
    }
`
const StyledPlantData2 = styled.div`
    color: white;
    font-size: 2rem;
    margin: 0 0 3px 0;
    display: flex;
    align-items: center;
     @media (max-width: ${breakpoints.mobile}) {
       font-size: 1rem;
    }
`
const StyledPlantData3 = styled.span`
    color: #749F2A;
    margin: 0 10px;
`
const StyledPlantNote = styled.div`
    color: white;
    font-size: 1.6rem;
    margin: 0 0 3px 0;
    font-weight: normal; 
    @media (max-width: ${breakpoints.mobile}) {
       font-size: 1rem;
    }
`
const StyledRightChevron = styled.button`
    position: absolute;
    top: 50%;
    right: 10px;
    border: none;
    background: #1D201B;
    color: white;
    @media (max-width: ${breakpoints.mobile}) {
        top: 60%;
        right: 1px;
    }
`
const StyledLeftChevron = styled.button`
    position: absolute;
    top: 50%;
    left: 10px;
    border: none;
    background: #1D201B;
    color: white;
    @media (max-width: ${breakpoints.mobile}) {
        top: 60%;
        left:1px;
    }
`

const WhiteBorder = styled.div`
    border: ${({ hasBorder }) => (hasBorder ? '2px solid white' : 'none')};
    padding: 0;
    border-radius: 30px;
`

const AnimatedContent = styled.div`
        opacity: ${(props) => (props.isVisible ? 1 : 0)};
        display: flex;
        transition: opacity 0.2s ease;
        width: 100%;

        @media (max-width: ${breakpoints.mobile}) {
            display: flex;
            flex-direction: column-reverse;
    }
`

const StyledTextareaPlant = styled.textarea`
    background: #535353;
    color: white;
    font-size: 1.4rem;
    min-height:12rem;
    width: 90%;
    border-radius: 15px;
    padding: 10px;
    resize: none;
    font-family: Jaldi;
    margin: 0.5rem 0;
`

const StyledPlantDetailsImage = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 4px 4px 8px rgb(0, 0 ,0 ,80%);
    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
    }
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
    StyledDelete,
    PlantContainer,
    PlantWrapper,
    StyledPlantInfo,
    StyledPlantName,
    PlantInfoContainer,
    PlantImageContainer,
    PlantNameInput,
    StyledSelect,
    StyledPlantInfoInput,
    StyledEmptyImageContainer,
    StyledTextarea,
    PlantDetailsContainer,
    MainContainer,
    StyledPlantData1,
    StyledPlantData2,
    StyledPlantData3,
    StyledPlantNote,
    PlantDataContainer,
    StyledLeftChevron,
    StyledRightChevron,
    WhiteBorder,
    AnimatedContent,
    StyledTextareaPlant,
    StyledGardenDetails2,
    StyledPlantDetailsImage,
}