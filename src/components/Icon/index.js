/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { number, string, func } from 'prop-types';

import styles from './styles';

const Icon = ({
  name,
  onClick,
  size = 24,
}) => (
  <ion-icon
    name={name}
    css={styles.icon(size)}
    onClick={onClick}
  />
);

Icon.propTypes = {
  name: string,
  onClick: func,
  size: number,
};

export default Icon;
