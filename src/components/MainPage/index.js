/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, useRef } from 'react';
import { func, string, object } from 'prop-types';
import LiveDataBox from './LiveDataBox';
import TradeBox from './TradeBox';
import Account from '../../containers/Account';
import Header from '../Header';
import styles from './styles';
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
  const didMountRef = useRef(false);
  useEffect(() => {
    onRequestHistoricalData();
    didMountRef.current = true;


    return () => {};
  }, []);
  console.log({ historicalData });
  
  return (
    <main css={styles.main}>
      <Header currentAddress={currentAddress} clock={clock} onRequestClock={onRequestClock} />
      <div css={styles.mainGrid}>
        <LiveDataBox liveData={liveData} />
        <TradeBox
          onCreateTransaction={onCreateTransaction}
          currentAddress={currentAddress}
        />
        <Account/>
        <CandlestickChart
          timeSeriesData={historicalData.AAPL}
          ticker="AAPL"
        />
      </div>
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
