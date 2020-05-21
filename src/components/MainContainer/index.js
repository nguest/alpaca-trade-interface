/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { array } from 'prop-types';
import Toast from '../Toast';
import styles from './styles';
import Icon from '../Icon';
import LoginPage from '../LoginPage';
import MainPage from '../MainPage';
import OrdersPage from '../OrdersPage';

import Route from '../../router/Route';
import Header from '../Header';
import Link from '../../router/Link';


const MainContainer = (props) => {
  const [notification, setNotification] = useState(null);
  useEffect(() => {
    setNotification(props.notifications[0]);
  }, [props.notifications.length]);

  return (
    <div css={styles.app}>
      <Global styles={styles.global} />
      <aside css={styles.sidebar}>
        <Link to="/"><Icon name="home-outline" /></Link>
        <Link to="/orders"><Icon name="book-outline" /></Link>
      </aside>
      <Route component={<LoginPage {...props} />} path="/bah" exact />
      <Route component={<MainPage {...props} />} path="/" exact />
      <Route component={<OrdersPage {...props} />} path="/orders" exact />
      { notification
        && <Toast {...notification} /> }
    </div>
  );
};

MainContainer.propTypes = {
  notifications: array,
};

export default MainContainer;
