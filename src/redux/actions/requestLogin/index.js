import axios from 'axios';
import createNotification from '../createNotification';
import { historyPush } from '../../../router';

export const requestLoginErrored = (error) => ({
  type: 'REQUEST_LOGIN_ERRORED',
  error,
});

export const requestLoginSucceeded = (address, addressData) => ({
  type: 'REQUEST_LOGIN_SUCCEEDED',
  payload: {
    balance: addressData.balance,
    currentAddress: address,
  },
});

export const requestLogin = (address) => (dispatch) => {
  axios.get(`http://jobcoin.gemini.com/net-heavily/api/addresses/${address}`)
    .then((response) => {
      if (!response.data.transactions.length && response.data.balance === '0') {
        dispatch(createNotification({ noteType: 'ERROR', message: 'There is no address with that name' }));
        return dispatch(requestLoginErrored({ error: new Error('invalid address') }));
      }
      dispatch(requestLoginSucceeded(address, response.data));
      historyPush(`/address/${address}`);
      return dispatch(createNotification({ noteType: 'OK', message: 'Successfully logged in' }));
    })
    .catch((e) => {
      dispatch(requestLoginErrored({ error: e }));
      let message;
      switch (e) {
        case e.response && e.response.status === 504:
          message = 'Network error- could not communicate with server';
          break;
        default:
          message = 'There was an unknown error';
      }
      return dispatch(createNotification({ noteType: 'ERROR', message }));
    });
};
