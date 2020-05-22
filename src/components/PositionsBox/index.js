/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, Fragment } from 'react';
import { array, func } from 'prop-types';
import { useInterval } from '../../utils';

import styles from './styles';

const PositionsBox = ({
  positions,
  onRequestPositions,
  type,
}) => {
  let title = 'Waiting';
  useEffect(() => {
    onRequestPositions();
  }, []);

  useInterval(() => {
    onRequestPositions();
  }, 10000);

  if (positions && positions.length) {
    title = `Positions (${positions.length})`;
  }

  const pctChange = (pos) => ((100 * (pos.current_price - pos.avg_entry_price)) / pos.avg_entry_price).toFixed(2);
  const absChange = (pos) => ((pos.current_price - pos.avg_entry_price).toFixed(2));
  console.log({ positions });
  const getPLSum = (posns) => posns.reduce((sum, curr) => (sum + parseFloat(curr.unrealized_pl)), 0).toFixed(2);
  
  return (
    <section css={styles.container(type)}>
      <div style={styles.header}>
        <h3 css={styles.h3}>{ title }</h3>
      </div>
      { positions && !positions.length && (
        <div css={styles.noOrders}>No current positions</div>
      )}
      { positions && positions.length !== 0 && (
        <Fragment>
          <table css={styles.table}>
            <thead>
              <tr>
                <td>name</td>
                <td>side</td>
                <td>qty</td>
                <td>avg. entry price</td>
                <td>current price</td>
                <td>trade value</td>
                <td>market value</td>
                <td>unrealized PL</td>
              </tr>
            </thead>
            <tbody>
              { positions.map((p) => (
                <tr key={p.asset_id}>
                  <td>{ p.symbol }</td>
                  <td>
                    { p.side }
                  </td>
                  <td>
                    { p.qty }
                  </td>
                  <td>
                    { p.avg_entry_price }
                  </td>
                  <td>
                    { p.current_price }
                    {
                      <span css={styles.coloredSpan(absChange(p) < 0)}>
                        { `(${absChange(p)})` }
                      </span>
                    }
                    {
                      <span css={styles.coloredSpan(absChange(p) < 0)}>
                        { `(${pctChange(p)}%)` }
                      </span>
                    }
                  </td>
                  <td>
                    { p.cost_basis }
                  </td>
                  <td>
                    { p.market_value }
                  </td>
                  <td className={p.unrealized_pl < 0 ? 'error' : 'ok'}>
                    { parseFloat(p.unrealized_pl).toFixed(2) }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div css={styles.PLsum}>{ getPLSum(positions) }</div>
        </Fragment>
      )}
    </section>
  );
};

PositionsBox.propTypes = {
  positions: array,
  onRequestPositions: func,
};

export default PositionsBox;
