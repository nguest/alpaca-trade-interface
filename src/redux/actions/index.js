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
  cancelOrder,
} from './cancelOrder';

import {
  getPositions,
} from './getPositions';

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

import {
  saveLiveQuote,
} from './saveLiveQuote';

import createNotification from './createNotification';

const actions = {
  cancelOrder,
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
  getPositions,
  saveLiveData,
  saveLiveDataErrored,
  saveLiveDataSucceeded,
  saveLiveQuote,
  saveTradeUpdate,
  updateConnectionStatus,
};

export default actions;
