/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { object, func } from 'prop-types';
import Link from '../../router/Link';
import Icon from '../Icon';
import MarketClock from '../MarketClock';

import styles from './styles';


const Header = ({
  clock = null,
  onRequestClock,
}) => {
  return (
    <header css={styles.header}>
      <MarketClock clock={clock} onRequestClock={onRequestClock} />
      <div css={styles.loginStatus}>
        <Icon name="person-circle-outline" />
        <span css={styles.statusText}>Signed In</span>
        <Link to="/" replace={false} styleOverrides={styles.link}>
          Sign Out
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  clock: object,
  onRequestClock: func,
};

export default Header;
