import axios, { AxiosResponse } from 'axios';
import { createNotification } from '../createNotification/index.ts';
import { Dispatch } from 'redux';
import { headers } from '../../../config.ts'

export const GET_ACCOUNT_DATA_ERRORED =  'GET_ACCOUNT_DATA_ERRORED';
export const GET_ACCOUNT_DATA_SUCCEEDED = 'GET_ACCOUNT_DATA_SUCCEEDED'

interface GetAccountDataErroredAction {
  type: typeof GET_ACCOUNT_DATA_ERRORED,
  error: Error
}
interface GetAccountDataSucceededAction {
  type: typeof GET_ACCOUNT_DATA_SUCCEEDED,
  data: {},
};

export const getAccountDataErrored = (error: Error): GetAccountDataErroredAction => ({
  type: GET_ACCOUNT_DATA_ERRORED,
  error,
});

export const getAccountDataSucceeded = (data: {}): GetAccountDataSucceededAction => ({
  type: GET_ACCOUNT_DATA_SUCCEEDED,
  data,
});

export const getAccountData = () => (dispatch: Dispatch<any>) => {
  axios.get('https://paper-api.alpaca.markets/v2/account', { headers })
    .then((response: AxiosResponse) => {
      dispatch(getAccountDataSucceeded(response.data));
      return dispatch(createNotification({ noteType: 'OK', message: 'Account Data loaded successfully' }));
    })
    .catch((e: Error) => {
      dispatch(getAccountDataErrored(e));
      return dispatch(createNotification({ noteType: 'ERROR', message: 'Could not load account data' }));
    });
};
