import React from 'react';
import {Box, Button, CircularProgress, Grid} from "@mui/material";

const Loader = () => {
    return (
        <Grid
            container
            sx={{flexGrow: 1}}
            display={'inline'}
            position={'fixed'}
            top={'50%'}
            left={'50%'}
        >
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </Grid>
    );
};

export default Loader;