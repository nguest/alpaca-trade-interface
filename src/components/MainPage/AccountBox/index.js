/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, Fragment } from 'react';
import { object, func } from 'prop-types';

import styles from './styles';

const commaNum = (n) => parseInt(n, 10).toLocaleString('en-US', { minimumFractionDigits: 2 });

const AccountBox = ({
  accountData,
  onRequestAccountData,
}) => {
  let title = 'Waiting';
  useEffect(() => {
    onRequestAccountData();
  }, []);

  if (accountData) {
    title = 'Account';
  }
  console.log({ accountData });
  
  return (
    <section css={styles.container}>
      <header style={styles.header}>
        <h3 css={styles.h3}>{ title }</h3>
      </header>
      <div css={styles.content}>
        { accountData && (
          <Fragment>
            <div css={styles.smallHeader}>Buying Power</div>
            <div css={styles.balance}>{ commaNum(accountData.buying_power) }</div>
            <div css={styles.smallHeader}>Cash</div>
            <div css={styles.balance}>{ commaNum(accountData.cash) }</div>
            <div css={styles.smallHeader}>Portfolio Value</div>
            <div css={styles.balance}>{ commaNum(accountData.portfolio_value) }</div>

          </Fragment>
        )}
      </div>
    </section>
  );
};

AccountBox.propTypes = {
  accountData: object,
  onRequestAccountData: func,
};

export default AccountBox;
