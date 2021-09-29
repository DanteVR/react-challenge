import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { paths } from '@utils';

import { DashboardPage } from './DashboardPage';

const Routes: React.FC<any> = () => (
  <Switch>
    <Route exact path={paths.PATH_INIT} component={DashboardPage} />
  </Switch>
);

export default Routes;
