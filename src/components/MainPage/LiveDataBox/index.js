/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { object } from 'prop-types';

import styles from './styles';

const LiveDataBox = ({
  liveData,
}) => {
  let title = 'Waiting';
  let price = '--';
  let time = '--';
  if (Object.keys(liveData).length) {
    price = liveData.AAPL.P;
    title = 'AAPL';
    time = new Date(liveData.t);
  }
  return (
    <section css={styles.container}>
      <div style={styles.header}>
        <h3 css={styles.h3}>{ title }</h3>
      </div>
      <div css={styles.balance}>{ price }</div>
      <p>{ time }</p>
    </section>
  );
};

LiveDataBox.propTypes = {
  liveData: object,
};

export default LiveDataBox;
