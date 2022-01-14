import React from 'react';
import {Avatar, Card, CardHeader, IconButton,CardContent} from "@mui/material";

type MessageTypeProps = {
    photoURL: string,
    displayName: string,
    text: string,
    ownMessage: boolean,
    dateCreate: string | null
}

const Message = ({photoURL, displayName, text, ownMessage,dateCreate}: MessageTypeProps) => {
    return (
        <Card  style={{
            margin: '10px',
            border: ownMessage ? '2px solid #EFEDF0' : '2px solid #000',
            marginLeft: ownMessage ? 'auto' : '10',
            width: 'fit-content',
            padding: '5px',
            paddingBottom: '15px'
        }}>
            <CardHeader
                avatar={
                    <Avatar src={photoURL}></Avatar>
                }
                title={displayName}
                subheader={dateCreate}
            />
            <CardContent style={{paddingBottom: '5px'}}>
                {text}
            </CardContent>

        </Card>
    );
};

export default Message;