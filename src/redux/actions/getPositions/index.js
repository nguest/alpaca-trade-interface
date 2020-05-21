import axios from 'axios';
import createNotification from '../createNotification';

export const getPositionsErrored = (error) => ({
  type: 'GET_POSITIONS_ERRORED',
  error,
});

export const getPositionsSucceeded = (data) => ({
  type: 'GET_POSITIONS_SUCCEEDED',
  data,
});

export const getPositions = () => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
    'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_CLIENT_ID,
    'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET,
  };

  axios.get('https://paper-api.alpaca.markets/v2/positions', { headers })
    .then((response) => {
      if (response.status === 200) {
        dispatch(getPositionsSucceeded(response.data));
        return dispatch(createNotification({ noteType: 'OK', message: 'Positions fetched successfully' }));
      }
      return null;
    })
    .catch((e) => {
      console.log({ e });
      dispatch(getPositionsErrored({ error: e }));
      const message = (e.response && e.response.data && e.response.data.error) || e.message;
      return dispatch(createNotification({ noteType: 'ERROR', message }));
    });
};
