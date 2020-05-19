import React from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import AccountBox from '../../components/MainPage/AccountBox';
import actions from '../../redux/actions';

const Account = ({
  accountData,
  getAccountData,
}) => (
  <AccountBox
    accountData={accountData}
    onRequestAccountData={getAccountData}
  />
);

const mapStateToProps = (state) => ({
  accountData: state.accountData || null,
});

const mapDispatchToProps = (dispatch) => ({
  getAccountData: () => dispatch(actions.getAccountData()),
});

Account.propTypes = {
  accountData: object,
  getAccountData: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
