/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { func, string } from 'prop-types';
import Button from '../../Button';

import styles from './styles';

const TradeBox = ({
  onCreateOrder,
  ticker,
}) => {
  const [qty, setQty] = useState(0);
//x
// symbol, qty, side, type, time_in_force,
  const onClickButton = (side) => {
    if (qty <= 0) return;
    onCreateOrder({
      symbol: ticker,
      qty,
      side,
      type: 'market',
      time_in_force: 'gtc',
    });
  };

  return (
    <section css={styles.container}>
      <header css={styles.header}>
        <h3 css={styles.h3}>Trade</h3>
      </header>
      <fieldset css={styles.form}>
        <label htmlFor="qty">Qty</label>
        <input
          css={styles.input}
          type="number"
          id="qty"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

        <Button
          disabled={qty <= 0}
          label="Sell"
          onClick={() => onClickButton('sell')}
        />
        <Button
          disabled={qty <= 0}
          label="Buy"
          onClick={() => onClickButton('buy')}
        />
      </fieldset>
    </section>
  );
};

TradeBox.propTypes = {
  ticker: string,
  onCreateOrder: func,
};

export default TradeBox;
