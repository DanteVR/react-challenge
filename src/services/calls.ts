/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { constants, urls, env } from '@utils';
import axios from 'axios';

const callGetCustomers = async () => {
  return axios.get(
    `${env.REACT_APP_PATH_API}:${constants.PORT_LIST_SERVICE}${urls.ROUTE_GET_CUSTOMERS}`
  );
};

const callGetAverageAges = async () => {
  return axios.get(
    `${env.REACT_APP_PATH_API}:${constants.PORT_AVERAGE_AGE_SERVICE}${urls.ROUTE_GET_AVERAGE_AGES}`
  );
};

export default {
  callGetCustomers,
  callGetAverageAges,
};
