import { Avatar, Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import '../../Components/HomeMiddle/HomeMiddle.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import RateReviewIcon from '@mui/icons-material/RateReview';


const HomeMiddle = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 650,
                    height: 'auto',
                },
            }}
        >

            <Paper elevation={3}>
                <Box className='profile___user__middle'>
                    <div>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>

                    <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Your Opinion"
                            multiline
                            className='post__box'


                        />
                    </div>

                </Box>
                <Box className='Post__tag'>
                    <div>
                        <Button variant="text"> <AddPhotoAlternateIcon></AddPhotoAlternateIcon> Photo</Button>

                    </div>
                    <div>
                        <Button variant="text"><OndemandVideoIcon></OndemandVideoIcon> Video</Button>

                    </div>
                    <div>
                        <Button variant="text"> <RateReviewIcon></RateReviewIcon> Write Information</Button>

                    </div>
                </Box>

            </Paper>


        </Box>

    );
};

export default HomeMiddle;