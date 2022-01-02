import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import profile from '../../Images/Profile-Picture.jpg'
import '../../Components/HomeMiddle/HomeMiddlepost.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ForumIcon from '@mui/icons-material/Forum';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
const HomeMiddlepost = () => {
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
                <Box className='Middle__Post'>
                    <div className='Middle__Post__img'>
                        <img style={{ width: '80px', height: '80px', alignItems: 'left', padding: '15px' }} src={profile} alt="" />
                        <div>
                            <Typography>Dhaka Medical Collage</Typography>
                            <Typography variant="caption" display="block">198524 followers</Typography>
                            <Typography variant="caption" display="block">55m . <PublicIcon></PublicIcon> </Typography>
                        </div>


                    </div>
                    <div>
                        <span><MoreHorizIcon></MoreHorizIcon></span>
                    </div>
                </Box>

                <Box>
                    <Typography style={{ textAlign: 'left', padding: '15px' }}>

                        4-6 years of finance-related experience ideally in the non-profit sector in Bangladesh. Strong technical financial accounting and reporting experience, with at least 2 years working for accounting/auditing firm, and at least 5 years in supervisory role managing 3 finance staff or more
                    </Typography>
                    <img style={{ width: '610px', height: '450px' }} src={profile} alt="" />
                </Box>
                <Divider style={{ marginTop: '1rem' }} ></Divider>
                <Box className='Opinion__button'>
                    <Button variant="text"><ThumbUpAltIcon></ThumbUpAltIcon> Like</Button>
                    <Button variant="text"><ForumIcon></ForumIcon> Comment</Button>
                    <Button variant="text"><ReplyAllIcon></ReplyAllIcon> Share</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default HomeMiddlepost;