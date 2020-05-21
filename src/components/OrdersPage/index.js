/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { func, string, object } from 'prop-types';
import Orders from '../../containers/Orders';
import Positions from '../../containers/Positions';
import Status from '../../containers/Status';
import Header from '../Header';
import styles from './styles';

const OrdersPage = ({
  clock,
  onRequestClock,
}) => {

  return (
    <main css={styles.main}>
      <Header clock={clock} onRequestClock={onRequestClock} />
      <div css={styles.mainGrid}>
        <Orders />
        <Positions />
      </div>
      <Status />
    </main>
  );
};

OrdersPage.propTypes = {
  clock: object,
  onRequestClock: func,
};

export default OrdersPage;
