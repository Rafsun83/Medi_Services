import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../../Components/Header/Header.css'
import CottageIcon from '@mui/icons-material/Cottage';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Header = () => {
    return (
        <Navbar className='header__nav' variant="light">
            <Container>
                <Navbar.Brand href="#home" className='Medi__service'> <MedicalServicesIcon style={{ color: 'green' }} ></MedicalServicesIcon> <span style={{ color: 'red' }}>Medi</span><span style={{ color: 'green' }}>Service</span> </Navbar.Brand>
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
                    <Nav.Link href='#user' className='navtext'><Avatar style={{ width: '24px', height: '24px' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> User</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;