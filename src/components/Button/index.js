/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { func, string, oneOf, bool } from 'prop-types';
import styles from './styles';

const Button = ({
  disabled,
  icon,
  label,
  onClick,
  title,
  type,
}) => (
  <button
    css={styles.button(null, disabled, type)}
    disabled={disabled}
    type="button"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }}
    title={title}
  >
    { label }
    { icon && <i className={`icon ion-md-${icon}`} /> }
  </button>
);

Button.propTypes = {
  disabled: bool,
  icon: string,
  label: string,
  onClick: func,
  title: string,
  type: oneOf(['default', 'invisible']),
};

export default Button;
