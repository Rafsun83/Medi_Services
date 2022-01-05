import { Avatar, Box, ImageList, ImageListItem, ImageListItemBar, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import pro from '../../Images/profileRafsun.jpg'
import { ImageGroup, Image } from 'react-fullscreen-image'


const Timeline = () => {

    const [Posts, setPost] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/UserPost')
            .then(res => res.json())
            .then(data => setPost(data))

    }, [])


    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: "auto",
                    },
                }}
            >

                <Paper elevation={3}>
                    <Box style={{ padding: '10px' }}>
                        <Avatar style={{ width: '160px', height: '160px' }} alt="Cindy Baker" src={pro} />
                    </Box>
                    <Box style={{ textAlign: 'left', padding: '20px' }}>
                        <Typography variant='h6'> Rafsun jani</Typography>
                        <Typography> ID: 17142461</Typography>
                        <Typography variant='caption'> Cumilla.chittagong.Bangladesh <a href="">Contact info</a></Typography>
                    </Box>
                    <Box style={{ textAlign: 'left', padding: '20px' }}>
                        <Typography variant='body1'> <span style={{ fontWeight: 'bold' }}>Age:</span> 23 Years</Typography>
                        <Typography variant='body1'><span style={{ fontWeight: 'bold' }}>Father's Name:</span> XYZ</Typography>
                        <Typography variant='body1'><span style={{ fontWeight: 'bold' }}>Mother's Name:</span> ABC</Typography>
                        <Typography variant='body1'><span style={{ fontWeight: 'bold' }}>Date of Birth:</span> 02 Dec 1999</Typography>



                    </Box>

                </Paper>


                <Paper elevation={3}>
                    <Box>
                        {/* {
                            Posts.map(post => <Timelines
                                key={post._id}
                                post={post}

                            ></Timelines>)
                        } */}

                        <ImageList sx={{ width: 1280, height: 450 }}>
                            {Posts.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        style={{ width: '400px', padding: '20px' }}
                                        src={`data:image/png;base64, ${item.image}`}
                                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.status}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        style={{ textAlign: 'left', padding: '20px' }}
                                        title={item.status}
                                        subtitle={<span>by: {item.status}</span>}
                                        position="below"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>

                </Paper>
            </Box>
        </Container>
    );
};

export default Timeline;