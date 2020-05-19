/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { number, string } from 'prop-types';

import styles from './styles';

const Icon = ({
  name,
  size = 24,
}) => (
  <ion-icon
    name={name}
    css={styles.icon(size)}
  />
);

Icon.propTypes = {
  name: string,
  size: number,
};

export default Icon;
