import React, {useContext} from 'react';
import {Box, Button, Grid} from "@mui/material";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Context} from "../index";


const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider);
        console.log(user)
    }

    return (
        <Grid
            container
            sx={{flexGrow: 1}}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Grid
                container
                alignItems={"center"}
                direction={'column'}
            >
                <Box p={5}>
                    <Button
                        variant={'outlined'}
                        onClick={login}
                    >Войти с помощью Google</Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;