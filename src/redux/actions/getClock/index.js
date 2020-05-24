import axios from 'axios';
import createNotification from '../createNotification';


export const getClockErrored = (error) => ({
  type: 'GET_CLOCK_ERRORED',
  error,
});

export const getClockSucceeded = (data) => ({
  type: 'GET_CLOCK_SUCCEEDED',
  data,
});


export const getClock = () => (dispatch) => {
  const headers = {
    'content-type': 'application/json',
    'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_CLIENT_ID,
    'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET,
  };

  axios.get('https://paper-api.alpaca.markets/v2/clock', { headers })
    .then((response) => {
      dispatch(getClockSucceeded(response.data));
    })
    .catch((e) => {
      dispatch(getClockErrored({ error: e }));
      return dispatch(createNotification({ noteType: 'ERROR', message: 'Could not get clock' }));
    });
};
