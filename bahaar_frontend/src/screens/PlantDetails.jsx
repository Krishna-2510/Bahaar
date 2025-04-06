import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MyButton } from "../components/MyButton";
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { calculateAge } from "../utils/util";
import { fertilizerMapping, fertilizerOptions, sunlightMapping, sunlightOptions, waterMapping, waterOptions } from "../utils/constantData";
import { AnimatedContent, GardenEmptyImgContainer, MainContainer, PlantContainer, PlantDataContainer, PlantDetailsContainer, StyledLeftChevron, StyledPlantData1, StyledPlantData2, StyledPlantData3, StyledPlantNote, StyledRightChevron, StyledSelect, StyledTextareaPlant } from "../style/style";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { PlantHistoryCard } from "../components/PlantHistoryCard";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import axios from "axios";
import { NotificationBox } from "../components/NotificationBox";
import CancelIcon from '@mui/icons-material/Cancel';


export const PlantDetails = () => {
    const location = useLocation();
    const plant = location.state.plant ?? {};
    const image = location.state.image;
    const [imagesrc, setImagesrc] = useState('');
    const [imageName, setImageName] = useState('');
    const [currImage, setCurrImage] = useState('');
    const [currInd, setCurrInd] = useState(0);
    const [addingNewPlant, setAddingNewPlant] = useState(false);
    const hiddenFileInput = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const [allPlants, setAllPlants] = useState([]);
    const [currPlant, setCurrPlant] = useState(allPlants?.[0]);
    const [refreshPlants, setRefreshPlants] = useState(false);
    const [notificationDetails, setNotificationDetails] = useState({
        show: false,
        variant: null,
        message: ''
    });
    const navigate = useNavigate();

    // console.log("Plant = ", location.state.plant);

    useEffect(() => {

        getAllPlants();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (refreshPlants) {
            console.log("Set refresh palnts has been set to true calling getPlants")
            getAllPlants();
            setRefreshPlants(false);
        }

    }, [refreshPlants])

    useEffect(() => {
        if (currPlant) {
            fetchImage();
        }
    }, [currPlant]);

    const fetchImage = async () => {
        try {
            const response = await axios.get(currPlant.imageUrl);
            const base64Image = `data:image/jpeg;base64,${response.data.data}`;
            setCurrImage(base64Image);
        }
        catch (e) {
            console.log(e);
        }
    };

    const getAllPlants = async () => {
        console.log("Inside getALl PLants")
        try {
            const response = await axios.get(`http://localhost:8080/${plant.name}/${plant.gardenId}`);
            setAllPlants(response.data);
            setCurrPlant(response.data[0]);

        }
        catch (error) {
            console.error('Error fetching response ', error);
        }
    }

    const loadNext = (dir) => {
        console.log("Inside this function with dir = ", dir, "currInd = ", currInd, " length = ", allPlants.length)
        const nextInd = (currInd + dir + allPlants.length) % (allPlants.length);
        console.log('This is the next index:', nextInd)
        setIsVisible(false);
        setCurrInd(nextInd);
        setCurrPlant(allPlants[nextInd]);
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }

    useEffect(() => {
        // console.log("INSIDE EFFECT currIND changed")
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, [currInd]);

    const handleOnClick = (ind) => {
        if(ind != currInd){
            // console.log("Index here is equals to = ", ind, ' and allplants  = ', allPlants);
            setIsVisible(false);
            setCurrInd(ind);
            console.log("CURR = ", allPlants[ind]);
            setCurrPlant(allPlants[ind]);
        }
    }

    const [plantInput, setPlantInput] = useState({
        plantName: plant.name,
        water: 'Select an option',
        sunlight: 'Select an option',
        fertilizer: 'Select an option',
        note: '',
        imageFile: ''
    });


    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        if (fileUploaded) {
            setImageName(fileUploaded.name.substr(0, 6) + '...');
            setPlantInput(prevState => ({ ...prevState, imageFile: fileUploaded }));
        }
    };

    // useEffect(() => {
    //     console.log('ALL PLANTS CHANGED = ', allPlants)
    //     if(refreshPlants && allPlants.length === 0)
    //         navigate('/bahaar/garden')
    // },[allPlants])

    const handleSave = async () => {

        console.log("PLANT INPUT + ", plantInput)

        // console.log("THIS IS THE DATA = ", plantInput, 'And this is the gerden id ', gardenId)
        try {
            const formData = new FormData();
            formData.append("image", plantInput.imageFile);
            formData.append("water", plantInput.water);
            formData.append("sunlight", plantInput.sunlight);
            formData.append("fertilizer", plantInput.fertilizer);
            formData.append("name", plantInput.plantName);
            formData.append("note", plantInput.note);
            formData.append("gardenId", plant.gardenId);

            const response = await axios.post('http://localhost:8080/addPlant', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const newPlant = response.data; // Adjust based on your API response

            // Update allPlants state directly
            //setAllPlants(prevPlants => [newPlant, ...prevPlants]);
            //setCurrPlant(newPlant); // Optionally set current plant to the new one
            setAddingNewPlant(false);
            setRefreshPlants(true);
            setPlantInput({
                plantName: plant.name,
                water: 'Select an option',
                sunlight: 'Select an option',
                fertilizer: 'Select an option',
                note: '',
                imageFile: ''
            })
            setImageName('')

            // plantAdded(false);
            // setTimeout(() => {
            //     setNotification({
            //         show: true,
            //         variant: 'success',
            //         message: 'new plant added'
            //     });
            //     window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            // }, '500');
        }
        catch (e) {
            console.log(e);
        }
    }

    const closed = () => {
        setNotificationDetails({
            ...notificationDetails,
            show: false
        });
    }

    useEffect(() => {
        const handleKeyPressEvent = (e) => {
            switch(e.key){
                case "ArrowRight":
                    loadNext(1);
                    break;
                case "ArrowLeft":
                    loadNext(-1);
                    break;
                default:
                    break;
            }
        }

        window.addEventListener("keydown", handleKeyPressEvent);
        return () => {
            window.removeEventListener("keydown", handleKeyPressEvent);
        };
    })

    const handleCancel = () => {
        setPlantInput({
            plantName: plant.name,
            water: 'Select an option',
            sunlight: 'Select an option',
            fertilizer: 'Select an option',
            note: '',
            imageFile: ''
        })
        setImageName('')
        setAddingNewPlant(false)
    }

    return (
        <>
            <PlantDetailsContainer>
                <Navbar />
                <MainContainer>
                    <AnimatedContent isVisible={isVisible}>
                        {!addingNewPlant ?
                            <PlantDataContainer>
                                <StyledPlantData1>{currPlant?.name}</StyledPlantData1>
                                <StyledPlantData2>Age: <StyledPlantData3>{calculateAge(currPlant?.addedOn)}</StyledPlantData3></StyledPlantData2>
                                <StyledPlantData2>Water: <StyledPlantData3>{waterMapping[currPlant?.water]}</StyledPlantData3></StyledPlantData2>
                                <StyledPlantData2>Sunlight: <StyledPlantData3>{sunlightMapping[currPlant?.sunlight]}</StyledPlantData3></StyledPlantData2>
                                <StyledPlantData2>Fertilizer: <StyledPlantData3>{fertilizerMapping[currPlant?.fertilizer]}</StyledPlantData3></StyledPlantData2>
                                <StyledPlantNote>{currPlant?.note}</StyledPlantNote>
                                <p style={{ position: 'absolute', bottom: '0' }}>
                                    <MyButton text={'Add new'} Icon={<AddIcon fontSize="medium" />} width={'150px'} action={() => { setAddingNewPlant(true) }} />
                                </p>
                            </PlantDataContainer>
                            :
                            <PlantDataContainer>
                                <StyledPlantData1>{currPlant?.name}</StyledPlantData1>
                                <StyledPlantData2>Water:
                                    <StyledSelect value={plantInput.water} onChange={(e) => setPlantInput({ ...plantInput, water: e.target.value })} selected={plantInput.water}>
                                        <option value="Select an option" disabled>Select an option</option>
                                        {waterOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </StyledSelect>
                                </StyledPlantData2>
                                <StyledPlantData2>Sunlight:
                                    <StyledSelect value={plantInput.sunlight} onChange={(e) => setPlantInput({ ...plantInput, sunlight: e.target.value })} selected={plantInput.sunlight}>
                                        <option value="Select an option" disabled>Select an option</option>
                                        {sunlightOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </StyledSelect>
                                </StyledPlantData2>
                                <StyledPlantData2>Fertilizer:
                                    <StyledSelect value={plantInput.fertilizer} onChange={(e) => setPlantInput({ ...plantInput, fertilizer: e.target.value })} selected={plantInput.fertilizer}>
                                        <option value="Select an option" disabled>Select an option</option>
                                        {fertilizerOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </StyledSelect>
                                </StyledPlantData2>
                                <StyledTextareaPlant placeholder="Write a note" maxLength={246} value={plantInput.note} onChange={(e) => setPlantInput({ ...plantInput, note: e.target.value })} />

                                <p style={{ position: 'absolute', bottom: '0' }}>
                                    <MyButton text={'Save'} Icon={<SaveIcon fontSize="medium" />} width={'120px'} action={() => handleSave()} />
                                    <MyButton text={'Cancel'} Icon={<CancelIcon fontSize="medium" />} width={'120px'} action={() => handleCancel()} />
                                </p>
                            </PlantDataContainer>}
                        {!addingNewPlant ? <img style={{ width: '50%', height: '100%', objectFit: 'cover', borderRadius: '30px', boxShadow: '4px 4px 8px rgb(0, 0 ,0 ,80%)' }} src={currImage} alt="Money Plant" />
                            :
                            <GardenEmptyImgContainer width='50%'>
                                <MyButton text={imageName ? imageName : 'Add image'} Icon={<InsertPhotoIcon fontSize="medium" />} width={'150px'} action={handleClick}></MyButton>
                                <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{ display: 'none' }} />
                            </GardenEmptyImgContainer>
                        }
                    </AnimatedContent>
                </MainContainer>
                {!addingNewPlant && <>
                    <StyledLeftChevron onClick={() => loadNext(-1)}>
                        <ArrowBackIosIcon fontSize="large" />
                    </StyledLeftChevron>
                    <StyledRightChevron onClick={() => loadNext(1)}>
                        <ArrowForwardIosIcon fontSize="large" />
                    </StyledRightChevron>
                </>}
            </PlantDetailsContainer>
            <PlantContainer>
                {!refreshPlants && allPlants.map((plant, ind) => <PlantHistoryCard key={plant.id} onClick={() => handleOnClick(ind)} isActive={ind === currInd} setImage={setImagesrc} plant={plant} refreshPlants={setRefreshPlants} setNotification={setNotificationDetails} />)}
                {notificationDetails.show &&
                    <NotificationBox
                        variant={notificationDetails?.variant}
                        message={notificationDetails?.message}
                        closed={closed} />
                }
            </PlantContainer>
        </>
    );
};


