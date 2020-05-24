import {
  requestLogin,
} from './requestLogin';

import {
  requestLogout,
} from './requestLogout';

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

import {
  getAssets,
} from './getAssets';

import createNotification from './createNotification';

const actions = {
  cancelOrder,
  createNotification,
  createOrder,
  getAssets,
  getClock,
  getOrders,
  requestLogin,
  requestLogout,
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
