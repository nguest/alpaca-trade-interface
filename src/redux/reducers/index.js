export const initialState = {
  notifications: [],
  historicalData: null,
  currentUser: null,
  connectionStatus: {
    connection: false,
    stream: false,
  },
  newOrders: [],
  user: null,
};

// TODO: Split reducer into many
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'REQUEST_LOGIN_SUCCEEDED':
    return {
      ...state,
      user: { email: action.email },
    };
  case 'REQUEST_LOGOUT_SUCCEEDED':
    return {
      ...state,
      user: null,
    };
  case 'REQUEST_LOGIN_ERRORED':
  case 'REQUEST_LOGOUT_ERRORED':
  case 'GET_HISTORICAL_DATA_ERRORED':
  case 'CREATE_ORDER_ERRORED':
  case 'GET_ASSETS_ERRORED':
    return { ...state, lastError: action.error };
  case 'GET_HISTORICAL_DATA_SUCCEEDED':
  case 'CREATE_TRANSACTION_SUCCEEDED':
    return { ...state, historicalData: action.data };
  case 'SAVE_LIVE_DATA_SUCCEEDED':
    return {
      ...state,
      liveData: {
        ...state.liveData,
        [action.ticker]: action.data,
      },
    };
  case 'SAVE_LIVE_QUOTE_SUCCEEDED':
    return {
      ...state,
      liveQuotes: {
        ...state.liveQuotes,
        [action.ticker]: action.data,
      },
    };
  case 'SAVE_TRADE_UPDATE_SUCCEEDED':
    return {
      ...state,
      tradeUpdates: [
        ...state.tradeUpdates,
        action.data,
      ],
    };
  case 'GET_ACCOUNT_DATA_SUCCEEDED':
    return { ...state, accountData: action.data };
  case 'GET_CLOCK_SUCCEEDED':
    return {
      ...state,
      clock: action.data,
    };
  case 'UPDATE_CONNECTION_STATUS_SUCCEEDED':
    console.log({ 1: state.connectionStatus, 2: action.status  });
    
    return {
      ...state,
      connectionStatus: {
        ...state.connectionStatus,
        ...action.status,
      },
    };
  case 'CREATE_ORDER_SUCCEEDED':
    return {
      ...state,
      newOrders: [
        ...state.newOrders,
        action.data,
      ],
    };
  case 'GET_ORDERS_SUCCEEDED':
    return {
      ...state,
      orders: action.data,
    };
  case 'CANCEL_ORDER_SUCCEEDED':
    return {
      ...state,
      orders: state.orders.filter((o) => o.id !== action.id),
    };
  case 'GET_POSITIONS_SUCCEEDED':
    return {
      ...state,
      positions: action.data,
    };
  case 'GET_ASSETS_SUCCEEDED':
    return {
      ...state,
      assets: action.data,
    };
  case 'CREATE_NOTIFICATION':
    return {
      ...state,
      notifications: [
        {
          message: action.message,
          noteType: action.noteType,
          createdAt: action.createdAt,
        }, ...state.notifications,
      ] };
  default:
    return state;
  }
};

export default reducer;
