/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { format, subYears } from 'date-fns';
import { object, string } from 'prop-types';
import Icon from '../../Icon';

import styles from './styles';

const LiveDataStreams = ({
 // liveData = {},
  ticker,
}) => {
  const liveData = {
    AAPL: {
      T: 'AAPL',
      c: 314.945,
      h: 315.1,
      l: 314.9,
      o: 314.96,
      t: 'Mon May 18 2020 11:55:00 GMT-0700 (Pacific Daylight Time)'
    }
  }

  useEffect(() => {
    if (liveData) {

      //setP(liveData.p);
    }
  }, [liveData]);

  return (
    <section css={styles.container}>
      <table css={styles.table}>
        <thead>
          <tr>
            <td>ticker</td>
            <td>open</td>
            <td>close</td>
            <td>high</td>
            <td>low</td>
          </tr>
        </thead>
        <tbody>
          { Object.keys(liveData).map((d) => (
            <tr key={d}>
              <td>{ liveData[d].T }</td>
              <td>{ liveData[d].o }</td>
              <td>{ liveData[d].c }</td>
              <td>{ liveData[d].h }</td>
              <td>{ liveData[d].l }</td>
            </tr>
          ))}

        </tbody>

      </table>
        {/* <Icon name={`caret-${change}-outline`} /> */}

      {/* { liveData && <p>{ format(new Date(liveData.t * 0.001), 'HH:mm:ss') }</p> } */}

    </section>
  );
};

LiveDataStreams.propTypes = {
  liveData: object,
  ticker: string,
};

export default LiveDataStreams;
