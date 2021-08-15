import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import * as Pages from './pages';
import { Layout, GlobalStyle, DarkTheme, LightTheme } from './components/globals';
import { useDarkMode } from "./components/hooks";

const RouteMap = [
    {   
        'path': '/about',
        'component': Pages.About
    }
]

export const RoutedApp = () => {
    const location = useLocation();
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    const themeMode = theme === 'light' ? LightTheme : DarkTheme;
  

    if (!componentMounted) {
      return <div />
    };

   
  
    return(
        <ThemeProvider theme={themeMode}>
            <>
            <GlobalStyle />
            <AnimatePresence exitBeforeEnter initial={false}>
                <Layout toggleTheme={toggleTheme}>
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