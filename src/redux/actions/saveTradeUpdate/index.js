export const saveTradeUpdateErrored = (error) => ({
  type: 'SAVE_TRADE_UPDATE_ERRORED',
  error,
});

export const saveTradeUpdateSucceeded = (data) => ({
  type: 'SAVE_TRADE_UPDATE_SUCCEEDED',
  data,
});


export const saveTradeUpdate = (data) => (dispatch) => {
  return dispatch(saveTradeUpdateSucceeded(data));
};
