import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FlexContainer, GardenContainer, StyledAuthHeading, StyledAuthText, StyledHeader, StyledHeaderContent, StyledHeaderText, StyledSpan, StyledUserName } from "../style/style";
import { Navbar } from "../components/Navbar";
import { MyButton } from "../components/MyButton";
import AddIcon from '@mui/icons-material/Add';
import { GardenCard } from "../components/GardenCard";
import { NotificationBox } from "../components/NotificationBox";
export const Account = () => {
    // const loggedInUser = useSelector(state => state.user);
    const userName = sessionStorage.getItem('userName');
    const userId = sessionStorage.getItem('userId');
    const [gardens, setGardens] = useState([]);
    const [addingNewGarden, setAddingNewGarden] = useState(false);
    const [notificationDetails, setNotificationDetails] = useState({
        show: false,
        variant: null,
        message: ''
    });
    const [refreshGardens, setRefreshGardens] = useState(false);

    // useEffect(() => {
    //     console.log("SHow notif = ", showNotif);
    // },[showNotif]);

    const getGardens = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/${userId}/gardens`);
            setGardens(response.data);
            setRefreshGardens(false);
        } catch (error) {
            console.log('Error fetching gardens: ', error);
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
        if(refreshGardens)
            getGardens();
    },[refreshGardens])

    return (
        <>
            <StyledHeader>
                <Navbar />
                <StyledHeaderContent>
                    <StyledAuthHeading>Welcome - <StyledUserName>{userName}</StyledUserName></StyledAuthHeading>
                    <MyButton text={'Add garden'} Icon={<AddIcon fontSize="medium" />} width={'150px'} action={() => setAddingNewGarden(true)} />
                </StyledHeaderContent>
            </StyledHeader>
            <GardenContainer>
                {gardens.length === 0 && !addingNewGarden &&
                <FlexContainer>
                    <StyledAuthHeading>You don't have any gardens</StyledAuthHeading>
                    <StyledAuthText color="#A5A5A5">Create your first garden now. <StyledSpan onClick={() => setAddingNewGarden(true)}>Create</StyledSpan></StyledAuthText>
                </FlexContainer>
                }
                {gardens.map((garden) => 
                <GardenCard key={garden.id} garden={garden} edit={false} gardenAdded={setAddingNewGarden} setNotification={setNotificationDetails} refreshGardens={setRefreshGardens}/>)}
                {addingNewGarden && <GardenCard edit={true} gardenAdded={setAddingNewGarden} setNotification={setNotificationDetails} refreshGardens={setRefreshGardens}/>}
                {notificationDetails.show && <NotificationBox variant={notificationDetails?.variant} message={notificationDetails?.message} closed={closed}/>}
            </GardenContainer>
        </>
    )
}