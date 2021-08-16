import PropTypes from 'prop-types';
import { DocSideNav } from './DocSideNav';

export const DocLayout = ({children}) => {
    return(
        <>
            <DocSideNav />
            {children}

        </>
    )
}

DocLayout.propTypes = {
    children: PropTypes.node.isRequired
}