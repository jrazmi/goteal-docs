import PropTypes from 'prop-types'
import { SiteNav } from './Nav'
export const Layout = ({children}) => {
    return(
        <>
            <SiteNav />
            {children}
        

        </>
    )
    
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}