import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar>
                <Grid container justifyContent={'right'}>
                    {user ?
                        <Button
                            variant={'outlined'}
                            onClick={() => signOut(auth)}
                        >Выйти</Button>
                        :
                        <Button onClick={() => navigate(LOGIN_ROUTE)} variant={'outlined'}>Войти</Button>}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;