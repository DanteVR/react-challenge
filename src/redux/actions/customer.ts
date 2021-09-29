/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { calls } from '@services';
import * as customerSlice from '../slices/customer';

export const getCustomers = () => async (dispatch: any) => {
  dispatch(customerSlice.getCustomersStart());
  try {
    const response = await calls.callGetCustomers();
    dispatch(
      customerSlice.getCustomersSuccess({
        data: {
          status: true,
          results: response.data,
        },
      })
    );
  } catch (error) {
    dispatch(customerSlice.getCustomersFail({ error }));
    dispatch(customerSlice.cleanByKey({ key: 'getCustomers' }));
  }
};

export const getAverageAges = () => async (dispatch: any) => {
  try {
    dispatch(customerSlice.getAverageAgesStart());
    const response = await calls.callGetAverageAges();
    dispatch(
      customerSlice.getAverageAgesSuccess({
        data: {
          status: true,
          data: response.data,
        },
      })
    );
  } catch (error) {
    dispatch(customerSlice.getAverageAgesFail({ error }));
    dispatch(customerSlice.cleanByKey({ key: 'getAverageAges' }));
  }
};
