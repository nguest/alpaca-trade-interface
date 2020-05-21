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
  createOrder,
} from './createOrder';

import {
 getOrders,
} from './getOrders';

import {
  getAccountData,
} from './getAccountData';

import {
  updateConnectionStatus,
} from './updateConnectionStatus';

import {
  getClock,
} from './getClock';

import {
  saveTradeUpdate,
} from './saveTradeUpdate';

import createNotification from './createNotification';

const actions = {
  createNotification,
  createOrder,
  getClock,
  getOrders,
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
  saveTradeUpdate,
  updateConnectionStatus,
};

export default actions;
