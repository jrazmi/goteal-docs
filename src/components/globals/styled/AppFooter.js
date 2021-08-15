import styled from 'styled-components';
import { useApp } from '../../providers/AppProvider';

const Footer = styled("footer")`
    padding: 100px 0px;
    border-top: 1px solid ${props => props.theme.colors.off};
    ${(props) => props.ctheme === "light" && 'border-top: 1px solid #ddd;'};
    .footer-logo {
        display: block;
        width: 200px;
        max-width: 100%;
        margin: 15px auto;
    }
`;

export const AppFooter = () => {
      const { theme } = useApp();

    return(
        <Footer ctheme={theme}>
                { theme === 'light' ? (
                    <img className="footer-logo" src={`${process.env.PUBLIC_URL}/img/goteal_vertical.png`} alt="go teal"/>
                ) : (
                    <img className="footer-logo" src={`${process.env.PUBLIC_URL}/img/goteal_vertical_white.png`} alt="go teal"/>
                )}
        </Footer>
    )
}