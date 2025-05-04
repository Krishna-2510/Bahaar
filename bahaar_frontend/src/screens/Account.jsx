import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import axios from "axios";
import { FlexContainer, GardenContainer, StyledAuthHeading, StyledAuthText, StyledHeader, StyledHeaderContent, StyledSpan, StyledUserName } from "../style/style";
import { Navbar } from "../components/Navbar";
import { MyButton } from "../components/MyButton";
import AddIcon from '@mui/icons-material/Add';
import { GardenCard } from "../components/GardenCard";
import { NotificationBox } from "../components/NotificationBox";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import plantpurple from '../images/plantpurple.png'

export const Account = () => {
    const userName = sessionStorage.getItem('userName');
    const userId = sessionStorage.getItem('userId');
    // const [gardens, setGardens] = useState([]);
    const [addingNewGarden, setAddingNewGarden] = useState(false);
    const [apiResponse, setApiResponse] = useState({
        data: [],
        loading: false,
        error: false
    });
    const [notificationDetails, setNotificationDetails] = useState({
        show: false,
        variant: null,
        message: ''
    });

    const [refreshGardens, setRefreshGardens] = useState(false);
    const navigate = useNavigate();

    const getGardens = async () => {
        setApiResponse({
            ...apiResponse,
            loading: true
        })
        try {
            const response = await axios.get(`http://localhost:8080/${userId}/gardens`);
            // setGardens(response.data);
            setApiResponse({
                data: response.data,
                loading: false,
                error: false
            });
            setRefreshGardens(false);
        } catch (error) {
            console.log('Error fetching gardens: ', error);
            setApiResponse({
                data: [],
                loading: false,
                error: true
            })
        }
    }

    useEffect(() => {
        console.log("Inside the use effect addingnewgarden = ", addingNewGarden);
        if (!addingNewGarden)
            getGardens()
    }, [addingNewGarden]);

    const closed = () => {
        setNotificationDetails({
            ...notificationDetails,
            show: false
        });
    }

    useEffect(() => {
        if (refreshGardens)
            getGardens();
    }, [refreshGardens]);

    const loadGardenDetails = (garden) => {
        navigate('/bahaar/garden', { state: { garden, edit: false } })
    }

    return (
        <>
            <StyledHeader>
                <Navbar />
                <StyledHeaderContent>
                    <StyledAuthHeading>Welcome - <StyledUserName>{userName}</StyledUserName></StyledAuthHeading>
                    <MyButton text={'Add garden'} Icon={<AddIcon style={{
                        fontSize: useMediaQuery("(max-width: 480px)") ? "1.1rem" : "medium",
                    }} />} width={'150px'} action={() => setAddingNewGarden(true)} />
                </StyledHeaderContent>
            </StyledHeader>
            <GardenContainer>
                {
                    apiResponse.loading && <Spinner width={"100px"} type={'general'} />
                }
                {
                    !apiResponse.loading && apiResponse.error && <h1 style={{ color: "red", textAlign: "center" }}>Some error occurred</h1>
                }
                {!apiResponse.loading && !apiResponse.error && apiResponse.data.length === 0 && !addingNewGarden &&
                    <FlexContainer>
                        <StyledAuthHeading>You don't have any gardens</StyledAuthHeading>
                        <StyledAuthText color="#A5A5A5">Create your first garden now. <StyledSpan onClick={() => setAddingNewGarden(true)}>Create</StyledSpan></StyledAuthText>
                        <img width={'100px'} src={plantpurple}></img>
                    </FlexContainer>
                }
                {!apiResponse.loading && !apiResponse.error && apiResponse.data.map((garden) =>
                    <GardenCard key={garden.id}
                        garden={garden} edit={false}
                        gardenAdded={setAddingNewGarden}
                        setNotification={setNotificationDetails}
                        refreshGardens={setRefreshGardens}
                        onClickHandler={() => loadGardenDetails(garden)} />
                )}

                {addingNewGarden &&
                    <GardenCard edit={true}
                        gardenAdded={setAddingNewGarden}
                        setNotification={setNotificationDetails}
                        refreshGardens={setRefreshGardens} />
                }

                {notificationDetails.show &&
                    <NotificationBox variant={notificationDetails?.variant}
                        message={notificationDetails?.message}
                        closed={closed} />
                }
            </GardenContainer>
        </>
    )
}