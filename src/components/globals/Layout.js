
import { Main, MainNavBar, AppFooter } from "./styled";

export const Layout = ({children}) => {

    return(
        <>
        <header>
            <MainNavBar  />
        </header>

          
        <Main>
            {children}
        </Main>
        <AppFooter />
           
        </>
    )
}