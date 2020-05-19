/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { func } from 'prop-types';
import Button from '../../Button';

import styles from './styles';


const LoginForm = ({
  onRequestLogin,
}) => {
  const [address, setAddress] = useState('');

  const onClickButton = () => {
    if (!address.length) return;
    onRequestLogin(address);
  };

  return (
    <fieldset css={styles.form}>
      <label htmlFor="login-form">Jobcoin Address</label>
      <input
        css={styles.input}
        type="text"
        placeholder="enter address"
        id="login-form"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button
        disabled={!address.length}
        label="Sign In"
        onClick={onClickButton}
      />
    </fieldset>
  );
};

LoginForm.propTypes = {
  onRequestLogin: func,
};

export default LoginForm;
