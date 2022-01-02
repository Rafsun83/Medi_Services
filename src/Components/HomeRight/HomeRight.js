import { Avatar, Box, Button, Divider, Paper } from '@mui/material';
import React from 'react';
import '../../Components/HomeRight/HomeRight.css'
import AddIcon from '@mui/icons-material/Add';

const HomeRight = () => {
    return (
        <Box
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
                    <h6 style={{ textAlign: 'left', padding: '10px' }}>Add to your feed</h6>
                </Box>
                <Box className='Hospital__list'>
                    <div>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <p style={{ marginBottom: 0, fontWeight: 'bold' }}>Dhaka Medical</p>
                        <span style={{ fontSize: '13px' }}> Dhaka,1216,Dhaka
                        </span> <br />
                        <Button variant="outlined"> <AddIcon></AddIcon> Follow</Button>
                    </div>
                </Box>
                <Box className='Hospital__list'>
                    <div>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <p style={{ marginBottom: 0, fontWeight: 'bold' }}>Cumilla Medical</p>
                        <span style={{ fontSize: '13px' }}> Cumilla,1016,Chittagong
                        </span> <br />
                        <Button variant="outlined"> <AddIcon></AddIcon> Follow</Button>
                    </div>
                </Box>
                <Box className='Hospital__list'>
                    <div>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <p style={{ marginBottom: 0, fontWeight: 'bold' }}>Chittagong Medical</p>
                        <span style={{ fontSize: '13px' }}> Chittagong,1116,Chittagong
                        </span> <br />
                        <Button variant="outlined"> <AddIcon></AddIcon> Follow</Button>
                    </div>
                </Box>
                <Box className='Hospital__list'>
                    <div>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <p style={{ marginBottom: 0, fontWeight: 'bold' }}>Barishal Medical</p>
                        <span style={{ fontSize: '13px' }}> Barishal,1216,Dhaka
                        </span> <br />
                        <Button variant="outlined"> <AddIcon></AddIcon> Follow</Button>
                    </div>
                </Box>


            </Paper>
        </Box>
    );
};

export default HomeRight;