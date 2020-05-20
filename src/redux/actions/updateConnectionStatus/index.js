
export const updateConnectionStatusSucceeded = (status) => ({
  type: 'UPDATE_CONNECTION_STATUS_SUCCEEDED',
  status,
});


export const updateConnectionStatus = (status) => (dispatch) => {
  return dispatch(updateConnectionStatusSucceeded(status));
};
