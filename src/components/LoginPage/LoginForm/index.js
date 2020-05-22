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
  const [password, setPassword] = useState('');

  const onClickButton = () => {
    if (!address.length) return;
    onRequestLogin(address);
  };

  return (
    <fieldset css={styles.form}>
      <label htmlFor="login-username">Username</label>
      <input
        css={styles.input}
        type="text"
        placeholder="enter username"
        id="login-username"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label htmlFor="login-password">Password</label>
      <input
        css={styles.input}
        type="password"
        placeholder="enter password"
        id="login-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
