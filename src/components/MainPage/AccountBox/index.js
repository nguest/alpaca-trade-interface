/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, Fragment } from 'react';
import { object, func } from 'prop-types';

import styles from './styles';

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
      <div style={styles.header}>
        <h3 css={styles.h3}>{ title }</h3>
      </div>
      { accountData && (
        <Fragment>
          <div css={styles.balance}>{ accountData.buying_power }</div>
          <div css={styles.balance}>{ accountData.cash }</div>
        </Fragment>
      )}
    </section>
  );
};

AccountBox.propTypes = {
  accountData: object,
  onRequestAccountData: func,
};

export default AccountBox;
