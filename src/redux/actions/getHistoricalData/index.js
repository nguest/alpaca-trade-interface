import axios from 'axios';

import createNotification from '../createNotification';

export const getHistoricalDataErrored = (error) => ({
  type: 'GET_HISTORICAL_DATA_ERRORED',
  error,
});

export const getHistoricalDataSucceeded = (data) => ({
  type: 'GET_HISTORICAL_DATA_SUCCEEDED',
  data,
});

export const getHistoricalData = () => (dispatch) => {
  const timeframe = '5Min';
  const symbols = 'AAPL';
  const before = '2020-04-15T09:30:00-04:00';
  const params = {
    timeframe: '5Min',
    symbols: 'AAPL',
  }
  const headers = { 
    'content-type': 'application/json',
    'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_CLIENT_ID,
    'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET,
  };

  //curl -H "APCA-API-KEY-ID: PK4XHGBPNJJ9XBNM6F3U"  -H "APCA-API-SECRET-KEY: GuqbPEudiBgjk4AohuXd9PPnA8GcpKkArXqHF7ci"  "https://data.alpaca.markets/v1/bars/1D?symbols=AAPL&limit=100"

//https://data.alpaca.markets/v1/bars/1D?symbols=AAPL
 // axios.get(`https://data.alpaca.markets/v1/bars/${timeframe}?symbols=${symbols}`, { headers })
  //axios.get("https://data.alpaca.markets/v1/bars/1D?symbols=AAPL&limit=100", { headers })
  axios.get(`https://cors-anywhere.herokuapp.com/https://data.alpaca.markets/v1/bars/${timeframe}`, { headers, params })
    .then((response) => {
      console.log({ response });
      dispatch(getHistoricalDataSucceeded(response.data));
      return dispatch(createNotification({ noteType: 'OK', message: 'Transactions loaded successfully' }));
    })
    .catch((e) => {
      dispatch(getHistoricalDataErrored({ error: e }));
      return dispatch(createNotification({ noteType: 'ERROR', message: 'Could not load transactions' }));
    });
};
