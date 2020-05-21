import axios from 'axios';
import createNotification from '../createNotification';

export const cancelOrderErrored = (error) => ({
  type: 'CANCEL_ORDER_ERRORED',
  error,
});

export const cancelOrderSucceeded = (id) => ({
  type: 'CANCEL_ORDER_SUCCEEDED',
  id,
});

export const cancelOrder = (id) => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
    'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_CLIENT_ID,
    'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET,
  };

  axios.delete(`https://paper-api.alpaca.markets/v2/orders/${id}`, { headers })
    .then((response) => {
      if (response.status === 200) {
        dispatch(cancelOrderSucceeded(id));
        return dispatch(createNotification({ noteType: 'OK', message: 'Orders cancelled successfully' }));
      }
      return null;
    })
    .catch((e) => {
      console.log({ e });
      
      dispatch(cancelOrderErrored({ error: e }));
      const message = (e.response && e.response.data && e.response.data.error) || e.message;
      return dispatch(createNotification({ noteType: 'ERROR', message }));
    });
};
