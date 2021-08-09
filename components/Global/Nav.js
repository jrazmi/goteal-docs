import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";
import Image from 'next/image';
import GoTealHorizontal from '../../public/img/goteal_horizontal.png';
import styled from 'styled-components';

const Brand = styled(Navbar.Brand)`
    width: 150px;
`;

export const SiteNav = () => (

    <Navbar>
        <Container bsPrefix="container-fluid">
        <Link href="/" as={process.env.BACKEND_URL + '/'} passHref>
            <Brand>
                <Image src={GoTealHorizontal} alt="GoTeal" quality={100}/>
            </Brand>

        </Link>
        </Container>
    </Navbar>
)
