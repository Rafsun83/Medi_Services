import React from 'react';
import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import '../../Components/Header/Header.css'
import CottageIcon from '@mui/icons-material/Cottage';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar, Button, Menu, MenuItem, Typography } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import pro from '../../Images/profileRafsun.jpg'
import { Link } from 'react-router-dom';

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Navbar className='header__nav' variant="light">
            <Container>
                <Navbar.Brand className='Medi__service'> <MedicalServicesIcon style={{ color: 'green' }} ></MedicalServicesIcon> <span style={{ color: 'red' }}>Medi</span><span style={{ color: 'green' }}>Service</span> </Navbar.Brand>
                <Nav className="me-auto">
                    <form action="/" method="get">
                        <label htmlFor="header-search">
                            <span className="visually-hidden">Search blog posts</span>
                        </label>
                        <input
                            className='input__box'
                            type="text"
                            id="header-search"
                            placeholder="Search blog posts"
                            name="s"
                        />

                    </form>
                </Nav>
                <Nav>
                    <Nav.Link href='#Home' className='navtext' > <CottageIcon></CottageIcon> <br /> Home</Nav.Link>
                    <Nav.Link href='#News' className='navtext'> <NewspaperIcon></NewspaperIcon> <br /> News</Nav.Link>
                    <Nav.Link href='#Notify' className='navtext'> <NotificationsActiveIcon></NotificationsActiveIcon> <br />Notification</Nav.Link>
                    <Nav.Link className='navtext'>
                        <Typography
                            onClick={handleClick}
                            variant="caption"

                        >
                            <Avatar style={{ width: '24px', height: '24px' }} alt="Remy Sharp" src={pro} />

                            Rafsun</Typography>


                        {/* <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            
                        >
                            Rafsun
                        </Button> */}
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}><Link to="/timeline" className='profile__link' >View Profile</Link></MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>


                        </Menu>
                    </Nav.Link>


                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;