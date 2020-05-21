/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { func } from 'prop-types';
import Button from '../../Button';

import styles from './styles';

const TickerBox = ({
  onRequestTicker,
}) => {
  const [ticker, setTicker] = useState('AAPL');

  return (
    <form css={styles.container}>
      <input
        css={styles.input}
        type="text"
        placeholder="enter ticker"
        id="login-form"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
      />
      <Button label="GO" onClick={() => onRequestTicker(ticker)} buttonType="submit" />
    </form>
  );
};

TickerBox.propTypes = {
  onRequestTicker: func,
};

export default TickerBox;
