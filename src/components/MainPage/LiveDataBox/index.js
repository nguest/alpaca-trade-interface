/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { format } from 'date-fns';
import { object } from 'prop-types';

import styles from './styles';

const LiveDataBox = ({
  liveData,
}) => {
  let title = 'Waiting';
  let price = '--';
  if (liveData && Object.keys(liveData).length) {
    price = liveData.AAPL.P;
    title = 'AAPL';
  }

  return (
    <section css={styles.container}>
      <div css={styles.header}>
        <h3 css={styles.h3}>{ title }</h3>
      </div>
      <div css={styles.balance}>{ price }</div>
      { liveData && <p>{ format(liveData.time * 0.001, 'HH:mm:ss') }</p> }
    </section>
  );
};

LiveDataBox.propTypes = {
  liveData: object,
};

export default LiveDataBox;
