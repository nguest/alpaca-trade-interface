/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, Fragment } from 'react';
import { array, func, string } from 'prop-types';
import { format } from 'date-fns';
import { useInterval } from '../../utils';
import Icon from '../Icon';

import styles from './styles';

const OrdersBox = ({
  orders,
  onCancelOrder,
  onRequestOrders,
  type,
}) => {
  let title = 'Waiting';
  useEffect(() => {
    onRequestOrders();
  }, []);

  useInterval(() => {
    onRequestOrders();
  }, 10000);

  if (orders) {
    title = `Orders (${orders.length})`;
  }
  console.log({ orders });
  
  return (
    <section css={styles.container(type)}>
      <div style={styles.header}>
        <h3 css={styles.h3}>{ title }</h3>
      </div>
      { orders && !orders.length && (
        <div css={styles.noOrders}>No current orders</div>
      )}
      { orders && orders.length !== 0 && (
        <Fragment>
          <table css={styles.table}>
            { type !== 'compact' && (
              <thead>
                <tr>
                  <td>name</td>
                  <td>order</td>
                  <td>qty</td>
                  <td>created_at</td>
                  <td>status</td>
                  <td>filled</td>
                  <td />
                </tr>
              </thead>
            )}
            <tbody>
              { orders.map((o) => (
                <tr key={o.created_at}>
                  <td>{ o.symbol }</td>
                  <td>
                    { `${o.order_type} ${o.side}`}
                  </td>
                  <td>
                    { o.qty }
                  </td>
                  <td>
                    { format(new Date(o.created_at), 'MM/dd HH:mm:ss')}
                  </td>
                  <td>
                    { o.status }
                  </td>
                  <td>
                    { o.filled_at ? 'filled' : 'pending'}
                  </td>
                  <td className="hoverable" onClick={() => onCancelOrder(o.id)}>
                    <Icon name="trash-bin-outline" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </section>
  );
};

OrdersBox.propTypes = {
  orders: array,
  onCancelOrder: func,
  onRequestOrders: func,
  type: string,
};

export default OrdersBox;
