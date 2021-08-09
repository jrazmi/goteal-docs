import Link from "next/link";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

import styled from 'styled-components';

const Brand = styled(Navbar.Brand)`
    width: 150px;
`;

export const SiteNav = () => (

    <Navbar>
        <Container>
        <Link href="/" as={process.env.BACKEND_URL + '/'} passHref>
            <Brand>
                <img src="/img/goteal_horizontal.png" alt="GoTeal" />
            </Brand>

        </Link>
        <Navbar.Toggle aria-controls="header-nav" />
        <Navbar.Collapse id="header-nav" className="justify-content-end">
            <Nav>
                <Link href="/about" as={`${process.env.BACKEND_URL}/about`} passHref>
                    <Nav.Link>
                        About
                    </Nav.Link>
                </Link>

                <NavDropdown title="Docs" id="docs-dropdown">
                    <Link href="/docs/getting-started" as={`${process.env.BACKEND_URL}/docs/getting-started`} passHref>
                        <NavDropdown.Item>
                            Getting Started
                        </NavDropdown.Item>
                    </Link>

                    <Link href="/docs/goteal" as={`${process.env.BACKEND_URL}/docs/goteal`} passHref>
                        <NavDropdown.Item>
                            Go Teal
                        </NavDropdown.Item>
                    </Link>

                    <Link href="/docs/types" as={`${process.env.BACKEND_URL}/docs/types`} passHref>
                        <NavDropdown.Item>
                            Types
                        </NavDropdown.Item>
                    </Link>

                    <Link href="/docs/avm" as={`${process.env.BACKEND_URL}/docs/avm`} passHref>
                        <NavDropdown.Item>
                            AVM
                        </NavDropdown.Item>
                    </Link>

                </NavDropdown>
            </Nav>
        </Navbar.Collapse>


        </Container>
    </Navbar>
)
