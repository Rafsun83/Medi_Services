import { Avatar, Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import '../../Components/HomeLeft/HomeLeft.css'
import pro from '../../Images/profileRafsun.jpg'

const HomeLeft = () => {
    return (
        <Box
            className='Left__home'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 328,
                    height: 'auto',
                },
            }}
        >

            <Paper elevation={3}>
                <Box>
                    <Avatar className='profile___user' alt="Remy Sharp" src={pro} />
                </Box>
                <Box>
                    <p style={{ fontWeight: 'bold', marginBottom: 0 }} >Rafsun jani</p>
                    <Typography>ID: 171821030</Typography>
                    <Divider></Divider>

                </Box>
                <Box style={{ textAlign: 'left', padding: '20px' }}>
                    <Typography>Age: 23 Years</Typography>
                    <Typography>Father's Name: XYZ</Typography>
                    <Typography>Mother's Name: ABC</Typography>
                    <Typography>Date of Birth: 02 Dec 1999</Typography>

                </Box>
            </Paper>
        </Box>
    );
};

export default HomeLeft;