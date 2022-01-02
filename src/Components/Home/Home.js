import { Box, Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import HomeLeft from '../HomeLeft/HomeLeft';
import HomeMiddle from '../HomeMiddle/HomeMiddle';
import HomeMiddlepost from '../HomeMiddle/HomeMiddlepost';
import HomeRight from '../HomeRight/HomeRight';

const Home = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <HomeLeft></HomeLeft>
                    </Grid>
                    <Grid item xs={6}>
                        <HomeMiddle></HomeMiddle>
                        <HomeMiddlepost></HomeMiddlepost>
                    </Grid>
                    <Grid item xs={3}>
                        <HomeRight></HomeRight>
                    </Grid>


                </Grid>
            </Box>
        </Container>
    );
};

export default Home;