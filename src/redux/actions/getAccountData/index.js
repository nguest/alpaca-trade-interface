import axios from 'axios';
import createNotification from '../createNotification';

export const getAccountDataErrored = (error) => ({
  type: 'GET__ACCOUNT_DATA_ERRORED',
  error,
});

export const getAccountDataSucceeded = (data) => ({
  type: 'GET_ACCOUNT_DATA_SUCCEEDED',
  data,
});

export const getAccountData = () => (dispatch) => {
  const headers = {
    'content-type': 'application/json',
    'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_CLIENT_ID,
    'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET,
  };

  axios.get('https://paper-api.alpaca.markets/v2/account', { headers })
    .then((response) => {
      console.log({ response });
      dispatch(getAccountDataSucceeded(response.data));
      return dispatch(createNotification({ noteType: 'OK', message: 'Account Data loaded successfully' }));
    })
    .catch((e) => {
      dispatch(getAccountDataErrored({ error: e }));
      return dispatch(createNotification({ noteType: 'ERROR', message: 'Could not load account data' }));
    });
};
