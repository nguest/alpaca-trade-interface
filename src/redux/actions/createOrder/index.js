import axios from 'axios';
import createNotification from '../createNotification';

export const createOrderErrored = (error) => ({
  type: 'CREATE_ORDER_ERRORED',
  error,
});

export const createOrderSucceeded = (data) => ({
  type: 'CREATE_ORDER_SUCCEEDED',
  data,
});

export const createOrder = ({ symbol, qty, side, type, time_in_force }) => (dispatch) => {
  const data = {
    symbol, qty, side, type, time_in_force,
  };
  const headers = {
    'Content-Type': 'application/json',
    'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_CLIENT_ID,
    'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET,
  };

  console.log({ headers, data });

  axios.post('https://paper-api.alpaca.markets/v2/orders', data, { headers })
    .then((response) => {
      if (response.status === 200) {
        dispatch(createOrderSucceeded(response.data));
        return dispatch(createNotification({ noteType: 'OK', message: 'Order created successfully' }));
      }
      return null;
    })
    .catch((e) => {
      console.log({ e });
      
      dispatch(createOrderErrored({ error: e }));
      return dispatch(createNotification({ noteType: 'ERROR', message: e.response.data.error }));
    });
};
