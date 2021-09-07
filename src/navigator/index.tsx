import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { NotFound } from './NotFound';
import routes from './route';
import AppMenu from './components/AppMenu';

export const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <AppMenu>
        <Switch>
          {/* List all public routes here */}
          {routes.map((routes) => {
            return (
              <Route exact path={routes.path} component={routes.component} />
            );
          })}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AppMenu>
    </BrowserRouter>
  );
};
