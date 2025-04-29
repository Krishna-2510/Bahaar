import React, { useState, useEffect, useRef } from "react";
import { NotifDetails, NotifHeading, StyledNotification, StyledNotifMessage } from "../style/style";
import DoneIcon from '@mui/icons-material/Done';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CloseIcon from '@mui/icons-material/Close';
export const NotificationBox = ({ variant, message, closed }) => {
    const [show, setShow] = useState(true);
    const notifRef = useRef(null);
    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        setTimeout(() => {
            setShow(false);
            closed();
        },'3000')
    }, []);
    return (
        <>
            {show && variant === 'success' &&
                <StyledNotification ref={notifRef} outline='#81d158'>
                    <NotifDetails>
                        <DoneIcon fontSize="medium" htmlColor="#81d158" />
                        <StyledNotifMessage><NotifHeading color="#81d158">Success:</NotifHeading>{message}</StyledNotifMessage>
                    </NotifDetails>
                    <CloseIcon fontSize="small" htmlColor="white" onClick={() => {
                        setShow(false);
                        closed();
                    }} />
                </StyledNotification>
            }
            {show && variant === 'error' &&
                <StyledNotification ref={notifRef} outline='#f16a6a'>
                    <NotifDetails>
                        <PriorityHighIcon fontSize="medium" htmlColor="#f16a6a" />
                        <StyledNotifMessage><NotifHeading color="#f16a6a">Error:</NotifHeading>{message}</StyledNotifMessage>
                    </NotifDetails>
                    <CloseIcon fontSize="small" htmlColor="white" onClick={() => {
                        setShow(false);
                        closed();
                    }} />
                </StyledNotification>
            }
        </>
    )
}