import React, { useEffect, useState } from "react";
import { FlexContainer, GardenContainer, PlantContainer, StyledAuthHeading, StyledAuthText, StyledGardenDetails, StyledHeader, StyledHeaderContent, StyledHeaderText, StyledSpan, StyledUserName, StyledGardenDetails2 } from "../style/style";
import { Navbar } from "../components/Navbar";
import { MyButton } from "../components/MyButton";
import AddIcon from '@mui/icons-material/Add';
import { GardenCard } from "../components/GardenCard";
import { NotificationBox } from "../components/NotificationBox";
import { useLocation, useNavigate } from 'react-router-dom';
import { PlantCard } from "../components/PlantCard";
import axios from "axios";
import Spinner from "../components/Spinner";

export const GardenDetails = () => {

    const location = useLocation();
    const garden = location.state.garden || {};
    const isEdit = location.state.edit;

    console.log("LOCATION = ", location.state)
    const [plants, setPlants] = useState([]);
    const [apiResponse, setApiResponse] = useState({
        data: [],
        loading: false,
        error: false
    });
    const [addingNewPlant, setAddingNewPlant] = useState(false);
    const [refreshPlants, setRefreshPlants] = useState(false);
    const [notificationDetails, setNotificationDetails] = useState({
        show: false,
        variant: null,
        message: ''
    });

    useEffect(() => {
        if (isEdit) {
            console.log("Cane here ---------")
            setAddingNewPlant(true);
        }
    }, [isEdit])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [refreshPlants])

    useEffect(() => {
        console.log("Change: adding = ", addingNewPlant)
        if (!addingNewPlant) {
            console.log("Raeched here in second useEffect")
            getPlants();
        }
    }, [addingNewPlant]);

    useEffect(() => {
        console.log("Change: refreshPlants = ", refreshPlants)
        if (refreshPlants) {
            console.log("Raeched here in firts useEffect")
            getPlants();
        }
    }, [refreshPlants]);

    const getPlants = async () => {
        console.log('API called')
        setApiResponse({
            ...apiResponse,
            loading: true
        })
        try {
            const response = await axios.get(`http://localhost:8080/${garden.id}/recentPlants`);
            setPlants(response.data);
            setApiResponse({
                data: response.data,
                loading: false,
                error: false
            });
            if (!isEdit)
                setAddingNewPlant(false);
        }
        catch (error) {
            console.error('Error fetching response ', error);
            setApiResponse({
                data: [],
                loading: false,
                error: true
            })
        }
    };

    const closed = () => {
        setNotificationDetails({
            ...notificationDetails,
            show: false
        });
    }

    return (
        <>
            <StyledHeader>
                <Navbar />
                <StyledHeaderContent>
                    <div>
                        <StyledAuthHeading><StyledUserName>{garden.name}</StyledUserName></StyledAuthHeading>
                        <div>
                            <StyledGardenDetails2 color="white">Created on:</StyledGardenDetails2>
                            <StyledGardenDetails2 color="white">{garden.createdOn}</StyledGardenDetails2>
                        </div>
                        <div>
                            <StyledGardenDetails2 color="white">Total plants:</StyledGardenDetails2>
                            <StyledGardenDetails2 color="white">{apiResponse.data.length}</StyledGardenDetails2>
                        </div>
                    </div>
                    <MyButton text={'Add plant'} Icon={<AddIcon fontSize="medium" />} width={'150px'} action={() => setAddingNewPlant(true)} />
                </StyledHeaderContent>
            </StyledHeader>
            {
                apiResponse.loading && <GardenContainer><Spinner width={"100px"} type={'general'}/></GardenContainer>
            }
            {
                !apiResponse.loading && apiResponse.error && <h1 style={{ color: "red", textAlign: "center" }}>Some error occurred</h1>
            }
            {!apiResponse.loading && !apiResponse.error && apiResponse.data.length === 0 && !addingNewPlant &&
                <GardenContainer>
                    <FlexContainer>
                        <StyledAuthHeading>You don't have any plants</StyledAuthHeading>
                        <StyledAuthText color="#A5A5A5">Create your first plant now. <StyledSpan onClick={() => setAddingNewPlant(true)}>Create</StyledSpan></StyledAuthText>
                    </FlexContainer>
                </GardenContainer>
            }

            {!apiResponse.loading && !apiResponse.error && (apiResponse.data.length > 0 || addingNewPlant) &&
                <PlantContainer>
                    {apiResponse.data.map((plant) => (
                        <PlantCard key={plant.id}
                            plant={plant}
                            edit={false}
                            gardenId={garden.id}
                            plantAdded={setAddingNewPlant}
                            refreshPlants={setRefreshPlants}
                            setNotification={setNotificationDetails} />

                    ))}

                    {addingNewPlant && <PlantCard edit={true}
                        gardenId={garden.id}
                        plantAdded={setAddingNewPlant}
                        refreshPlants={setRefreshPlants}
                        setNotification={setNotificationDetails} />
                    }

                    {notificationDetails.show &&
                        <NotificationBox
                            variant={notificationDetails?.variant}
                            message={notificationDetails?.message}
                            closed={closed} />
                    }
                </PlantContainer>}

        </>
    )
}