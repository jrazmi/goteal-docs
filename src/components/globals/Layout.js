
import { Main, MainNavBar } from "./styled";

export const Layout = ({children, toggleTheme}) => {

    return(
        <>
        <header>
            <MainNavBar toggleTheme={toggleTheme} />
        </header>
        <Main>
            
            {children}
        </Main>
        <footer>
            footer
        </footer>
        </>
    )
}