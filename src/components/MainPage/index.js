/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { func, string, object } from 'prop-types';
import TickerBox from './TickerBox';
import LiveDataBox from './LiveDataBox';
import TradeBox from './TradeBox';
import Account from '../../containers/Account';
import Status from '../../containers/Status';
import Header from '../Header';
import styles from './styles';
import { scales } from './helpers';
import CandlestickChart from '../CandlestickChart';

const MainPage = ({
  clock,
  liveData,
  currentAddress,
  onCreateTransaction,
  onRequestClock,
  onRequestHistoricalData,
  historicalData,
}) => {
  const [ticker, setTicker] = useState('AAPL');
  const [duration, setDuration] = useState(Object.keys(scales)[0]);

  useEffect(() => {
    onRequestHistoricalData({ ...scales.duration, symbols: ticker });
    return () => {};
  }, [ticker]);

  const onRequestTicker = (theTicker) => {
    setTicker(theTicker);
    onRequestHistoricalData({ ...scales.duration, symbols: theTicker });
  };

  const onRequestDuration = (theDuration) => {
    setDuration(theDuration);
    onRequestHistoricalData({ ...scales[theDuration], symbols: ticker });
  };

  return (
    <main css={styles.main}>
      <Header currentAddress={currentAddress} clock={clock} onRequestClock={onRequestClock} />
      <div css={styles.mainGrid}>
        <TickerBox onRequestTicker={onRequestTicker} />
        <LiveDataBox liveData={liveData} />
        <TradeBox
          onCreateTransaction={onCreateTransaction}
          currentAddress={currentAddress}
        />
        <Account />
        <CandlestickChart
          onRequestDuration={onRequestDuration}
          duration={duration}
          timeSeriesData={historicalData[ticker]}
          ticker={ticker}
        />
      </div>
      <Status />
    </main>
  );
};

MainPage.propTypes = {
  clock: object,
  liveData: object,
  currentAddress: string,
  onCreateTransaction: func,
  onRequestClock: func,
  onRequestHistoricalData: func,
  historicalData: object,
};

export default MainPage;
