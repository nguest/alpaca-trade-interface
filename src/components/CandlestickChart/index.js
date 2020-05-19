/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { array, string } from 'prop-types';
import ResizeDetector from 'react-resize-detector';
import d3Utils from './utils';
import spacing from '../../styles/spacing';
import styles from './styles';

const CandlestickChart = ({ ticker, timeSeriesData = [] }) => {
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });
  const onResize = (width, height) => setDimensions({ width, height });
  console.log({ timeSeriesData, dimensions });
  
  useEffect(() => {
    if (dimensions.width > 0 && timeSeriesData.length) {
      d3Utils.empty();
      d3Utils.initializeChart({ timeSeriesData, dimensions });
    }
  }, [timeSeriesData.length, dimensions.width, dimensions.height]);

  return (
    <div css={styles.container}>
      <header css={styles.header}>
        <h3>{ ticker }</h3>
      </header>
      <div css={styles.graphContainer}>
        <svg
          className="line-chart"
          width={dimensions.width}
          height={dimensions.height - spacing.unit * 2}
          css={styles.svg}
        />
        <ResizeDetector
          handleWidth
          handleHeight
          onResize={onResize}
        />
      </div>
    </div>
  );
};

CandlestickChart.propTypes = {
  ticker: string,
  timeSeriesData: array,
};

export default CandlestickChart;
