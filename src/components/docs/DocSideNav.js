import { Fragment } from 'react';
import styled from 'styled-components';
import { useApp } from '../providers/AppProvider';
import { motion } from 'framer-motion';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DocsTree } from '../../util';

const SideNavWrapper = styled(motion.aside)`
    background-color: #fff;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    list-style: none;
    min-height: 100vh;
    margin: 0;
    position: absolute;
    background-color: ${props => props.theme.colors.offtwo};

    @media(min-width: 1200px){
        position: relative;
    }

    

`;

const SideNav = styled(Nav)`
list-style: none;
margin: 0;
padding: 15px;
`


const SubNav = styled(Nav)`
list-style: none;
margin: 0px 5px;
padding: 5px;
font-size: .8rem;
`

const sideNavVariants = {
    open: { 
        width: 300,
        transition: { duration: 0.5,},
    },
    closed: {
        width: 0,
        transition: { duration: 0.5,}
    }

}

const listItemVariants = {
    open: {
        scale: 1,
        opacity: 1,
        transition:{
            duration: .2,
            delay: .1,
        }
    },
    closed: {
        scale: 0,
        opacity: 0,
        transition: {
            duration: .2,
        }
    }
}

const subListItemVariants = {
    open: {
        scale: 1,
        opacity: 1,
        transition:{
            duration: .2,
            delay: .1,
        }
    },
    closed: {
        scale: 0,
        opacity: 0,
        transition: {
            duration: .2,
        }
    }
}





export const DocSideNav = () => {
    const { drawer } = useApp();

    return (
   
            <SideNavWrapper
                variants={sideNavVariants}
                animate={drawer}
                initial={drawer}
            >
                <SideNav className="flex-column">
                    {DocsTree.map((doc) => {
                        return(
                            <Fragment key={doc.uuid}>
                                
                                <Nav.Item>
                                    <motion.span 
                                        variants={listItemVariants}
                                        animate={drawer}
                                        initial={drawer}
                                        >
                                                {doc.path}
                                    </motion.span>
                                </Nav.Item>
                                {
                                    doc.pages && (
                                        <SubNav>
                                            {doc.pages.map((page, idx) => {
                                                return(
                                                <Nav.Item key={idx}>
                                                     <motion.span 
                                                        variants={subListItemVariants}
                                                        animate={drawer}
                                                        initial={drawer}
                                                        >
                                                            <Nav.Link as={Link} to={`/docs/${doc.path}/${page.path}`}>
                                                                {page.path}
                                                            </Nav.Link>
                                                    </motion.span>

                                                </Nav.Item>

                                                )
                                            })}
                                        </SubNav>
                                    )
                                }
                            </Fragment>
                        )
                    })}
                {/* <Nav.Item>
                <motion.span
                    variants={listItemVariants}
                    animate={drawer}
                    >
                    <Nav.Link as={Link} to="/docs/goteal">
                        GoTeal
                    </Nav.Link>
                </motion.span>
                </Nav.Item>
                <Nav.Item>
                <motion.span
                    variants={listItemVariants}
                    animate={drawer}
                    >
                        <Nav.Link as={Link} to="/docs/avm">
                        AVM
                    </Nav.Link>
                </motion.span>
                </Nav.Item>
                <Nav.Item>
                    
                <motion.span
                    variants={listItemVariants}
                    animate={drawer}
                    >
                    hi
                </motion.span>
                </Nav.Item> */}
                </SideNav>
            </SideNavWrapper>

    )
   
}