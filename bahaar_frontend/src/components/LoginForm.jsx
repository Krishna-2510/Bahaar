import React, { useEffect, useState } from "react";
import { Spacer, StyledAuthContainer, StyledAuthHeading, StyledAuthText, StyledSpan } from "../style/style";
import { InputBox } from "./InputBox";
import { MyButton } from "./MyButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from "../actions/userActions";

export const LoginForm = ({ toggleLogin }) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [apiResponse, setApiresponse] = useState({
        data: null,
        loading: false,
        error: false,
        message: ''
    })
    const [showInitialText, setShowinitialtext] = useState(true);
    const navigate = useNavigate();
    const handleLogin = async () => {
        console.log("Inside fn with data =", { 'email': email, 'password': password });
        setShowinitialtext(false);
        setApiresponse({
            ...apiResponse,
            loading: true
        })
        try {
            const response = await axios.post('http://localhost:8080/signin',
                { 'email': email, 'password': password });
            console.log("RES=", response);
            setApiresponse({
                data: response.data.user,
                loading: false,
                message: response.data.message
            });
            dispatch(loginSuccess(response.data.user));
            sessionStorage.setItem('userName', response.data.user.name);
            sessionStorage.setItem('userId', response.data.user.id);
            setTimeout(loadLandingPage, 2000);
        }
        catch (e) {
            console.log("ERROR ", e.response.data.message);
            setApiresponse({
                loading: false,
                error: true,
                message: e.response.data.message
            })
        }
    }

    const loadLandingPage = () => {
        navigate('/bahaar/account');
    }

    return (
        <StyledAuthContainer>
            <StyledAuthHeading>Welcome back</StyledAuthHeading>
            {apiResponse.loading && <StyledAuthText color="cyan">Loading...</StyledAuthText>}
            {apiResponse.error && <StyledAuthText color="#ff3333">{apiResponse.message}</StyledAuthText>}
            {!apiResponse.loading && !apiResponse.error && <StyledAuthText color="#749F2A">{apiResponse.message}</StyledAuthText>}
            {showInitialText && <StyledAuthText color="#A5A5A5">Login to your account</StyledAuthText>}
            <InputBox iconType={'email'} placeholder={'Enter your email'} value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <InputBox iconType={'password'} placeholder={'Enter your password'} value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <Spacer />
            <MyButton text="Login" action={() => handleLogin()} width={'200px'} />
            <StyledAuthText color="#A5A5A5">Don't have an account? <StyledSpan onClick={toggleLogin}>Sign Up</StyledSpan></StyledAuthText>
        </StyledAuthContainer>
    )
}