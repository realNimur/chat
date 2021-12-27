import React from 'react';
import {Avatar, Grid} from "@mui/material";

type MessageTypeProps = {
    photoURL: string,
    displayName: string,
    text: string,
    ownMessage: boolean
}

const Message = ({photoURL, displayName, text, ownMessage}: MessageTypeProps) => {
    return (
        <>
            <Grid
                container
                style={{
                    margin: '10px',
                    border: ownMessage ? '2px solid green' : '2px solid red',
                    marginLeft: ownMessage ? 'auto' : '10',
                    width: 'fit-content',
                    padding: '5px'
                }}
            >
                <Avatar src={photoURL}></Avatar>
                <p>{displayName}</p>
            </Grid>
            <p style={{textAlign: ownMessage ? 'right' : 'left'}}>{text}</p>
        </>
    );
};

export default Message;