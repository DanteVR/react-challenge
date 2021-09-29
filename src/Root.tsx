/* eslint-disable no-use-before-define */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '@pages/routes';
import { configureStore } from '@redux/store';
import { history } from '@utils';
import '@styles/index.less';

const Root: React.FC = () => {
  return (
    <Provider store={configureStore}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
