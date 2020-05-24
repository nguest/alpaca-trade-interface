import axios from 'axios';

export const getAssetsErrored = (error) => ({
  type: 'GET_ASSETS_ERRORED',
  error,
});

export const getAssetsSucceeded = (data) => ({
  type: 'GET_ASSETS_SUCCEEDED',
  data,
});

export const getAssets = () => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
    'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_CLIENT_ID,
    'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET,
  };

  axios.get('https://paper-api.alpaca.markets/v2/assets', { headers })
    .then((response) => {
      if (response.status === 200) {
        return dispatch(getAssetsSucceeded(response.data));
      }
      return null;
    })
    .catch((e) => {
      console.log({ e });
      dispatch(getAssetsErrored({ error: e }));
    });
};
