import React from 'react';
import { func, array } from 'prop-types';
import { connect } from 'react-redux';
import OrdersBox from '../../components/MainPage/OrdersBox';
import actions from '../../redux/actions';

const Orders = ({
  orders,
  getOrders,
}) => (
  <OrdersBox
    orders={orders}
    onRequestOrders={getOrders}
  />
);

const mapStateToProps = (state) => ({
  orders: state.orders || [],
});

const mapDispatchToProps = (dispatch) => ({
  getOrders: () => dispatch(actions.getOrders()),
});

Orders.propTypes = {
  orders: array,
  getOrders: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
