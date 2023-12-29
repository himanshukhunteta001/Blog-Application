import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="custom-navbar">
            <Container>
                <Navbar.Brand href='/' className='brand'>

                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        WriteHub
                    </Link>


                </Navbar.Brand>

                <Navbar.Brand >
                    <Link to="/add-new-blog" style={{ color: 'white', textDecoration: 'none' }}>
                        New Post
                    </Link>
                </Navbar.Brand>

            </Container>
        </Navbar>
    );
};

export default Header;
