import React from 'react';
import { array, func, object } from 'prop-types';
import { connect } from 'react-redux';
import MainContainer from '../../components/MainContainer';
import actions from '../../redux/actions';

const App = ({
  clock,
  createOrder,
  error,
  firebase,
  getClock,
  getHistoricalData,
  historicalData,
  liveData,
  notifications,
  user,
  requestLogout,
  getAssets,
  assets,
}) => (
  <MainContainer
    clock={clock}
    error={error}
    firebase={firebase}
    liveData={liveData}
    notifications={notifications}
    onCreateOrder={createOrder}
    onRequestHistoricalData={getHistoricalData}
    onRequestClock={getClock}
    onRequestLogout={requestLogout}
    historicalData={historicalData}
    user={user}
    assets={assets}
    onRequestAssets={getAssets}
  />
);

const mapStateToProps = (state) => ({
  assets: state.assets || [],
  clock: state.clock || null,
  historicalData: state.historicalData || { },
  liveData: state.liveData || null,
  notifications: state.notifications || [],
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getClock: () => dispatch(actions.getClock()),
  getAssets: () => dispatch(actions.getAssets()),
  getHistoricalData: (params) => dispatch(actions.getHistoricalData(params)),
  createOrder: (params) => dispatch(actions.createOrder(params)),
  requestLogout: (params) => dispatch(actions.requestLogout(params)),
});

App.propTypes = {
  clock: object,
  createOrder: func,
  error: object,
  firebase: object,
  getClock: func,
  getHistoricalData: func,
  liveData: object,
  notifications: array,
  historicalData: object,
  user: object,
  requestLogout: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
