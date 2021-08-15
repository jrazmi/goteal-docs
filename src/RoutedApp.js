import { Route, Switch } from "react-router-dom";
import * as Pages from './pages';
import { Layout } from './components/Layout';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const RouteMap = [
    {   
        'path': '/about',
        'component': Pages.About
    }
]

export const RoutedApp = () => {
    const location = useLocation();
    return(
            <AnimatePresence exitBeforeEnter initial={false}>
        <Layout>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                    <Pages.Home />
                </Route>
                {
                    RouteMap.map((route) => (
                        <Route path={route.path} component={route.component} />
                        ))
                    }   
            </Switch>
        </Layout>
    </AnimatePresence>
    )
}