import axios from 'axios';
import createNotification from '../createNotification';

export const getOrdersErrored = (error) => ({
  type: 'GET_ORDERS_ERRORED',
  error,
});

export const getOrdersSucceeded = (data) => ({
  type: 'GET_ORDERS_SUCCEEDED',
  data,
});

export const getOrders = () => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
    'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_CLIENT_ID,
    'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET,
  };

  axios.get('https://paper-api.alpaca.markets/v2/orders', { headers })
    .then((response) => {
      if (response.status === 200) {
        dispatch(getOrdersSucceeded(response.data));
        return dispatch(createNotification({ noteType: 'OK', message: 'Orders fetched successfully' }));
      }
      return null;
    })
    .catch((e) => {
      console.log({ e });
      
      dispatch(getOrdersErrored({ error: e }));
      return dispatch(createNotification({ noteType: 'ERROR', message: e.response.data.error }));
    });
};
