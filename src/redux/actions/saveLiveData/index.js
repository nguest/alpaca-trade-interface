import createNotification from '../createNotification';

export const saveLiveDataErrored = (error) => ({
  type: 'SAVE_LIVE_DATA_ERRORED',
  error,
});

export const saveLiveDataSucceeded = ({ ticker, data }) => ({
  type: 'SAVE_LIVE_DATA_SUCCEEDED',
  data,
  ticker,
});


export const saveLiveData = ({ ticker, data }) => (dispatch) => {
  return dispatch(saveLiveDataSucceeded({ ticker, data }));
  //return dispatch(createNotification({ noteType: 'OK', message: 'Got feed' }));
};
