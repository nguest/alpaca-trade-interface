export interface RootState {
  accountData: {},
  notifications: [],
  historicalData: {},
  connectionStatus: {
    connection: boolean,
    stream: boolean,
  },
  newOrders: [],
  user: {
    displayName?: string,
  },
  liveData: {},
  liveQuotes: {},
  tradeUpdates: [],
  orders: [],
}