/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { func } from 'prop-types';
import LoginForm from './LoginForm';
import styles from './styles';

const LoginPage = ({
  onRequestLogin,
}) => (
  <main css={styles.main}>
    <section css={styles.loginContainer}>
      <h2>welcome! sign in</h2>
      <LoginForm onRequestLogin={onRequestLogin} />
    </section>
  </main>
);

LoginPage.propTypes = {
  onRequestLogin: func,
};

export default LoginPage;
