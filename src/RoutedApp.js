import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import * as Pages from './pages';
import { Layout, GlobalStyle, DarkTheme, LightTheme } from './components/globals';
import { useApp } from './components/providers/AppProvider';

const RouteMap = [
    {   
        path: '/about',
        component: Pages.About
    }, 
    {
        path: '/docs',
        component: Pages.Docs
    }
]

export const RoutedApp = () => {
    const location = useLocation();
    const { theme } = useApp()
    const themeMode = theme === 'light' ? LightTheme : DarkTheme;
  

   
  
    return(
        <ThemeProvider theme={themeMode}>
            <>
            <GlobalStyle />
            <AnimatePresence exitBeforeEnter initial={false}>
                <Layout>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/">
                            <Pages.Home />
                        </Route>
                        {
                            RouteMap.map((route, idx) => (
                                <Route key={idx} path={route.path} component={route.component} />
                                ))
                            }   
                    </Switch>
                </Layout>
            </AnimatePresence>
            </>
        </ThemeProvider>
    )
}