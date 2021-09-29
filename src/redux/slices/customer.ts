import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    getCustomers: {
      loading: false,
      error: null,
      response: null,
    },
    getAverageAges: {
      loading: false,
      error: null,
      response: null,
    },
  },
  reducers: {
    cleanByKey: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      [payload.key]: {
        loading: false,
        error: null,
        response: null,
      },
    }),
    getCustomersStart: (state) => ({
      ...state,
      getCustomers: {
        ...state.getCustomers,
        loading: true,
        error: null,
        response: null,
      },
    }),
    getCustomersSuccess: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      getCustomers: {
        ...state.getCustomers,
        loading: false,
        error: null,
        response: payload.data,
      },
    }),
    getCustomersFail: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      getCustomers: {
        ...state.getCustomers,
        loading: false,
        error: payload,
        response: null,
      },
    }),
    getAverageAgesStart: (state) => ({
      ...state,
      getAverageAges: {
        ...state.getAverageAges,
        loading: true,
        error: null,
        response: null,
      },
    }),
    getAverageAgesSuccess: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      getAverageAges: {
        loading: false,
        error: null,
        response: payload.data,
      },
    }),
    getAverageAgesFail: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      getAverageAges: {
        loading: false,
        error: payload,
        response: null,
      },
    }),
  },
});

export const {
  cleanByKey,
  getCustomersStart,
  getCustomersSuccess,
  getCustomersFail,
  getAverageAgesStart,
  getAverageAgesSuccess,
  getAverageAgesFail,
} = customerSlice.actions;

export { customerSlice };

export default customerSlice.reducer;
