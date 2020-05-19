import React from 'react';
import { array, func, object, string } from 'prop-types';
import { connect } from 'react-redux';
import MainContainer from '../../components/MainContainer';
import actions from '../../redux/actions';

const App = ({
  clock,
  error,
  getClock,
  getHistoricalData,
  historicalData,
  liveData,
  notifications,
}) => (
  <MainContainer
    clock={clock}
    error={error}
    liveData={liveData}
    notifications={notifications}
    onRequestHistoricalData={getHistoricalData}
    onRequestClock={getClock}
    historicalData={historicalData}
  />
);

const mapStateToProps = (state) => ({
  clock: state.clock || null,
  historicalData: state.historicalData || { },
  liveData: state.liveData || { },
  notifications: state.notifications || [],
});

const mapDispatchToProps = (dispatch) => ({
  getClock: () => dispatch(actions.getClock()),
  getHistoricalData: () => dispatch(actions.getHistoricalData()),
});

App.propTypes = {
  clock: object,
  error: object,
  getClock: func,
  getHistoricalData: func,
  liveData: object,
  notifications: array,
  historicalData: object,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
