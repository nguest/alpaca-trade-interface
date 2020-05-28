import {
  requestLogin,
} from './requestLogin/index.ts';

import {
  requestLogout,
} from './requestLogout/index.ts';

import {
  getHistoricalData,
} from './getHistoricalData';

import {
  saveLiveData,
  saveLiveDataSucceeded,
} from './saveLiveData/index.ts';

import {
  createOrder,
} from './createOrder';

import {
  getOrders,
} from './getOrders/index.ts';

import {
  cancelOrder,
} from './cancelOrder/index.ts';

import {
  getPositions,
} from './getPositions';

import {
  getAccountData,
} from './getAccountData/index.ts';

import {
  updateConnectionStatus,
} from './updateConnectionStatus';

import {
  getClock,
} from './getClock/index.ts';

import {
  saveTradeUpdate,
} from './saveTradeUpdate';

import {
  saveLiveQuote,
} from './saveLiveQuote/index.ts';

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
  getPositions,
  saveLiveData,
  saveLiveDataSucceeded,
  saveLiveQuote,
  saveTradeUpdate,
  updateConnectionStatus,
};

export default actions;
