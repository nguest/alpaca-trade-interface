import {
  requestLogin,
  requestLoginErrored,
  requestLoginSucceeded,
} from './requestLogin';

import {
  getHistoricalData,
  getHistoricalDataErrored,
  getHistoricalDataSucceeded,
} from './getHistoricalData';

import {
  saveLiveData,
  saveLiveDataErrored,
  saveLiveDataSucceeded,
} from './saveLiveData';

import {
  createTransaction,
  createTransactionErrored,
  createTransactionSucceeded,
} from './createTransaction';

import {
  getAccountData,
} from './getAccountData';

import {
  getClock,
} from './getClock';

import createNotification from './createNotification';

const actions = {
  createNotification,
  createTransaction,
  createTransactionErrored,
  createTransactionSucceeded,
  getClock,
  requestLogin,
  requestLoginErrored,
  requestLoginSucceeded,
  getAccountData,
  getHistoricalData,
  getHistoricalDataErrored,
  getHistoricalDataSucceeded,
  saveLiveData,
  saveLiveDataErrored,
  saveLiveDataSucceeded,
};

export default actions;
