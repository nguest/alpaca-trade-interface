/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { array } from 'prop-types';
import Toast from '../Toast';
import styles from './styles';
import LoginPage from '../LoginPage';
import MainPage from '../MainPage';
import Route from '../../router/Route';


const MainContainer = (props) => {
  const [notification, setNotification] = useState(null);
  useEffect(() => {
    setNotification(props.notifications[0]);
  }, [props.notifications.length]);

  return (
    <div css={styles.app}>
      <Global styles={styles.global} />
      <Route component={<LoginPage {...props} />} path="/bah" exact />
      <Route component={<MainPage {...props} />} path="/" exact />
      { notification
        && <Toast {...notification} /> }
    </div>
  );
};

MainContainer.propTypes = {
  notifications: array,
};

export default MainContainer;
