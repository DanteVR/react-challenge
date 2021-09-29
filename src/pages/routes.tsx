import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { paths } from '@utils';

import { DashboardPage } from './DashboardPage';

const Routes: React.FC<any> = () => (
  <Switch>
    <Route exact path={paths.PATH_DASHBOARD} component={DashboardPage} />
    <Redirect from={paths.PATH_INIT} to={paths.PATH_DASHBOARD} />
  </Switch>
);

export default Routes;
