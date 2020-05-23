/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { object, func } from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';
import MarketClock from '../MarketClock';

import styles from './styles';

const Header = ({
  clock = null,
  firebase,
  onRequestClock,
  onRequestLogout,
  user,
}) => {
  return (
    <header css={styles.header}>
      <MarketClock clock={clock} onRequestClock={onRequestClock} />
      <div css={styles.loginStatus}>
        <Icon name="person-circle-outline" />
        <span css={styles.statusText}>{ `Signed In: ${user && user.email}` }</span>
        <Button type="invisible" onClick={() => onRequestLogout({ firebase })} label="Sign out" />
      </div>
    </header>
  );
};

Header.propTypes = {
  clock: object,
  firebase: object,
  onRequestClock: func,
  onRequestLogout: func,
  user: object,
};

export default Header;
