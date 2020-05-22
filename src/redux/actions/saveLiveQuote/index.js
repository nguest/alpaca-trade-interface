export const saveLiveQuoteErrored = (error) => ({
  type: 'SAVE_LIVE_QUOTE_ERRORED',
  error,
});

export const saveLiveQuoteSucceeded = ({ ticker, data }) => ({
  type: 'SAVE_LIVE_QUOTE_SUCCEEDED',
  data,
  ticker,
});


export const saveLiveQuote = ({ ticker, data }) => (dispatch) => {
  return dispatch(saveLiveQuoteSucceeded({ ticker, data }));
};
