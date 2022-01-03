import { Avatar, Box, Button, Divider, Modal, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import '../../Components/HomeMiddle/HomeMiddle.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import RateReviewIcon from '@mui/icons-material/RateReview';
import pro from '../../Images/profileRafsun.jpg'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,




};


const HomeMiddle = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/UserPost', data)
            .then(res => {
                if (res.data.insertedId) {
                    // alert('added sucessfully')
                    reset();
                }
            })
        console.log(data);
    }

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
                        <Avatar alt="Remy Sharp" src={pro} />
                    </div>

                    <div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Your Opinion"
                                multiline
                                rows={4}
                                className='post__box'
                                onClick={handleOpen}
                                {...register("Status")}


                            />
                            {/* <input {...register("firstName")} /> */}

                            <Button type='Submit' >Post</Button>
                        </form>


                        {/* <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Your Opinion"
                                    multiline
                                    rows={4}
                                    className='post__box'
                                    onClick={handleOpen}



                                /> <br />
                                <Button>Post</Button>
                            </Box>
                        </Modal> */}

                    </div>

                </Box>
                <Box className='Post__tag'>
                    <div>
                        <Button variant="text"  > <AddPhotoAlternateIcon></AddPhotoAlternateIcon> Photo</Button>

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