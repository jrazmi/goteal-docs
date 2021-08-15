import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Navbar as BSNavbar, Container, Nav as BSNav } from 'react-bootstrap';
import { useDarkMode } from '../../hooks';

const Navbar = styled(BSNavbar)`
    width: 100%;
    background-color: ${props => props.theme.colors.body};
    .navbar-brand {
        img {
            width: 100px;
        }
    }
`;
const Nav = styled(BSNav)`
        
    
`;
    


export const MainNavBar = ({toggleTheme}) => {
    const [theme] = useDarkMode();
    return(
        <Navbar expand="lg">
            <Container>
            <Navbar.Brand  as={Link} to="/">
                { theme === 'light' ? (
                    <img src={`${process.env.PUBLIC_URL}/img/goteal_horizontal.png`} />
                ) : (
                    <img src={`${process.env.PUBLIC_URL}/img/goteal_horizontal_white.png`} />
                )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                
                <Nav.Link onClick={toggleTheme}>
                    Toggle
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>

            </Container>
        </Navbar>
       
    )
}