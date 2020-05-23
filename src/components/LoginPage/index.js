/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { func } from 'prop-types';
import Login from '../../containers/Login';
import styles from './styles';

const LoginPage = ({
  firebase,
}) => (
  <main css={styles.main}>
    <section css={styles.loginContainer}>
      <h2>welcome! sign in</h2>
      <Login firebase={firebase} />
    </section>
  </main>
);

LoginPage.propTypes = {
  onRequestLogin: func,
};

export default LoginPage;
