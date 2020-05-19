import axios from 'axios';
import createNotification from '../createNotification';

export const createTransactionErrored = (error) => ({
  type: 'CREATE_TRANSACTION_ERRORED',
  error,
});

export const createTransactionSucceeded = (transactions) => ({
  type: 'CREATE_TRANSACTION_SUCCEEDED',
  transactions,
});

export const adjustBalance = (amount) => ({
  type: 'ADJUST_BALANCE',
  amount,
});

export const createTransaction = (params) => (dispatch) => {
  const { toAddress, fromAddress, amount } = params;

  const formData = new FormData();
  formData.append('toAddress', toAddress);
  formData.append('fromAddress', fromAddress);
  formData.append('amount', amount);

  axios.post(
    'http://jobcoin.gemini.com/net-heavily/api/transactions',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )
    .then((response) => {
      if (response.status === 200) {
        dispatch(adjustBalance(-amount));
        return dispatch(createNotification({ noteType: 'OK', message: 'Transaction created successfully' }));
      }
      return null;
    })
    .catch((e) => {
      dispatch(createTransactionErrored({ error: e }));
      return dispatch(createNotification({ noteType: 'ERROR', message: e.response.data.error }));
    });
};
