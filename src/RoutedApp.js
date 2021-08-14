import { Route, Switch } from "react-router-dom";
import * as Pages from './pages';
import { Layout } from './components/Layout';

const RouteMap = [
    {   'path': '/about',
        'component': Pages.About
    }
]

export const RoutedApp = () => {
    return(
    <Layout>
        <Switch>
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
    )
}