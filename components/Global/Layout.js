import PropTypes from 'prop-types'
import styled from 'styled-components';

const Header = styled("header")`
    padding: 200px;

`;
export const Layout = ({children}) => {
    return(
        <>
            <Header>Hello world</Header>
            {children}
        

        </>
    )
    
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}