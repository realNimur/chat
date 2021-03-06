import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import {useAuthState} from "react-firebase-hooks/auth";
import {addDoc, collection, orderBy, query, serverTimestamp} from "firebase/firestore";
import Message from "./Message";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        query(collection(firestore, 'messages'), orderBy('createdAt'))
    );

    const sendMessage = async () => {
        if (user) {
            const {uid, displayName, photoURL} = user;

            await addDoc(collection(firestore, "messages"), {
                uid,
                displayName,
                photoURL,
                text: value,
                createdAt: serverTimestamp()
            });
            setValue('');
        }
    }

    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            <Grid container justifyContent={"center"} sx={{flexGrow: 1}}>
                <div style={{
                    width: '80%',
                    height: '70vh',
                    border: '1px solid gray',
                    overflowY: 'auto',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}>
                    {messages?.map((message, item) => {
                        return <Message
                            ownMessage={message.uid === (user && user.uid)}
                            key={item}
                            photoURL={message.photoURL}
                            displayName={message.displayName}
                            text={message.text}
                            dateCreate={new Date(message.createdAt?.seconds * 1000).toUTCString()}
                        />
                    })}
                </div>
                <Grid
                    container
                    direction={'column'}
                    alignItems={'end'}
                    justifyContent={"center"}
                    sx={{flexGrow: 1}}
                >
                    <TextField
                        fullWidth
                        maxRows={'2'}
                        variant={'outlined'}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        sx={{ mb: "5px" }}
                    />
                    <Button
                        variant={'outlined'}
                        onClick={sendMessage}
                    >??????????????????</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;