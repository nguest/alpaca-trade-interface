/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, Fragment } from 'react';
import { array, func } from 'prop-types';
import { format } from 'date-fns';

import styles from './styles';

const OrdersBox = ({
  orders,
  onRequestOrders,
}) => {
  let title = 'Waiting';
  useEffect(() => {
    onRequestOrders();
  }, []);

  if (orders.length) {
    title = 'Orders';
  }
  console.log({ orders });
  
  return (
    <section css={styles.container}>
      <div style={styles.header}>
        <h3 css={styles.h3}>{ title }</h3>
      </div>
      { orders && (
        <Fragment>
          <table css={styles.table}>
            <thead>
              <tr>
                <td>name</td>
                <td>order</td>
                <td>created_at</td>
                <td>status</td>
              </tr>
            </thead>
            <tbody>
              { orders.map((o) => (
                <tr key={o.id}>
                  <td>{ o.symbol }</td>
                  <td>{ `${o.order_type} ${o.side}`} </td>
                  <td>{ format(new Date(o.created_at), 'MM/dd HH:mm:ss')} </td>
                  <td>{ o.filled_at ? 'filled' : 'pending'} </td>


                </tr>
              ))}
            </tbody>
          </table>
          <div css={styles.balance}>{ orders.buying_power }</div>
          <div css={styles.balance}>{ orders.cash }</div>
        </Fragment>
      )}
    </section>
  );
};

OrdersBox.propTypes = {
  orders: array,
  onRequestOrders: func,
};

export default OrdersBox;
