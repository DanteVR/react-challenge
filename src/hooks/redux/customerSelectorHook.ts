/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useSelector } from 'react-redux';
import { RootState } from '@redux';

export const useCustomerSelectorHook = () =>
  useSelector((state: RootState) => state.customer);
