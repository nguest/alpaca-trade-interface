/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, Fragment } from 'react';
import { func, object } from 'prop-types';
import { format } from 'date-fns';
import Icon from '../Icon';

import styles from './styles';


const MarketClock = ({
  clock = null,
  onRequestClock,
}) => {
  useEffect(() => {
    onRequestClock();
    return () => {};
  }, []);
  return (
    <section css={styles.marketClock}>
      <Icon name="time-outline" />
      { clock && (
        <Fragment>
          <div>
            <Icon name="sunny-outline" />
            { format(new Date(clock.next_open), 'dd MMM HH:mm') }
          </div>
          <div>{ clock.is_open ? 'Market Open' : 'Market Closed' }</div> 
          <div>
            <Icon name="moon-outline" />
            { format(new Date(clock.next_close), 'dd MMM HH:mm') }
          </div>
        </Fragment>
      )}
      
    </section>
  );
}

MarketClock.propTypes = {
  clock: object,
  onRequestClock: func,
};

export default MarketClock;
