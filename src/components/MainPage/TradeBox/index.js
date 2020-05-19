/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { func, string } from 'prop-types';
import Button from '../../Button';

import styles from './styles';

const TradeBox = ({
  currentAddress,
  onCreateTransaction,
}) => {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState(0);

  const onClickButton = () => {
    if (!toAddress || amount <= 0) return;
    onCreateTransaction({
      fromAddress: currentAddress,
      toAddress,
      amount,
    });
  };

  return (
    <section css={styles.container}>
      <header css={styles.header}>
        <h3 css={styles.h3}>Trade</h3>
      </header>
      <fieldset css={styles.form}>
        <label htmlFor="to-address">Destination Address</label>
        <input
          css={styles.input}
          type="text"
          id="to-address"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
        <label htmlFor="amount">Amount to Send</label>
        <input
          css={styles.input}
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button
          disabled={!toAddress.length && amount >= 0}
          label="Send"
          onClick={onClickButton}
        />
      </fieldset>
    </section>
  );
};

TradeBox.propTypes = {
  currentAddress: string,
  onCreateTransaction: func,
};

export default TradeBox;
