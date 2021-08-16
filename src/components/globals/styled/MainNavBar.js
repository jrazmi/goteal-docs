import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Navbar as BSNavbar, Container, Nav as BSNav } from 'react-bootstrap';
import { useApp } from '../../providers/AppProvider';

import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill';
import { SunFill } from '@styled-icons/bootstrap/SunFill';
import { GithubAlt } from '@styled-icons/fa-brands/GithubAlt';
const Navbar = styled(BSNavbar)`
    display: flex;
    background-color: ${props => props.theme.colors.off};
    border-bottom: 1px solid ${props => props.theme.colors.body};
    ${(props) => props.ctheme === "light" && 'border-bottom: 1px solid #ddd;'};

    .navbar-brand {
        img {
            margin-top: 2px;
            width: 100px;
        }
    }
    .nav-link {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 16px;
        svg {
            width:15px;
        }
    }


`;
const Nav = styled(BSNav)`
        
    
`;

const Separator = styled('div')`
    margin: 5px 10px;
    width: 1px;
    background-color: ${props => props.theme.colors.title};

`;
    
const DrawerToggle = styled('div')`
    width: 30px;
    height: 50px;
    position: relative;
    right: 15px;
    top: 12px;
    span {
        display: inline-block;
        margin: 0.4em 0;
        position: relative;

    }

    span:before,
    span:after,
    span {
        transition: all 0.3s ease-in-out;
        width: 100%;
        height: 2px;
        border-radius: 5px;
        background: ${props => props.theme.colors.title};
    }
    span:after,
    span:before {
        content: '';
        left: 0;
        position: absolute;
    }
    span:before {
        top: 10px;
    }
    span:after {
        bottom: 10px;
    }

`;

export const MainNavBar = () => {
    const { theme, toggleTheme, toggleDrawer } = useApp();
    return(
        <Navbar expand="lg" ctheme={theme}>
          
            <Container>

            <DrawerToggle onClick={toggleDrawer}>
                <span></span>
            </DrawerToggle>
            

            <Navbar.Brand as={Link} to="/" >
                { theme === 'light' ? (
                    <img src={`${process.env.PUBLIC_URL}/img/goteal_horizontal.png`} alt="go teal"/>
                ) : (
                    <img src={`${process.env.PUBLIC_URL}/img/goteal_horizontal_white.png`} alt="go teal"/>
                )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/docs">Docs</Nav.Link>
                <Separator />
                <Nav.Link href="https://github.com/tmc/goteal" target="_blank"><GithubAlt/></Nav.Link>
                <Separator />
                <Nav.Link onClick={toggleTheme}>
                    {
                        theme === 'light' ? (
                            <SunFill />
                        ) : (
                            <MoonStarsFill />
                        )
                    }
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>

            </Container>
        </Navbar>
       
    )
}